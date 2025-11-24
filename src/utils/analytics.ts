// src/utils/analytics.ts
// Sistema de tracking para medir resultados Fase 4

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class AnalyticsTracker {
  private static instance: AnalyticsTracker;
  
  private constructor() {
    // Initialize tracking
    this.initializeTracking();
  }

  public static getInstance(): AnalyticsTracker {
    if (!AnalyticsTracker.instance) {
      AnalyticsTracker.instance = new AnalyticsTracker();
    }
    return AnalyticsTracker.instance;
  }

  private initializeTracking() {
    // Track scroll depth
    this.trackScrollDepth();
    
    // Track time on page
    this.trackTimeOnPage();
    
    // Track element visibility
    this.trackElementVisibility();
  }

  // Track scroll depth percentage
  private trackScrollDepth() {
    const scrollPercentages = [25, 50, 75, 90, 100];
    const tracked = new Set<number>();

    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);

      scrollPercentages.forEach(threshold => {
        if (percentage >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          this.track({
            category: 'Scroll Depth',
            action: `Scrolled ${threshold}%`,
            label: window.location.pathname,
            value: threshold
          });
        }
      });
    });
  }

  // Track time on page in 30-second intervals
  private trackTimeOnPage() {
    let timeSpent = 0;
    const interval = setInterval(() => {
      timeSpent += 30;
      this.track({
        category: 'Engagement',
        action: 'Time on Page',
        label: `${timeSpent} seconds`,
        value: timeSpent
      });

      // Stop tracking after 10 minutes
      if (timeSpent >= 600) {
        clearInterval(interval);
      }
    }, 30000);

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
    });
  }

  // Track when important elements become visible
  private trackElementVisibility() {
    const elementsToTrack = [
      { id: 'hero', name: 'Hero Section' },
      { id: 'problema', name: 'Problem Section' },
      { id: 'por-que-conmigo', name: 'Why Choose Me' },
      { id: 'sobre-metodo', name: 'About Method' },
      { id: 'testimonios', name: 'Testimonials' },
      { id: 'faq', name: 'FAQ' }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = elementsToTrack.find(el => el.id === entry.target.id);
          if (element) {
            this.track({
              category: 'Section Visibility',
              action: 'Section Viewed',
              label: element.name
            });
          }
        }
      });
    }, { threshold: 0.5 });

    // Observe elements after DOM is ready
    setTimeout(() => {
      elementsToTrack.forEach(element => {
        const el = document.getElementById(element.id);
        if (el) observer.observe(el);
      });
    }, 1000);
  }

  // Track CTA clicks
  public trackCTAClick(ctaName: string, ctaLocation: string) {
    this.track({
      category: 'CTA Click',
      action: ctaName,
      label: ctaLocation
    });
  }

  // Track video interactions
  public trackVideoPlay(videoTitle: string) {
    this.track({
      category: 'Video Engagement',
      action: 'Video Play',
      label: videoTitle
    });
  }

  // Track testimonial navigation
  public trackTestimonialNavigation(direction: 'next' | 'prev', testimonialName: string) {
    this.track({
      category: 'Testimonial Interaction',
      action: `Navigate ${direction}`,
      label: testimonialName
    });
  }

  // Track FAQ interactions
  public trackFAQClick(question: string) {
    this.track({
      category: 'FAQ Interaction',
      action: 'Question Opened',
      label: question
    });
  }

  // Core tracking function (sends to Amplitude or GA4)
  private track(event: AnalyticsEvent) {
    // Send to Amplitude (already integrated in your HTML)
    if (typeof window !== 'undefined' && (window as any).amplitude) {
      (window as any).amplitude.track(event.action, {
        category: event.category,
        label: event.label,
        value: event.value
      });
    }

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
  }

  // A/B Testing helper
  public getVariant(testName: string): 'A' | 'B' {
    const key = `ab_test_${testName}`;
    let variant = localStorage.getItem(key) as 'A' | 'B' | null;
    
    if (!variant) {
      variant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(key, variant);
      
      this.track({
        category: 'A/B Test',
        action: 'Variant Assigned',
        label: `${testName}: ${variant}`
      });
    }
    
    return variant;
  }

  // Track form submissions
  public trackFormSubmission(formName: string, success: boolean) {
    this.track({
      category: 'Form Submission',
      action: success ? 'Submit Success' : 'Submit Error',
      label: formName
    });
  }

  // Track exit intent
  public trackExitIntent() {
    let tracked = false;
    
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 10 && !tracked) {
        tracked = true;
        this.track({
          category: 'Exit Intent',
          action: 'Mouse Left Viewport',
          label: window.location.pathname
        });
      }
    });
  }
}

// Export singleton instance
export const analytics = AnalyticsTracker.getInstance();

// Helper function to track CTA clicks from components
export const trackCTA = (ctaName: string, ctaLocation: string) => {
  analytics.trackCTAClick(ctaName, ctaLocation);
};

export const trackVideo = (videoTitle: string) => {
  analytics.trackVideoPlay(videoTitle);
};

export const trackTestimonial = (direction: 'next' | 'prev', name: string) => {
  analytics.trackTestimonialNavigation(direction, name);
};

export const trackFAQ = (question: string) => {
  analytics.trackFAQClick(question);
};
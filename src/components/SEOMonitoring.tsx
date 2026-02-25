import React, { useEffect } from 'react';

const SEOMonitoring: React.FC = () => {
  useEffect(() => {
    // Track page views for SEO monitoring
    const trackPageView = () => {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
      
      // SEO metrics tracked via analytics only (no local storage)
    };

    // Track on mount
    trackPageView();
    
    // Track title changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.head) {
          trackPageView();
        }
      });
    });
    
    observer.observe(document.head, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default SEOMonitoring;
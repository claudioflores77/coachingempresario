import { useEffect } from 'react';

interface IndexNowConfig {
  host: string;
  key: string;
  keyLocation: string;
}

export const useIndexNow = (config?: IndexNowConfig) => {
  useEffect(() => {
    // IndexNow implementation for instant indexing
    const submitToIndexNow = async (url: string) => {
      if (!config) return;
      
      try {
        const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${config.key}`;
        
        // Submit to IndexNow API
        await fetch(indexNowUrl, {
          method: 'GET',
          mode: 'no-cors' // Avoid CORS issues
        });
        
        console.log(`IndexNow notification sent for: ${url}`);
      } catch (error) {
        console.log('IndexNow notification failed:', error);
      }
    };

    // Submit current page to IndexNow on mount
    if (config && typeof window !== 'undefined') {
      submitToIndexNow(window.location.href);
    }
  }, [config]);

  const notifyIndexNow = (url: string) => {
    if (!config) return;
    
    const indexNowUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${config.key}`;
    
    // Use a simple image request to avoid CORS
    const img = new Image();
    img.src = indexNowUrl;
  };

  return { notifyIndexNow };
};

export default useIndexNow;

import React, { useState } from 'react';

interface SafeIframeProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  className?: string;
}

const SafeIframe: React.FC<SafeIframeProps> = ({ 
  src, 
  title, 
  width = "853", 
  height = "480", 
  className = "" 
}) => {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    console.log(`Successfully loaded iframe: ${src}`);
    setIsLoading(false);
  };

  const handleIframeError = () => {
    console.log(`Error loading iframe: ${src}`);
    setIframeError(true);
    setIsLoading(false);
  };

  if (iframeError) {
    return (
      <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-2">Error al cargar el video</p>
          <a 
            href={src} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-red hover:underline"
          >
            Ver video en YouTube
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center rounded">
          <span className="text-gray-400">Cargando video...</span>
        </div>
      )}
      <iframe 
        width={width}
        height={height}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={className}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        loading="lazy"
      />
    </div>
  );
};

export default SafeIframe;

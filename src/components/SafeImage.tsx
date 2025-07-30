
import React, { useState, memo } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const SafeImage: React.FC<SafeImageProps> = memo(({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/placeholder.svg',
  loading = 'lazy',
  priority = false
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    console.log(`Error loading image: ${src}`);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log(`Successfully loaded image: ${src}`);
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <img 
        src={fallbackSrc}
        alt={alt}
        className={className}
        onError={() => console.log(`Fallback image also failed: ${fallbackSrc}`)}
      />
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <span className="text-gray-400 text-xs">Cargando...</span>
        </div>
      )}
      <img 
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        loading={priority ? 'eager' : loading}
        onError={handleImageError}
        onLoad={handleImageLoad}
        decoding="async"
      />
    </>
  );
});

export default SafeImage;

import React from 'react';

interface SafeIframeProps {
  src: string;
  title: string;
  className?: string;
}

const SafeIframe: React.FC<SafeIframeProps> = ({ src, title, className }) => {
  return (
    <iframe
      src={src}
      title={title}
      className={className}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
};

export default SafeIframe;
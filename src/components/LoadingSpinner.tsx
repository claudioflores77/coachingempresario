
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Cargando...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4';

  return (
    <div className={containerClasses} role="status" aria-label={text}>
      <div className="text-center">
        <div className={`${sizeClasses[size]} border-4 border-consulting-blue border-t-transparent rounded-full animate-spin mx-auto`}></div>
        {text && (
          <p className="mt-2 text-consulting-gray font-medium">{text}</p>
        )}
      </div>
      <span className="sr-only">{text}</span>
    </div>
  );
};

export default LoadingSpinner;

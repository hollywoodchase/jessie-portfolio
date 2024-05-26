import React, { useState } from 'react';

const ProgressiveImage = ({ placeholderSrc, src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`progressive-image-container ${className}`}>
      {isLoading && <img src={placeholderSrc} alt={alt} className="placeholder" />}
      <img
        src={src}
        alt={alt}
        className={`original ${isLoading ? 'hidden' : ''}`}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default ProgressiveImage;

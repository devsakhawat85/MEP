import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#181B20] text-[#9CA3AF] bg-tech-grid-dark overflow-hidden p-6 ${containerClassName || className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 border border-white/15 flex items-center justify-center mb-3 text-[#38BDF8]">
          <Compass className="w-5 h-5" />
        </div>
        <span className="font-mono-tech text-xs tracking-wider text-white/75 text-center max-w-xs">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};

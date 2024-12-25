import Image, { ImageProps } from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

type NextImageProps = {
  useSkeleton?: boolean;
  className?: string;
  imageClassName?: string;
  blurClassName?: string;
  containerStyle?: React.CSSProperties;
  alt: string;
} & ({ width: string | number; height: string | number } | { fill?: boolean }) &
  ImageProps;

export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  imageClassName,
  blurClassName,
  containerStyle,
  fill = false, // Default fill adalah false
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState<'loading' | 'complete'>(
    useSkeleton ? 'loading' : 'complete'
  );

  return (
    <div
      style={containerStyle}
      className={cn(
        'relative', // Posisi relative untuk layout fill
        fill ? 'w-full h-full' : '', // Hanya berlaku jika fill true
        className
      )}
    >
      <Image
        src={src}
        fill={fill} // Properti fill menggantikan layout
        width={!fill ? width : undefined} // Hanya gunakan width jika fill false
        height={!fill ? height : undefined} // Hanya gunakan height jika fill false
        style={{ objectFit: 'cover' }} // Properti baru menggantikan objectFit
        alt={alt}
        className={cn(
          imageClassName,
          status === 'loading' && 'animate-pulse',
          blurClassName
        )}
        onLoad={() => setStatus('complete')} // Ganti onLoadingComplete dengan onLoad
        {...rest}
      />
    </div>
  );
}

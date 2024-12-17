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
} & (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
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
  layout = 'intrinsic', // Default layout jika tidak diisi
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState<'loading' | 'complete'>(
    useSkeleton ? 'loading' : 'complete'
  );

  return (
    <div
      style={containerStyle}
      className={cn(
        'relative', // Relative untuk layout fill
        layout === 'fill' ? 'w-full h-full' : '',
        className
      )}
    >
      <Image
        src={src}
        layout={layout}
        width={layout !== 'fill' ? width : undefined}
        height={layout !== 'fill' ? height : undefined}
        objectFit='cover' // Memotong gambar sesuai kontainer
        alt={alt}
        className={cn(
          imageClassName,
          status === 'loading' && 'animate-pulse',
          blurClassName
        )}
        onLoadingComplete={() => setStatus('complete')}
        {...rest}
      />
    </div>
  );
}

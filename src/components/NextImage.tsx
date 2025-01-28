import { cn } from '@nextui-org/theme';
import Image from 'next/image';
import React from 'react';

type NextImageProps = {
  useSkeleton?: boolean;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  imageClassName?: string;
  blurClassName?: string;
  containerStyle?: React.CSSProperties;
  fill?: boolean;
  [key: string]: any;
};

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
  fill = false, // Default `fill` adalah false
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState<'loading' | 'complete'>(
    useSkeleton ? 'loading' : 'complete'
  );

  return (
    <div
      style={containerStyle}
      className={cn(
        'relative',
        fill ? 'w-full h-full' : '', // Gunakan w-full dan h-full jika menggunakan fill
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill} // Properti fill menggantikan layout
        width={!fill ? width : undefined} // Gunakan width jika fill false
        height={!fill ? height : undefined} // Gunakan height jika fill false
        style={{
          objectFit: 'cover', // Atur gambar memenuhi dimensi secara proporsional
          ...(fill
            ? {}
            : {
                width: `${width}px`, // Atur width spesifik jika fill false
                height: `${height}px`, // Atur height spesifik jika fill false
              }),
        }}
        className={cn(
          imageClassName,
          status === 'loading' && 'animate-pulse', // Skeleton loading
          blurClassName
        )}
        onLoad={() => setStatus('complete')} // Update status saat gambar selesai dimuat
        {...rest}
      />
    </div>
  );
}

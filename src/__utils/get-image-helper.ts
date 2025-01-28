export const getImageUrl = (imagePath: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error(
      'Base URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.'
    );
  }

  if (!imagePath) {
    throw new Error('Image path is required to generate the URL.');
  }

  return `${baseUrl}public/${imagePath}`;
};

export const getImageUrl = (imagePath: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error(
      'Base URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.'
    );
  }

  if (!imagePath) {
    return `/images/people.jpg`;
  }

  return `${baseUrl}public/${imagePath}`;
};

export const getImageDriver = (imagePath: string, customBaseUrl?: string) => {
  const baseUrl = customBaseUrl || process.env.NEXT_PUBLIC_API_URL_DRIVER;

  if (!baseUrl) {
    throw new Error(
      'Base URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.'
    );
  }

  if (!imagePath) {
    return `/images/people.jpg`;
  }

  return `${baseUrl}public/${imagePath}`;
};
export const getImageTestimonial = (
  imagePath: string,
  customBaseUrl?: string
) => {
  const baseUrl = customBaseUrl || process.env.NEXT_PUBLIC_API_URL_TESTI;

  if (!baseUrl) {
    throw new Error(
      'Base URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables.'
    );
  }

  if (!imagePath) {
    return `/images/people.jpg`;
  }

  return `${baseUrl}public/${imagePath}`;
};

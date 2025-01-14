export function getImageFromAPI(image: string): string {
  return `http://localhost:3002/public/tour-images/${image}`;
}

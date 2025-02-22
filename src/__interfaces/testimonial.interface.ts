export interface ListTertimonialResI {
  data: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  message: string;
  country: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

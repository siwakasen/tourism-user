import { useEffect, useState } from 'react';

import { fetchTestimonials } from '@/_services/testimonial';
import { Testimonial } from '@/__interfaces/testimonial.interface';

const UseListTestimonial = () => {
  const [testimonials, setTestimonial] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchtestimonial = async () => {
    try {
      setIsLoading(true);
      const testimonial = await fetchTestimonials({
        limit: 100,
        page: 1,
        search: '',
      });

      setTestimonial(testimonial?.data ?? []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchtestimonial();
  }, []);

  return { testimonials, isLoading };
};

export default UseListTestimonial;

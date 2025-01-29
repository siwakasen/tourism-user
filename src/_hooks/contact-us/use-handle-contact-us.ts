import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { ContactUsReqI } from '@/__interfaces/contact-us.interface';
import { sentContactUs } from '@/_services/contact-us';

export const contactUsSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .max(50, 'Name cannot exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  subject: yup.string().required('Subject is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

const useContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsReqI>({
    resolver: yupResolver(contactUsSchema),
  });

  const submitContactUs = async (data: ContactUsReqI) => {
    try {
      setIsSubmitting(true);
      // Simulasikan pengiriman data
      await sentContactUs(data);

      toast.success('Your form has been sent successfully!');
      reset(); // Reset form setelah submit
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(submitContactUs),
    errors,
    isSubmitting,
  };
};

export default useContactUs;

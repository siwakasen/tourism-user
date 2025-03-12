import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import {
  CheckoutPackageTourFormReqI,
  CheckoutPackageTourReqI,
} from '@/__interfaces/checkout.interface';
import {
  ListTourPackageResI,
  PackageTour,
} from '@/__interfaces/package-tour.interface';
import { generateBookingMessage } from '@/__utils/generate-message/generate-package-tour';
import { sendWhatsAppMessage } from '@/__utils/whatsapp-helper';
import {
  checkoutPackageTour,
  fetchTourPackages,
  getDetailTourPackage,
} from '@/_services/package-tour';

const checkoutSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  country_of_origin: yup.string().required('Country of origin is required'),
  phone_number: yup
    .string()
    .matches(/^[+]?[\d\s-]{10,15}$/, 'Invalid phone number format')
    .required('Phone number is required'),
  adult_count: yup
    .number()
    .typeError('Adult count must be a valid number')
    .min(1, 'At least one adult must be added')
    .required('Adult count is required'),
  children_count: yup
    .number()
    .typeError('Children count must be a valid number')
    .min(0, 'Children count cannot be negative')
    .required('Children count is required'),
  start_date: yup
    .string()
    .required('Start date is required')
    .test('valid-date', 'Start date cannot be in the past', (value) => {
      const today = new Date().toISOString().split('T')[0];
      return value ? value >= today : false;
    }),
  end_date: yup
    .string()
    .required('End date is required')
    .test('valid-date', 'End date cannot be in the past', (value) => {
      const today = new Date().toISOString().split('T')[0];
      return value ? value >= today : false;
    }),
  pickup_location: yup.string().required('Pickup location is required'),
  pickup_time: yup
    .string()
    .required('Pickup time is required')
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      'Invalid pickup time format (HH:mm)'
    ),
  additional_condition: yup.string().optional(),
});

const UseCheckoutPackageTour = (id: string) => {
  const [data, setData] = useState<PackageTour>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [maxAdult, setMaxAdult] = useState(1);
  const [maxChildren, setMaxChildren] = useState(0);
  const [listTourPackages, setListTourPackages] =
    useState<ListTourPackageResI>();
  const [maxGroupSize, setMaxGroupSize] = useState(0);

  const fetchDetailPackageTour = async () => {
    try {
      setIsLoading(true);
      const tourPackage = await getDetailTourPackage(id);
      const dataListTourPackage = await fetchTourPackages({
        limit: 5,
        page: 1,
        search: '',
      });
      setData(tourPackage.data);
      setTotalPrice(tourPackage.data.package_price ?? 0);
      setListTourPackages(dataListTourPackage);
      setMaxGroupSize(tourPackage.data.max_group_size);
      if (tourPackage.data) {
        setMaxAdult(tourPackage.data.max_group_size);
        setMaxChildren(tourPackage.data.max_group_size - 1);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const _checkoutPackageTour = async (data: CheckoutPackageTourFormReqI) => {
    try {
      const checkoutData: CheckoutPackageTourReqI = {
        package_id: id,
        name: data.name,
        email: data.email,
        country_of_origin: data.country_of_origin,
        phone_number: data.phone_number,
        number_of_person: [data.adult_count, data.children_count],
        start_date: data.start_date,
        end_date: data.end_date,
        pickup_location: data.pickup_location,
        pickup_time: data.pickup_time,
        additional_condition: data.additional_condition,
      };
      await checkoutPackageTour(checkoutData);

      toast.success('Your package tour has been booked successfully!');
      setIsModalOpen2(true);
    } catch (e) {
      toast.success('Your package tour has been booked successfully!');
    } finally {
      setIsModalOpen(false);
    }
  };
  const _handleSendMessageWa = async (
    dataTour: CheckoutPackageTourFormReqI
  ) => {
    try {
      sendWhatsAppMessage({
        phoneNumber: '6281990104720', // Contoh nomor telepon (Indonesia)
        message: generateBookingMessage(dataTour, data!, totalPrice),
      });
    } finally {
      setIsModalOpen2(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues: formData,
    setValue,
    reset,
    watch,
  } = useForm<CheckoutPackageTourFormReqI>({
    resolver: yupResolver(checkoutSchema), // Integrasikan Yup dengan React Hook Form
  });

  const startDate = watch('start_date');

  useEffect(() => {
    // Hanya dijalankan saat komponen pertama kali dirender
    reset({
      adult_count: 1,
      children_count: 0,
    });
    fetchDetailPackageTour();
  }, []); // Dependency kosong memastikan hanya dijalankan sekali

  useEffect(() => {
    // Dijalankan setiap kali `startDate` berubah
    if (startDate && data?.duration) {
      const startDateTime = new Date(startDate);
      const endDateTime = new Date(
        startDateTime.getTime() + data.duration * 60 * 60 * 1000
      ); // Konversi jam ke ms
      const formattedEndDate = endDateTime.toISOString().split('T')[0]; // Format ke YYYY-MM-DD
      setValue('end_date', formattedEndDate); // Atur nilai end_date
    }
  }, [startDate, data?.duration, setValue]); // Dependency `startDate` dan `data.duration`

  const _handleNext = () => {
    setIsModalOpen(true);
  };

  const handleCheckout = handleSubmit(_checkoutPackageTour);
  const handleSendMessageWa = handleSubmit(_handleSendMessageWa);
  const handleNext = handleSubmit(_handleNext);

  return {
    data,
    isLoading,
    listTourPackages,
    register,
    errors,
    handleCheckout,
    formData,
    handleNext,
    setValue,
    isModalOpen,
    setIsModalOpen,
    isModalOpen2,
    setIsModalOpen2,
    handleSendMessageWa,
    totalPrice,
    setTotalPrice,
    maxAdult,
    maxChildren,
    setMaxAdult,
    setMaxChildren,
    maxGroupSize,
    setMaxGroupSize,
  };
};

export default UseCheckoutPackageTour;

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Car, ListCarsResI } from '@/__interfaces/car-tour.interface';
import {
  CheckoutCarsFormReqI,
  CheckoutCarsReqI,
} from '@/__interfaces/checkout.interface';
import { generateBookingMessage } from '@/__utils/generate-message/generate-package-car';
import { sendWhatsAppMessage } from '@/__utils/whatsapp-helper';
import { checkoutCars, fetchCars, getDetailCar } from '@/_services/cars';

const checkoutSchema = yup.object().shape({
  car_id: yup.string().required('Car ID is required'), // Tambahkan validasi untuk car_id
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
  number_of_person: yup
    .number()
    .typeError('Number of person must be a valid number')
    .min(1, 'At least one person must be added')
    .required('Number of person is required'),
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
  additional_message: yup.string().optional(),
});

const UseCheckoutCar = (id: string) => {
  const [data, setData] = useState<Car>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [listCars, setListCars] = useState<ListCarsResI>();
  const [days, setDays] = useState<number>(0);
  const [start_date, setStartDate] = useState<Date>(new Date());
  const [end_date, setEndDate] = useState<Date>(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );

  const fetchDetailCar = async () => {
    try {
      setIsLoading(true);
      const car = await getDetailCar(id);
      const dataListCars = await fetchCars({
        limit: 5,
        page: 1,
        search: '',
      });
      setData(car.data);
      setTotalPrice(car.data.price ?? 0);
      setDays(1);
      setListCars(dataListCars);
    } finally {
      setIsLoading(false);
    }
  };

  const _checkoutCar = async (data: CheckoutCarsFormReqI) => {
    try {
      const checkoutData: CheckoutCarsReqI = {
        car_id: id,
        name: data.name,
        email: data.email,
        country_of_origin: data.country_of_origin,
        phone_number: data.phone_number,
        number_of_person: data.number_of_person,
        start_date: data.start_date,
        end_date: data.end_date,
        pickup_location: data.pickup_location,
        pickup_time: data.pickup_time,
        additional_message: data.additional_message,
      };
      await checkoutCars(checkoutData);
      toast.success('Your car rental has been booked successfully!');
      setIsModalOpen2(true);
    } catch (e) {
      toast.error('Your car rental has been failed to book!');
    } finally {
      setIsModalOpen(false);
    }
  };

  const _handleSendMessageWa = async (dataCar: CheckoutCarsFormReqI) => {
    try {
      sendWhatsAppMessage({
        phoneNumber: '6281990104720',
        message: generateBookingMessage(dataCar, data!, totalPrice),
      });
    } finally {
      setIsModalOpen2(false);
    }
  };

  useEffect(() => {
    reset({
      car_id: id,
      number_of_person: 1,
      start_date: new Date().toISOString().split('T')[0],
      end_date: new Date(Date.now() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
    });
    fetchDetailCar();
  }, []);

  const _handleNext = () => {
    setIsModalOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues: formData,
    setValue,
    reset,
  } = useForm<CheckoutCarsFormReqI>({
    resolver: yupResolver(checkoutSchema),
  });
  const calculateTotalPrice = useCallback((days: number, price: number) => {
    setTotalPrice(days * price);
  }, []);

  const calculateDays = useCallback((start_date: Date, end_date: Date) => {
    const diffTime = Math.abs(end_date.getTime() - start_date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
  }, []);

  useEffect(() => {
    if (start_date && end_date) {
      calculateDays(start_date, end_date);
      calculateDays(start_date, end_date);
      setDays(days);

      // Example for calculating price, assuming `car.price` exists
      calculateTotalPrice(days, data?.price ?? 0);
    }
  }, [
    start_date,
    end_date,
    calculateDays,
    calculateTotalPrice,
    data?.price,
    days,
  ]);

  const handleCheckout = handleSubmit(_checkoutCar);
  const handleSendMessageWa = handleSubmit(_handleSendMessageWa);
  const handleNext = handleSubmit(_handleNext);

  return {
    data,
    isLoading,
    listCars,
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
    days,
    setDays,
    calculateDays,
    calculateTotalPrice,
    start_date,
    setStartDate,
    end_date,
    setEndDate,
  };
};

export default UseCheckoutCar;

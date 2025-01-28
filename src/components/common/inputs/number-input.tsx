import React, { useState } from 'react';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface NumberInputProps {
  min: number;
  max: number; // Add max property
  defaultValue: number;
  name: string; // Nama field untuk React Hook Form
  setValue: UseFormSetValue<any>; // Fungsi setValue dari React Hook Form
  error?: FieldError; // Untuk menampilkan error
  onChange?: () => void; // Fungsi yang akan dipanggil ketika nilai berubah
}

const NumberInput: React.FC<NumberInputProps> = ({
  min,
  max, // Destructure max
  defaultValue,
  name,
  setValue,
  error,
  onChange,
}) => {
  const [value, setLocalValue] = useState(defaultValue);

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value > min) {
      const newValue = value - 1;
      setLocalValue(newValue);
      setValue(name, newValue);
      if (onChange) onChange(); // Perbarui nilai form
    }
  };

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value < max) {
      const newValue = value + 1;
      setLocalValue(newValue);
      setValue(name, newValue); // Perbarui nilai form
      if (onChange) onChange();
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={handleDecrement}
          className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100'
          disabled={value <= min}
        >
          <FaMinus />
        </button>
        <span className='mx-4 w-8 text-center'>{value}</span>
        <button
          type='button'
          onClick={handleIncrement}
          className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100'
          disabled={value >= max} // Disable button if value is at max
        >
          <FaPlus />
        </button>
      </div>
      {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
    </div>
  );
};

export default NumberInput;

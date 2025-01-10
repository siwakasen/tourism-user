import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
interface NumberInputProps {
  min: number;
  defaultValue: number;
  onChange?: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  min,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange && onChange(newValue);
    }
  };

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <button
          onClick={handleDecrement}
          className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100'
          disabled={value <= min}
        >
          <FaMinus />
        </button>
        <span className='mx-4 w-8 text-center'>{value}</span>
        <button
          onClick={handleIncrement}
          className='w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100'
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;

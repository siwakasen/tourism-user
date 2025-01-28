import React from 'react';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  textColor?: string; // Warna teks input
  placeholderColor?: string; // Warna placeholder
}

const FloatingInput: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  textColor = 'text-black', // Default warna teks hitam
  placeholderColor = 'placeholder:text-gray-400', // Default warna placeholder abu-abu
}) => {
  return (
    <div className='relative w-full'>
      {/* Label */}
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-gray-700 `}
      >
        {label}
      </label>
      {/* Input Field */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`grow block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 dark:border-neutral-700  dark:focus:border-neutral-500 dark:focus:ring-neutral-500 ${textColor} ${placeholderColor} ${className}`}
      />
    </div>
  );
};

export default FloatingInput;

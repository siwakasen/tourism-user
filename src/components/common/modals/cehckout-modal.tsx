import React from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSendToWhatsApp: () => void;
  handleSendToEmail: () => void;
  packageName: string;
  date: string;
  totalAdult: number;
  totalChild: number;
  totalPrice: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  packageName,
  handleSendToEmail,
  date,
  totalAdult,
  totalChild,
  totalPrice,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* DaisyUI Modal */}
      <div className='modal modal-open'>
        <div className='modal-box'>
          {/* Header */}
          <h3 className='font-bold text-lg'>Order Details</h3>

          {/* Order Details */}
          <div className='mt-4 space-y-4'>
            <p>
              <span className='font-medium text-gray-700'>Package Name:</span>{' '}
              {packageName}
            </p>
            <p>
              <span className='font-medium text-gray-700'>Date:</span> {date}
            </p>
            <p>
              <span className='font-medium text-gray-700'>Adults:</span>{' '}
              {totalAdult}
            </p>
            <p>
              <span className='font-medium text-gray-700'>Children:</span>{' '}
              {totalChild}
            </p>
            <p>
              <span className='font-medium text-gray-700'>Total Price:</span>
              {formatCurrency(totalPrice, 'IDR')}
            </p>
          </div>

          {/* Actions */}

          <div className='modal-action flex justify-between mt-6'>
            {/* Tombol Cancel */}
            <button
              type='button'
              className='btn btn-outline btn-error flex-grow'
              onClick={onClose}
            >
              Cancel
            </button>

            {/* Tombol Send to Email */}
            <button
              onClick={handleSendToEmail}
              className='btn btn-primary flex-grow'
            >
              Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;

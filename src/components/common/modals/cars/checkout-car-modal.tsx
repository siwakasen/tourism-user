import React from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSendToEmail: () => void;
  carName: string;
  rentalDays: number;
  totalPrice: number;
}

const CheckoutCarModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  carName,
  handleSendToEmail,
  rentalDays,
  totalPrice,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* DaisyUI Modal */}
      <div className='modal modal-open'>
        <div className='modal-box'>
          {/* Header */}
          <h3 className='font-bold text-lg'>Rental Details</h3>

          {/* Order Details */}
          <div className='mt-4 space-y-4'>
            <p>
              <span className='font-medium text-gray-700'>Car Name:</span>{' '}
              {carName}
            </p>
            <p>
              <span className='font-medium text-gray-700'>Rental Days:</span>{' '}
              {rentalDays}
            </p>
            <p>
              <span className='font-medium text-gray-700'>Total Price:</span>{' '}
              {formatCurrency(totalPrice, 'IDR')}
            </p>
          </div>

          {/* Actions */}

          <div className='modal-action flex justify-between mt-6'>
            {/* Cancel Button */}
            <button
              type='button'
              className='btn btn-outline btn-error flex-grow'
              onClick={onClose}
            >
              Cancel
            </button>

            {/* Send to Email Button */}
            <button
              onClick={handleSendToEmail}
              className='btn btn-primary flex-grow'
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCarModal;

import React from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

interface ConfirmationCarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  carName: string;
  rentalDays: number;
  totalPrice: number;
}

const ConfirmationCarModal: React.FC<ConfirmationCarModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  carName,
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
          <h3 className='font-bold text-lg'>Confirm Your Car Rental</h3>

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

          {/* Confirmation Question */}
          <p className='mt-6 text-gray-700'>
            Do you want to confirm this car rental via WhatsApp?
          </p>

          {/* Actions */}
          <div className='modal-action flex justify-between mt-6'>
            {/* Cancel Button */}
            <button
              type='button'
              className='btn btn-outline btn-error flex-grow'
              onClick={onClose}
            >
              No, Cancel
            </button>

            {/* Confirm Button */}
            <button
              type='button'
              onClick={onConfirm}
              className='btn btn-success text-white flex-grow'
            >
              Yes, Confirm via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationCarModal;

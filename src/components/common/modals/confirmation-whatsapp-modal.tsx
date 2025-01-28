import React from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  packageName: string;
  date: string;
  totalAdult: number;
  totalChild: number;
  totalPrice: number;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  packageName,
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
          <h3 className='font-bold text-lg'>Confirm Your Booking</h3>

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
              {formatCurrency(totalPrice, 'USD')}
            </p>
          </div>

          {/* Confirmation Question */}
          <p className='mt-6 text-gray-700'>
            Do you want to confirm this booking via WhatsApp?
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

export default ConfirmationModal;

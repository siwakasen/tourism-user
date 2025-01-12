import React from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  phoneNumber: string;
  email: string;
  date: string;
  totalAdult: number;
  totalChild: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  packageName,
  phoneNumber,
  email,
  date,
  totalAdult,
  totalChild,
}) => {
  const totalPrice = totalAdult * 100 + totalChild * 50; // Example pricing logic

  const handleSendToWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello, I would like to book the following package:\n\nPackage: ${packageName}\nDate: ${date}\nAdults: ${totalAdult}\nChildren: ${totalChild}\nTotal Price: $${totalPrice}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSendToEmail = () => {
    const subject = encodeURIComponent(`Booking for ${packageName}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to book the following package:\n\nPackage: ${packageName}\nDate: ${date}\nAdults: ${totalAdult}\nChildren: ${totalChild}\nTotal Price: $${totalPrice}\n\nThank you.`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

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
              <span className='font-medium text-gray-700'>Total Price:</span> $
              {totalPrice}
            </p>
          </div>

          {/* Actions */}

          <div className='modal-action flex justify-between mt-6'>
            {/* Tombol Cancel */}
            <button
              type='button'
              className='btn btn-outline btn-error'
              onClick={onClose}
            >
              Cancel
            </button>
            {/* Tombol Send to WhatsApp */}
            <button onClick={handleSendToWhatsApp} className='btn btn-success'>
              Send Booking to WhatsApp
            </button>

            {/* Tombol Send to Email */}
            <button onClick={handleSendToEmail} className='btn btn-primary'>
              Send Booking to Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;

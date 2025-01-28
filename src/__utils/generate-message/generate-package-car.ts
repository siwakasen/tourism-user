import { Car } from '@/__interfaces/car-tour.interface';
import { CheckoutCarsFormReqI } from '@/__interfaces/checkout.interface';

export const generateBookingMessage = (
  bookingData: CheckoutCarsFormReqI,
  carData: Car,
  totalPrice: number
): string => {
  return `
Hello, I would like to book the following car rental:

🔹 *Car Name*: ${carData.car_name}
🔹 *Brand*: ${carData.brand.brand_name}
🔹 *Price per Day*: $${carData.price}
🔹 *Total Price*: $${totalPrice}

📅 *Booking Details*:
- *Start Date*: ${bookingData.start_date}
- *End Date*: ${bookingData.end_date}
- *Pickup Location*: ${bookingData.pickup_location}
- *Pickup Time*: ${bookingData.pickup_time}

👥 *Travelers*:
- *Number of Persons*: ${bookingData.number_of_person}

📝 *Additional Information*:
${bookingData.additional_message || 'N/A'}

📞 *Contact Information*:
- *Name*: ${bookingData.name}
- *Email*: ${bookingData.email}
- *Phone*: ${bookingData.phone_number}

Thank you, and I look forward to your confirmation!
  `.trim();
};

import { CheckoutPackageTourFormReqI } from '@/__interfaces/checkout.interface';
import { PackageTour } from '@/__interfaces/package-tour.interface';

export const generateBookingMessage = (
  bookingData: CheckoutPackageTourFormReqI,
  packageData: PackageTour,
  totalprice: number
): string => {
  return `
Hello, I would like to book the following package:

🔹 *Package Name*: ${packageData.package_name}
🔹 *Duration*: ${packageData.duration} hour
🔹 *Total Price*: $${totalprice}

📅 *Booking Details*:
- *Start Date*: ${bookingData.start_date}
- *End Date*: ${bookingData.end_date}
- *Pickup Location*: ${bookingData.pickup_location}
- *Pickup Time*: ${bookingData.pickup_time}

👥 *Travelers*:
- *Adults*: ${bookingData.adult_count}
- *Children*: ${bookingData.children_count}

📝 *Additional Information*:
${bookingData.additional_condition || 'N/A'}

📞 *Contact Information*:
- *Name*: ${bookingData.name}
- *Email*: ${bookingData.email}
- *Phone*: ${bookingData.phone_number}

Thank you, and I look forward to your confirmation!
  `.trim();
};

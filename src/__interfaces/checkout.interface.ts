export interface CheckoutPackageTourFormReqI {
  title: string;
  package_id?: string;
  name: string;
  email: string;
  country_of_origin: string;
  phone_number: string;
  adult_count: number;
  children_count: number;
  start_date: string;
  end_date: string;
  pickup_location: string;
  pickup_time: string;
  additional_condition?: string; // Opsional
}

export interface CheckoutPackageTourReqI {
  package_id?: string;
  name: string;
  email: string;
  country_of_origin: string;
  phone_number: string;
  number_of_person: number[]; // Tidak boleh opsional
  start_date: string;
  end_date: string;
  pickup_location: string;
  pickup_time: string;
  additional_condition?: string; // Opsional
}

export interface CheckoutCarsFormReqI {
  title: string;
  car_id: string;
  name: string;
  email: string;
  country_of_origin: string;
  phone_number: string;
  number_of_person: number;
  pickup_location: string;
  start_date: string;
  end_date: string;
  pickup_time: string;
  additional_message?: string;
}

export interface CheckoutCarsReqI {
  car_id: string;
  name: string;
  email: string;
  country_of_origin: string;
  phone_number: string;
  number_of_person: number;
  pickup_location: string;
  start_date: string;
  end_date: string;
  pickup_time: string;
  additional_message?: string;
}

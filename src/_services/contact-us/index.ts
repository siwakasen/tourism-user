// utils/apiService.ts

import { ContactUsReqI } from '@/__interfaces/contact-us.interface';

import api from '../api';

export const sentContactUs = async (data: ContactUsReqI): Promise<void> => {
  await api.post(`/contact/sent`, data);
};

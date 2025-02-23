import axios from 'axios';

const defaultBaseURL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

const createApiInstance = (baseURL?: string) => {
  const api = axios.create({
    baseURL: baseURL || defaultBaseURL, // Gunakan baseURL custom atau default
    timeout: 10000, // Timeout 10 detik
  });

  // Request Interceptor
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Ambil token dari localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Tambahkan token ke header
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response) => response.data, // Return hanya data dari response
    (error) => {
      // Tangani error global, misalnya refresh token
      return Promise.reject(error);
    }
  );

  return api;
};

// Default API instance menggunakan baseURL dari env atau fallback
const api = createApiInstance();

export { api, createApiInstance };

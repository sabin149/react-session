import axios from 'axios';

export const axiosInterceptor = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  headers: {
    'Content-type': 'application/json'
  }
});

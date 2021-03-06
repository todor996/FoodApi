import axios from 'axios';
import {AuthService} from '../services/AuthService';

export const SERVER_URL = 'http://192.168.100.58:8000'; // production

export const API_URL = `${SERVER_URL}/api/`;
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async config => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${config.method}]: ${config.url}`);
      if (config.data) {
        console.log('Data: ', config.data);
      }
    }

    const authToken = await AuthService.getAuthTokenFromStorage();

    if (authToken) {
      config.headers.Authorization = authToken;
    }

    return config;
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(error);
    }
    return Promise.reject(error);
  },
);

export default instance;

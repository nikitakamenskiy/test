import axios from 'axios';
import { BASE_URL } from './env.js';

const api = axios.create({
    baseURL : BASE_URL,

    validateStatus: () => true,
});
export  default api;
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';
const TOKEN = import.meta.env.VITE_AUTH_TOKEN || '';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

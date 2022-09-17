import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.instagram.com/',
});

export default api;

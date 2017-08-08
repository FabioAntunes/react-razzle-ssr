import axios from 'axios';

const baseUrl = 'https://api.github.com/'

export const api = axios.create({
  baseUrl,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

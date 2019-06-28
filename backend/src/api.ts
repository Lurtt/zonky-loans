import axios from 'axios';

export const zonkyClient = axios.create({
  baseURL: process.env.ZONKY_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

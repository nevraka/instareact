import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_AUTH_KEY,
  },
});

export default unsplash;

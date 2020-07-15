import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID E1kuoN-hOM4aG6nZ96JxEvH_9bSZKSCK6-93iyMJoRM',
  },
});

export default unsplash;

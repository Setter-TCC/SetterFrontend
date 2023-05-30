import axios from 'axios';


console.log('process.env.BASE_URL_API', process.env.BASE_URL_API);
const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: { 'Accept': '*/*' },
});

export default api;

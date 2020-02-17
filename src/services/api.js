import axios from 'axios';

const api = axios.create({ baseUrl: 'https://maspu-app.herokuapp.com/' });

export default api;

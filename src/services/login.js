import axios from 'axios';


export const LoginInterface = params => axios.post(`http://localhost:3000/bp/login`, params);

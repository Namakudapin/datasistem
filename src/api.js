// api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://ds.bpkbautodigital.com/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
  
    httpsAgent: new (require('https').Agent)({  
        rejectUnauthorized: false
    })
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ERR_CERT_COMMON_NAME_INVALID') {
            console.error('Certificate validation failed. Please check the API URL and SSL certificate.');
        }
        return Promise.reject(error);
    }
);

export default API;
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.assana.company',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;

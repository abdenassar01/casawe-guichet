import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.preprod.guichet.com',
});

export default instance;
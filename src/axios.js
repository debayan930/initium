import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bookstore-78d1c.firebaseio.com/'
});

export default instance;
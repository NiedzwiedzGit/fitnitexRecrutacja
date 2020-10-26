import axios from 'axios';

const instance = axios.create({
    baseURL: "https://fitnitex-21fbf.firebaseio.com/"
});

export default instance;
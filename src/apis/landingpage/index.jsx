import axios from 'axios';
import { BASE_URL } from '../../config';
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;
if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] =
        `Bearer ${localStorage.getItem('token')}`;
}

export function loadAllAPI() {
    return axios
        .get('/')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

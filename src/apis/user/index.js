import axios from 'axios';
import api from '@apis/api';

export function getUserDetailAPI(id) {
    return api
        .get(`/user/detail/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

import axios from 'axios';
import api from '@apis/api';

export function getPostsAPI() {
    return api
        .get('/ivent?limit=6&offset=0')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
export function addPostAPI(name, location, startDate, endDate, introduce) {
    const data = {
        title: name,
        description: introduce,
        address: location,
        recruitmentTill: new Date(endDate).getTime(),
        startAt: new Date(startDate).getTime(),
    };
    return api
        .post('/ivent', data)
        .then(response => console.log(response))
        .catch(error => {
            throw error;
        });
}

export function getPostDetailAPI(id) {
    return api
        .get(`/ivent/detail/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export function RegisterRequestAPI(id) {
    return api
        .post(`/ivent/join/${id}`)
        .then(response => console.log(response))
        .catch(error => {
            throw error;
        });
}

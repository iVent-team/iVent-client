import axios from 'axios';
import api from '@apis/api';

export function getMyDataAPI() {
    return api
        .get('/user')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
export function getMyScheduleAPI() {
    return api
        .get('/user')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export function getRequestsAPI() {
    return api
        .get('/ivent?limit=6&offset=0&myIventOnly=true')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

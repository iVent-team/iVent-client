import axios from 'axios';
import api from '@apis/api';

export function logoutAPI() {
    const refresh = localStorage.getItem('refresh');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    return api.delete(`/user/sign?token=${refresh}`).catch(error => {
        throw error;
    });
}

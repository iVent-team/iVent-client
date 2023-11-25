import axios from 'axios';

export function logoutAPI() {
    const refresh = localStorage.getItem('refresh');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    return axios
        .delete(`https://api.i-vent.net/api/v0/user/sign?token=${refresh}`)
        .then(response => response.data.missionLists)
        .catch(error => {
            throw error;
        });
}

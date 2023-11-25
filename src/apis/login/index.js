import axios from 'axios';

export function logoutAPI() {
    const refresh = localStorage.getItem('refresh');
    return axios
        .delete(`https://api.i-vent.net/api/v0/user/sign?token=${refresh}`)
        .then(response => response.data.missionLists)
        .catch(error => {
            throw error;
        });
}

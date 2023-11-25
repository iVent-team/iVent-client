import axios from 'axios';
export function addPostAPI(data) {
    return axios
        .post('https://api.i-vent.net/api/v0/ivent', { data })
        .then(response => console.log(response))
        .catch(error => {
            throw error;
        });
}

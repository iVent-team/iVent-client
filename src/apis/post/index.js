import axios from 'axios';
if (localStorage.getItem('access')) {
    axios.defaults.headers.common['Authorization'] =
        `Bearer ${localStorage.getItem('access')}`;
}

axios.defaults.withCredentials = true;
export function getPostsAPI() {
    return axios
        .get('https://api.i-vent.net/api/v0/ivent?limit=6&offset=0')
        .then(response => console.log(response))
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
    return axios
        .post('https://api.i-vent.net/api/v0/ivent', data)
        .then(response => console.log(response))
        .catch(error => {
            throw error;
        });
}

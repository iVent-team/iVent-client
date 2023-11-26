import { logoutAPI } from '@apis/login';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: 'https://api.i-vent.net/api/v0',
});
if (localStorage.getItem('access')) {
    api.defaults.headers.common['Authorization'] =
        `Bearer ${localStorage.getItem('access')}`;
}

api.defaults.withCredentials = true;

const setAuthorizationHeader = token => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};
let isRefreshing = false;

const refreshToken = async () => {
    try {
        if (!isRefreshing) {
            isRefreshing = true;
            const refresh = localStorage.getItem('refresh');
            const response = await axios.get(
                `https://api.i-vent.net/api/v0/user/sign?token=${refresh}`,
            );

            const newRefreshToken = response.data.token.refresh;
            localStorage.setItem('refresh', newRefreshToken);
            const newAccessToken = response.data.token.access;
            localStorage.setItem('access', newAccessToken);
            setAuthorizationHeader(newAccessToken);

            return Promise.resolve();
        }
    } catch (error) {
        Swal.fire({
            title: '세션만료!',
            text: '다시 로그인 해주세요',
            icon: 'warning',
            confirmButtonText: '확인',
            customClass: {
                container: 'custom-swal-container',
            },
        });

        await logoutAPI();
        return Promise.reject(error);
    } finally {
        isRefreshing = false;
    }
};

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        if (error.response && error.response.status === 401) {
            try {
                await refreshToken();

                return api(error.config);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    },
);

export default api;

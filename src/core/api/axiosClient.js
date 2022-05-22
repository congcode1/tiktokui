import axios from 'axios';
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333",
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    config.headers = {
        'Authorization': `Bearer ${localStorage.jwt}`,
        'Accept': 'application/json',
    }
    return config;
})

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    }, async error => {
        // const originalRequest = error.config;

        // if (error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     const response = await authApi.getRefreshToken(localStorage.staffToken);

        //     const newToken = response.data.jwtInfor.accessToken;
        //     localStorage.setItem('staffToken', newToken);
        //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
        //     return axiosClient(originalRequest);
        // }
        // // apiErrorHandler(error);
        // return Promise.reject(error);
    });

export default axiosClient;
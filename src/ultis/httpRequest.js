import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
})

export const get = async (path, options = {}) => {
    const res = await axiosInstance.get(path, options);
    return res.data;
}
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api",
    timeout: 2000,
})

export const get = async (path, options = {}) => {
    const res = await axiosInstance.get(path, options);
    return res.data;
}
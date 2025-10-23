import axios from "axios";

const API_BASE_URL = "https://opentdb.com";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000
});
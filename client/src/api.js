import axios from "axios";

const API = axios.create({
    baseURL: "https://pizza-palace-zyw9.onrender.com/", 
    withCredentials: true
});

export default API;
import axios from "axios";
import { API_URL } from "../constants/config";
import { API_URL_TEST,base64Credentials } from "../constants/config";

const apiClient = axios.create({
    baseURL: API_URL_TEST,
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
        'Authorization': `Basic ${base64Credentials}`
        
    }
});

export default apiClient;
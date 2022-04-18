import axios from "axios";

export const API_URL = "https://tirek-backend.herokuapp.com";

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    mode: 'no-cors',
    
})


// api.interceptors.request.use((config)=>{
//     config.headers.Authorization = `${localStorage.getItem("token")}`
//     return config;
// })
export default api
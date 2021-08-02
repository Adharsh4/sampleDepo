import axios from 'axios';
import initialState from "../utility/reducer";

let userToken = localStorage.getItem("user_token");
const axiosInstance = axios.create({
    baseURL: "http://18.134.0.153:3200",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        "sessiontoken": userToken
    }
})


export default  axiosInstance;
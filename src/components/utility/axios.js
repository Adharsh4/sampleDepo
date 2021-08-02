import axios from 'axios';
import initialState from "../utility/reducer";
const axiosInstance = axios.create({
    baseURL: "http://18.134.0.153:3200",
    headers:{
        "Authorization": initialState.user_token
    }
})


export default  axiosInstance;
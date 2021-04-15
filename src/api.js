import axios from "axios";

export function Postlogin(data){
    return axios.post(`http://localhost:5000/login`,data)
}

export function Postregister(data){
    return axios.post(`http://localhost:5000/register`,data)
}
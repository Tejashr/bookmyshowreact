import axios from "axios";

export function Postlogin(data){
    return axios.post(`https://bookmyshownode.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`https://bookmyshownode.herokuapp.com/register`,data)
}

export function Postalogin(data){
    return axios.post(`https://bookmyshownode.herokuapp.com/alogin`,data)
}

export function Postaregister(data){
    return axios.post(`https://bookmyshownode.herokuapp.com/aregister`,data)
}

export function PostMovie(data){
    return axios.post(`https://bookmyshownode.herokuapp.com/movies`,data)
}

export function PostTicket(data){
    return axios.post(`https://bookmyshownode.herokuapp.com/ticket`,data)
}

export function UpdateSeats(id,data){
    return axios.put(`https://bookmyshownode.herokuapp.com/movies/${id}`,data)
}

export function GetMovie(){
    return axios.get(`https://bookmyshownode.herokuapp.com/movies`)
}

export function GetMovieById(id){
    return axios.get(`https://bookmyshownode.herokuapp.com/movies/${id}`)
}

export function GetUserByEmail(email){
    return axios.get(`https://bookmyshownode.herokuapp.com/users/${email}`)
}

export function GetTicketByName(username){
    return axios.get(`https://bookmyshownode.herokuapp.com/ticket/${username}`)
}

export function GetTickets(){
    return axios.get(`https://bookmyshownode.herokuapp.com/tickets`)
}

export function DeleteMovieById(id){
    return axios.delete(`https://bookmyshownode.herokuapp.com/movies/${id}`)
}
import axios from "axios";

const endpoint = 'https://api.opendota.com/api/players';

export const getUser = (userId) =>{

    return axios.get(`${endpoint}/${userId}`)

}
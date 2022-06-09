import axios from "axios";

const endpoint = 'https://api.opendota.com/api/proPlayers';

export const getClientes = () =>{

    return axios.get(endpoint)

}
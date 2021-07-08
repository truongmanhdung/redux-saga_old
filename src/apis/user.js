import axiosService from '../commons/axiosService';
import {API_URL} from '../constansts/config';

const url = 'user';

export const getUser = () =>{
    return axiosService.get(`${API_URL}${url}`);
};

export const addUser = user=>{
    return axiosService.post(`${API_URL}${url}`,user);
};



import axiosService from '../commons/axiosService';
import {API_URL} from '../constansts/config';

const url = 'user/1/works';

export const getList = () =>{
    return axiosService.get(`${API_URL}${url}`);
};

export const addWork = work=>{
    console.log(work);
    return axiosService.post(`${API_URL}${url}`,work);
};

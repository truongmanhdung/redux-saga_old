import axiosService from '../commons/axiosService';
import {API_URL} from '../constansts/config';

const url = 'user/1/works';

export const getList = () =>{
    return axiosService.get(`${API_URL}${url}`);
};

export const addWork = work=>{
    return axiosService.post(`${API_URL}${url}`,work);
};
export const updateWork = (work, workId)=>{
    return axiosService.put(`${API_URL}${url}/${workId}`,work);
};
export const deleteWork = (id)=>{
    return axiosService.delete(`${API_URL}${url}/${id}`);
};



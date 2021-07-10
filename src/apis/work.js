import axiosService from '../commons/axiosService';
import {API_URL} from '../constansts/config';
import { Base64 } from 'js-base64';

if(localStorage.getItem("user")){
    var user = JSON.parse(Base64.decode(localStorage.getItem("user")));
}

if(user){
    var id = user.id;
    var url = `user/${id}/works`;
}
export const getList = (id) =>{
    return axiosService.get(`${API_URL}user/${id}/works`);
};

export const addWork = work=>{
    return axiosService.post(`${API_URL}${url}`,work);
};
export const updateWork = (work, workId)=>{
    return axiosService.put(`${API_URL}${url}/${workId}`,work);
};
export const updateStatus = (status,id )=>{
    return axiosService.put(`${API_URL}${url}/${id}`,status);
};
export const deleteWork = (id)=>{
    return axiosService.delete(`${API_URL}${url}/${id}`);
};



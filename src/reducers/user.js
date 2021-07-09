import * as userTypes from '../constansts/user';
import { Base64 } from 'js-base64';
const initialState = {};

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case userTypes.LOAD_USER: {
            const user = JSON.parse(Base64.decode(localStorage.getItem("user")));
            if(user){
                return {
                    ...state,
                    user: user,
                };
            }else{
                return {
                    ...state,
                    user: {},
                };
            }
        }
        case userTypes.SIGNUP: {
            return {
                ...state,
                user: {},
            };
        }
        case userTypes.SIGNUP_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                user: data,
            };
        }
        case userTypes.LOGIN: {
            return {
                ...state,
                user: {},
            };
        }
        case userTypes.LOGIN_SUCCESS: {
            const data = JSON.parse(Base64.decode(localStorage.getItem("user")));
            return {
                ...state,
                user: data,
            };
        }
        case userTypes.LOGOUT: {
            return {
                ...state,
                user: {},
                listWorks: [],
            };
        }
        default:
            return state;
    };
};

export default myReduces;

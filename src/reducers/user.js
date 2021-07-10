import * as userTypes from '../constansts/user';
import { Base64 } from 'js-base64';
const initialState = {};

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case userTypes.LOAD_USER: {

            if(localStorage.getItem("user")){
                const user = localStorage.getItem("user");
                if(user) {
                    return {
                        ...state,
                        user: user,
                    };
                }

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
            if(localStorage.getItem("user")){
                const data = localStorage.getItem("user");
                return {
                    ...state,
                    user: data,
                };
            }else{
                return {
                    ...state,
                    user: {},
                };
            }

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

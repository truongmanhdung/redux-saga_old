import * as userTypes from '../constansts/user';

const initialState = {};

const myReduces = (state = initialState, action)=>{
    switch(action.type){
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
            const {data} = action.payload;
            return {
                ...state,
                user: data,
            };
        }
        case userTypes.LOGOUT: {
            return {
                ...state,
                listWorks: [],
            };
        }
        default: 
            return state;
    };
};

export default myReduces;
import * as userTypes from "../constansts/user";


export const signup = (user)=>{
    return {
        type: userTypes.SIGNUP,
        payload: {
            user
        },
    };
}
export const signupSuccess = (data)=>{
    return {
        type: userTypes.SIGNUP_SUCCESS,
        payload: {
            data
        },
    };
}
export const login = (user)=>{
    return {
        type: userTypes.LOGIN,
        payload: {
            user
        },
    };
}
export const loginSuccess = (data)=>{
    return {
        type: userTypes.LOGIN_SUCCESS,
        payload: {
            data
        },
    };
}
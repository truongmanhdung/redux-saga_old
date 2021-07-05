import * as loadingTypes from '../constansts/loading';

const initialState = {
    showLoading: false
};

const myReduces = (state = initialState, action)=>{
    switch(action.type){
        case loadingTypes.SHOW_LOADING: {
            return {
                ...state,
                showLoading: true
            };
        }
        case loadingTypes.HIDE_LOADING: {
            return {
                ...state,
                showLoading: false
            };
        }
        default: 
            return state;
    };
};

export default myReduces;
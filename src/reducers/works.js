import * as workTypes from "../constansts/work";
const initialState = {};

const myReducers = (state = initialState, action) =>{
    switch (action.type){
        case workTypes.FETCH_WORKS: {
            return{
                ...state,
                listWorks: [],
            };
        };
        case workTypes.FETCH_WORKS_SUCCESS: {
            const {data} = action.payload;
            return{
                ...state,
                listWorks: data,
            };
        };
        case workTypes.FETCH_WORKS_FAILED: {
            const {err} = action.payload;
            toastError(err);
            return{
                ...state,
                listWorks: [],
            };
        };
        default:
            return state;
    }
};

export default myReducers;

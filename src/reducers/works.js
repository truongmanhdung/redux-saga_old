import * as workTypes from "../constansts/work";
const initialState = {};

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case workTypes.FETCH_WORKS: {
            return {
                ...state,
                listWorks: [],
            };
        };
        case workTypes.FETCH_WORKS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listWorks: data,
            };
        };
        case workTypes.FETCH_WORKS_FAILED: {
            const { err } = action.payload;
            return {
                ...state,
                listWorks: [],
            };
        };
        case workTypes.ADD_WORKS: {
            return {
                ...state,
            };
        };
        case workTypes.ADD_WORK_SUCCESS: {
            const { work } = action.payload;
            state.listWorks.push(work);
            return {
                ...state,
                listWorks: state.listWorks,
            };
        };
        case workTypes.EDIT_WORKS: {
            return {
                ...state,
            };
        };
        case workTypes.EDIT_WORKS_SUCCESS: {
            const { work } = action.payload;
            state.listWorks.put(work);
            return {
                ...state,
                listWorks: state.listWorks,
            };
        };
        // case workTypes.FILTER_WORKS: {
        //     return ;
        // };

        case workTypes.FILTER_WORKS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listWorks: data,
            }
        }
        default:
            return state;
    };
};

export default myReducers;

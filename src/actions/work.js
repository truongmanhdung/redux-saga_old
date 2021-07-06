import * as workApis from "../apis/work";
import * as workTypes from "../constansts/work";
export const fetchWorks = () => {
    return {
        type: workTypes.FETCH_WORKS,
    };
};
export const fetchWorksSuccess = (data) => {
    return {
        type: workTypes.FETCH_WORKS_SUCCESS,
        payload: {
            data,
        },
    };
};
export const fetchWorksFailed = (err) => {
    return {
        type: workTypes.FETCH_WORKS_FAILED,
        payload: {
            err,
        },
    };
};

// b1: fetchWorksRequest() chạy hàm đầu tiên
// b2: reset works bằng hàm fetchWorks() : works: []
// b3: dispatch nếu thành công hàm fetchWorksSuccess()


export const fetchWorksRequest = () => {
    return (dispatch) => {
        dispatch(fetchWorks());
        workApis
            .getList()
            .then(res => {
                const { data } = res;
                dispatch(fetchWorksSuccess(data));
            })
            .catch(err => {
                dispatch(fetchWorksFailed(err));
            });
    };
};

export const addWorks = (work) => {
    return {
        type: workTypes.ADD_WORKS,
        payload: {
            work,
        },
    };
};
export const addWorkSuccess = (work) => {
    return {
        type: workTypes.ADD_WORK_SUCCESS,
        payload: {
            work,
        },
    };
};


export const filterWorks = keyword=> {
    return {
        type: workTypes.FILTER_WORKS,
        payload: {
            keyword,
        }
    };
};
export const filterWorksSuccess = data => {
    return {
        type: workTypes.FILTER_WORKS_SUCCESS,
        payload: {
            data,
        }
    };
};

export const filterWorksFailed = (err) => {
    return {
        type: workTypes.FILTER_WORKS_FAILED,
        payload: {
            err,
        }
    };
};


export const editWorks = (work) => {
    return {
        type: workTypes.EDIT_WORKS,
        payload: {
            work,
        },
    };
};
export const editWorkSuccess = (work) => {
    return {
        type: workTypes.EDIT_WORKS_SUCCESS,
        payload: {
            work,
        },
    };
};

import * as types from "./../constants/ActionTypes";
import callAPI from "../utils/apiCaller";
export const listAll = () => {
    return {
        type: types.LIST_ALL,
    };
};

export const fetchWorksRequest = () => {
    return async (dispatch) => {
        if (localStorage.getItem("user")) {
            var id_user = localStorage.getItem("user");
            const res = await callAPI(`users/${id_user}/works`, "GET", null);
            dispatch(fetchWorks(res.data));
        }
    };
};

export const fetchWorks = (works) => {
    return {
        type: types.FETCH_WORKS,
        works,
    };
};

export const deleteWorksRequest = (id) => {
    return async (dispatch) => {
        var id_user = localStorage.getItem("user");
        const res = await callAPI(
            `users/${id_user}/works/${id}`,
            "DELETE",
            null
        );
        if (res.status === 200) {
            dispatch(deleteWorks(id));
        }
    };
};

export const deleteWorks = (id) => {
    return {
        type: types.DELETE_WORKS,
        id,
    };
};

export const addWorksRequest = (work) => {
    return async (dispatch) => {
        var id_user = localStorage.getItem("user");
        const res = await callAPI(`users/${id_user}/works`, "POST", work);
        dispatch(addWorks(res.data));
    };
};

export const addWorks = (work) => {
    return {
        type: types.ADD_WORKS,
        work,
    };
};

export const updateStatusRequest = (work) => {
    return async (dispatch) => {
        var id_user = localStorage.getItem("user");
        callAPI(`users/${id_user}/works/${work.id}`, "PUT", {
            status: !work.status,
        }).then((res) => {
            dispatch(updateStatus(res.data));
        });
    };
};

export const updateStatus = (work) => {
    return {
        type: types.UPDATE_STATUS,
        work,
    };
};

export const getWorksRequest = (id) => {
    return async (dispatch) => {
        var id_user = localStorage.getItem("user");
        const res = await callAPI(`users/${id_user}/works/${id}`, "GET", null);
        dispatch(editWorks(res.data));
    };
};

export const editWorks = (work) => {
    return {
        type: types.EDIT_WORKS,
        work,
    };
};

export const updateWorksRequest = (work) => {
    return async (dispatch) => {
        var id_user = localStorage.getItem("user");
        callAPI(`users/${id_user}/works/${work.id}`, "PUT", work).then(
            (res) => {
                dispatch(updateWorks(res.data));
            }
        );
    };
};

export const updateWorks = (work) => {
    return {
        type: types.UPDATE_WORKS,
        work,
    };
};

export const login = (user) => {
    return {
        type: types.LOGIN,
        user,
    };
};

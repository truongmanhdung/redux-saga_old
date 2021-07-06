import * as modalTypes from "../constansts/modal";

const initialState = {
    showModal: false,
    component: null,
    title: "",
};

const myReduces = (state = initialState, action) => {
    switch (action.type) {
        case modalTypes.SHOW_MODAL: {
            return {
                ...state,
                showModal: true,
            };
        }
        case modalTypes.HIDE_MODAL: {
            return {
                ...state,
                showModal: false,
            };
        }
        case modalTypes.CHANGE_MODAL_CONTENT: {
            const { component } = action.payload;
            return {
                ...state,
                component,
            };
        }
        case modalTypes.CHANGE_MODAL_TITLE: {
            const { title } = action.payload;
            return {
                ...state,
                title,
            };
        }
        default:
            return state;
    }
};

export default myReduces;

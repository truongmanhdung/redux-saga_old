
import * as loadingTypes from "../constansts/loading";

export const showLoading = () =>({
    type: loadingTypes.SHOW_LOADING,
});

export const hideLoading = () =>({
    type: loadingTypes.HIDE_LOADING,
});

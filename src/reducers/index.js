import { combineReducers } from "redux";
import works from "./works";
import loading from './loading';
import modalReduce from "./modal";
const myReducers = combineReducers({
    works: works,
    loading: loading,
    modalReduce: modalReduce
});

export default myReducers;

import { combineReducers } from "redux";
import works from "./works";
import loading from './loading';
const myReducers = combineReducers({
    works: works,
    loading: loading
});

export default myReducers;

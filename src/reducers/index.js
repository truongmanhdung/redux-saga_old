import { combineReducers } from "redux";
import works from "./works";
const myReducers = combineReducers({
    works: works,
});

export default myReducers;

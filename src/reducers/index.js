import { combineReducers } from "redux";
import works from "./works";
import loading from './loading';
import modalReduce from "./modal";
import listUsers from './user';
const myReducers = combineReducers({
    works: works,
    loading: loading,
    modalReduce: modalReduce,
    listUsers: listUsers
});

export default myReducers;

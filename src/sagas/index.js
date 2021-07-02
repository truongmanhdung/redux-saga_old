import { fork, take } from "redux-saga/effects";
import * as workTypes from "../constansts/work";
function* watchFetchListWorkAction() {
    yield take(workTypes.FETCH_WORKS);
    console.log('a');
 }
 function* watchCreteWorkAction() {
    console.log('watchCreteWorkAction');
 }
function* rootSaga(){
    yield fork(watchFetchListWorkAction);
    yield fork(watchCreteWorkAction);
    yield true;
}


export default rootSaga;

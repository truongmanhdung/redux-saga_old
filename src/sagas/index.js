import { fork, take,call,put,delay, takeLatest, select} from "redux-saga/effects";
import * as workTypes from "../constansts/work";
import {getList} from '../apis/work';
import {showLoading , hideLoading} from '../actions/loading';;
import {fetchWorksSuccess, fetchWorksFailed} from '../actions/work';
import { toast } from 'react-toastify';
// các công việc đã thực hiện
// bươc 1: xử lý hàm fetch_works
// bước 2: thực hiện call api
// bước 3: nếu success thì sẽ trả về data
// bước 4: chạy hàm fetchWorksSuccess
// bước 5: thực thi những hàm còn lại
function* watchFetchListWorkAction() {
    yield take(workTypes.FETCH_WORKS);
    yield put(showLoading());
    const res = yield call(getList);
    const {status, data} = res;
    if(status === 200){
        yield put(fetchWorksSuccess(data));
        yield toast.success("Lấy dữ liệu thành công");
    }else{
        yield put(fetchWorksFailed(err));
        yield toast.error("lấy dữ liệu thất bại");
    }
    yield delay(1000);
    yield put(hideLoading());
 }
 function* filterWorkSaga({payload}){
     const {keyword} = payload;
     const listWorks = yield select(state=> state.works.listWorks);
     console.log(keyword);
     const filterWorks = listWorks.filter(
            work => work.name_work
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase())

     );
     yield put(fetchWorksSuccess(filterWorks));
 }
function* rootSaga(){
    yield fork(watchFetchListWorkAction);
    yield takeLatest(workTypes.FILTER_WORKS, filterWorkSaga);
}


export default rootSaga;

import { fork, take,call,put,delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import * as workTypes from "../constansts/work";
import * as userTypes from "../constansts/user";
import {getList,addWork,updateWork,deleteWork,updateStatus} from '../apis/work';
import {showLoading , hideLoading} from '../actions/loading';;
import {fetchWorksSuccess, fetchWorksFailed, addWorkSuccess, updateWorkSuccess, deleteWorkSuccess,updateStatusSuccess} from '../actions/work';
import { toast } from 'react-toastify';
import {signupSuccess} from '../actions/user';
import { hideModal } from "../actions/modal";
import * as workApis from '../apis/work';
import {addUser} from '../apis/user';
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
     delay(500);
     const listWorks = yield workApis.getList().then(res => {
        const {data} = res;
        return data;
    });
     console.log(keyword);
     console.log(listWorks);
     const filterWorks = listWorks.filter(
        work => work.name_work
        .trim()
        .toLowerCase()
        .includes(keyword.trim().toLowerCase())

     );
    console.log(filterWorks);
     yield put(fetchWorksSuccess(filterWorks));
 }
 function* addWorkSaga ({payload}){
    const {name_work,description, time, userId,status} = payload.work;
    yield put(showLoading());
    const resp = yield call(addWork,{
        name_work,
        description,
        time,
        userId,
        status
    });
    const {data} = resp;
    if(resp.status === 201){
        yield put(addWorkSuccess(data));
        yield toast.success("Thêm thành công");
    }
    yield put(hideModal());
    delay(500);
    yield put(hideLoading());

 }

 function* updateWorkSaga({payload}){
    const {name_work,description, time, userId,status} = payload.work;
    const workEditing = yield select(state=>state.works.workEditing);
    yield put(showLoading());
    const resp = yield call(updateWork,{
        name_work,
        description,
        time,
        userId,
        status
    },workEditing.id);
    const {data} = resp;
    if(resp.status === 200){
        yield put(updateWorkSuccess(data));
        yield toast.success("Sửa thành công");
    }
    yield put(hideModal());
    delay(500);
    yield put(hideLoading());
 }

 function* deleteWorkSaga({payload}){
    const {id} = payload;
    console.log(id);
    yield put(showLoading());
    const res = yield call(deleteWork,id);
    const {data} = res;
    yield put(deleteWorkSuccess(data));
    delay(500);
    yield put(hideLoading());
    yield toast.success("Xóa thành công");
 }
 function* updateStatusSaga({payload}){
    const {id,status} = payload;
    console.log(id);
    yield put(showLoading());
    
    const resp = yield call(updateStatus,{
        status: !status
    },id);
    const {data} = resp;
    if(resp.status === 200){
        yield put(updateStatusSuccess(data));
        yield toast.success("Cập nhật trạng thái thành công");
    }
    yield put(hideModal());
    delay(500);
    yield put(hideLoading());
 }

 function* signupSaga({payload}){
    const {user} = payload;
    const {name,email,password} = user;
    yield put(showLoading());
    const resp = yield call(addUser,{
        name,
        email,
        password
    });
    const {data} = resp;
    if(resp.status === 201){
        console.log(data);
        yield put(signupSuccess(data));
        yield toast.success("Đăng nhập thành công");
        localStorage.setItem('user',JSON.stringify(data));
    }
    delay(500);
    yield put(hideLoading());
 }
function* rootSaga(){
    yield fork(watchFetchListWorkAction);
    yield takeLatest(workTypes.FILTER_WORKS, filterWorkSaga);
    yield takeEvery(workTypes.ADD_WORKS,addWorkSaga);
    yield takeLatest(workTypes.UPDATE_WORKS,updateWorkSaga);
    yield takeLatest(workTypes.DELETE_WORKS,deleteWorkSaga);
    yield takeLatest(workTypes.UPDATE_STATUS,updateStatusSaga);
    yield takeLatest(userTypes.SIGNUP,signupSaga);
}


export default rootSaga;

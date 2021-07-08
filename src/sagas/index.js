import { fork, take,call,put,delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import * as workTypes from "../constansts/work";
import * as userTypes from "../constansts/user";
import {getList,addWork,updateWork,deleteWork,updateStatus} from '../apis/work';
import {showLoading , hideLoading} from '../actions/loading';;
import {fetchWorksSuccess, fetchWorksFailed, addWorkSuccess, updateWorkSuccess, deleteWorkSuccess,updateStatusSuccess} from '../actions/work';
import { toast } from 'react-toastify';
import {signupSuccess,loginSuccess} from '../actions/user';
import { hideModal } from "../actions/modal";
import * as workApis from '../apis/work';
import {getUser,addUser} from '../apis/user';
function* watchFetchListWorkAction() {
    yield take(workTypes.FETCH_WORKS);
    yield put(showLoading());
    const userList = localStorage.getItem("user");
    const user = JSON.parse(userList);
    const res = yield call(getList,user.id);
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
    var {data} = resp;
    if(resp.status === 201){
        yield put(signupSuccess(data));
        yield toast.success("Đăng kí thành công");
        localStorage.setItem('user',JSON.stringify(data));
    }
    var id = data.id;
    const res = yield call(getList,id);
    var {status, data} = res;
    if(status === 200){
        yield put(fetchWorksSuccess(data));
        yield toast.error("Chưa có dữ liệu công việc");
    }else{
        yield put(fetchWorksFailed(err));
        yield toast.error("lấy dữ liệu thất bại");
    }
    
    delay(500);
    yield put(hideLoading());
 }

 function* loginSaga({payload}){
    const {user} = payload;
    const {email,password} = user;
    yield put(showLoading());
    const resp = yield call(getUser);
    var {data} = resp;
    const userDung =  data.map(userSever=>{
        if(userSever.email === email && userSever.password === password){
            localStorage.setItem('user',JSON.stringify(userSever));
            return userSever.id;
        }  
    });
    var id = userDung.join('');
    yield put(loginSuccess(user));
    const res = yield call(getList,id);
    var {status, data} = res;
    if(status === 200){
        yield put(fetchWorksSuccess(data));
        yield toast.success("Lấy dữ liệu thành công");
    }else{
        yield put(fetchWorksFailed(err));
        yield toast.error("lấy dữ liệu thất bại");
    }
    delay(500);
    yield put(hideLoading());
 }
function* logoutSaga(){
    yield put(showLoading());
    yield localStorage.clear();
    yield fork(watchFetchListWorkAction);
    yield delay(1000);
    yield put(hideLoading());
}

function* rootSaga(){
    yield takeLatest(userTypes.SIGNUP,signupSaga);
    yield takeLatest(userTypes.LOGIN,loginSaga);
    const user = localStorage.getItem("user");
    if(user){
        yield fork(watchFetchListWorkAction);
    }
    yield takeLatest(userTypes.LOGOUT,logoutSaga);
    yield takeLatest(workTypes.FILTER_WORKS, filterWorkSaga);
    yield takeLatest(workTypes.ADD_WORKS,addWorkSaga);
    yield takeLatest(workTypes.UPDATE_WORKS,updateWorkSaga);
    yield takeLatest(workTypes.DELETE_WORKS,deleteWorkSaga);
    yield takeLatest(workTypes.UPDATE_STATUS,updateStatusSaga);
    
}


export default rootSaga;

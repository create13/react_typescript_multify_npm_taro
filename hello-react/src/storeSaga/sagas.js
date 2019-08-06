import { put, takeEvery } from 'redux-saga/effects'
import { REQ_ALL_LIST, GET_ALL_LIST } from './actionTypes'
import { shopList } from '../api/index'
function* getAllList () {
    console.log(11);
    const result = yield shopList();
        console.log('result1', result);
    if (result.success_code === 200) {
        const items = result.message;
        yield put({
            type: GET_ALL_LIST,
            items
        })
    }
}
function* mySagas() {
    console.log('aaa');
    yield takeEvery(REQ_ALL_LIST, getAllList);
}
export default mySagas
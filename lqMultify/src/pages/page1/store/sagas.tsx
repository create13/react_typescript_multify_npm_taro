import { put, takeEvery } from 'redux-saga/effects'
import { REQ_LIST_DATA, ADD_LIST_DATA } from './actionTypes'
function* addList() {
    const todos = {title: 'o'}
    yield put({
        type: ADD_LIST_DATA,
        todos
    })
}
function* mySagas():any {
    yield takeEvery(REQ_LIST_DATA, addList)
}
export default mySagas;
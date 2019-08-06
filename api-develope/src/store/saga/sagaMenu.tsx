import { put } from 'redux-saga/effects'
import { ADD_LIST_DATA, REMOVE_LIST_DATA, LANGUAGE_STORAGE } from '../actionTypes'
function* addList(action: any) {
    const todos = action.todos
    yield put({
        type: ADD_LIST_DATA,
        todos
    })
}
function* delList(action: any) {
    const item = action.item
    yield put({
        type: REMOVE_LIST_DATA,
        item
    })
}
export default {
    addList,
    delList
}
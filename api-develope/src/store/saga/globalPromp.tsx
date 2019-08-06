import { put } from 'redux-saga/effects'
import { LOADING_STATUS } from '../actionTypes'
function* changeLoading(action: any) {
    const status = action.status
    yield put({
        type: LOADING_STATUS,
        status
    })
}
export default {
    changeLoading
}
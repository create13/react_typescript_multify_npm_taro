import {REMOVE_ITEM, CHECKBOX_CHANGE_STATUS, ADD_ITEM_LIST, DEL_ALL_LIST, ALL_LIST_CHECKED, GET_ALL_LIST} from './actionTypes'
import { shopList } from '../api/index'
import store from '../storeAddmiddleWare';
// 获取所有记录 redux-thunk
export const getAllList = () => {
    return (dispatch) => {
        shopList().then(res => {
            if (res.success_code === 200) {
                const items = res.message;
                store.dispatch({
                    type: GET_ALL_LIST,
                    items
                })
            }
        })
    }
}
export const removeWithId = (todoId) => ({
    type: REMOVE_ITEM,
    todoId
})
export const changeCheckboxStatus = (index, status) => ({
    type: CHECKBOX_CHANGE_STATUS,
    index,
    status
})
export const addList = (data) => ({
    type: ADD_ITEM_LIST,
    data
})
export const deleteAllData = () =>({
    type: DEL_ALL_LIST
})
export const allChecked = (flag) =>({
    type: ALL_LIST_CHECKED,
    flag
})
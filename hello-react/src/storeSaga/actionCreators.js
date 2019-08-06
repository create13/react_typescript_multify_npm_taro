import {REMOVE_ITEM, CHECKBOX_CHANGE_STATUS, ADD_ITEM_LIST, DEL_ALL_LIST, ALL_LIST_CHECKED, REQ_ALL_LIST} from './actionTypes'
// 获取所有记录
// export const getAllList = (items) => ({
//     type: GET_ALL_LIST,
//     items
// })
export const getAllList = () => ({
    type: REQ_ALL_LIST
})
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
function test (a, callback) {
    let testArray = [];
    testArray.push(a);
    let b = callback && callback();
    testArray.push(b);
    return testArray;
}
let testParams = function () {
    return 11;
}
test(10,testParams);
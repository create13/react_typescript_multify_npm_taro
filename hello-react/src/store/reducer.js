import {REMOVE_ITEM, CHECKBOX_CHANGE_STATUS, ADD_ITEM_LIST, DEL_ALL_LIST, ALL_LIST_CHECKED, GET_ALL_LIST} from './actionTypes'
// 默认的数据
const defaultState = {
    listData: [
        {title: '看书一小时', id: 1, checkStatus: false},
        {title: '打篮球一小时', id: 2, checkStatus: false},
        {title: '玩游戏一小时', id: 3, checkStatus: false}
    ],
    items: [],
    checkCount: 0
}
export default (state=defaultState, action)=> {
    console.log(state, action);
    // 删除单条状态
    if (action.type === REMOVE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.listData.forEach((item, count) => {
            if (action.todoId === item.id) {
                newState.listData.splice(count, 1);
            }
        })
        console.log(newState);
        return newState;
    }
    // 改变中间内容复选框状态
    if (action.type === CHECKBOX_CHANGE_STATUS) {
        const newStatus = JSON.parse(JSON.stringify(state));
        newStatus.listData.forEach((item, count) => {
          if (action.index === item.id) {
            item.checkStatus = !action.status;
            if (item.checkStatus) {
                newStatus.checkCount += 1;
            } else {
                if (newStatus.checkCount === 0) {
                    newStatus.checkCount = 0;
                } else {
                    newStatus.checkCount -= 1;
                }
            }
          }
        })
        return newStatus;
    }
    // 新增一条数据
    if (action.type === ADD_ITEM_LIST) {
        const newStatus = JSON.parse(JSON.stringify(state));
        newStatus.listData.push(action.data);
        return newStatus;
    }
    // 删除所有数据
    if (action.type === DEL_ALL_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        let tempArr = [];
        newState.listData.forEach((item, count) => {
          if (!item.checkStatus) {
            tempArr.push(item);
          }
        })
        newState.listData = tempArr;
        newState.checkCount = 0;
        return newState;
    }
    // 选中所有
    if (action.type === ALL_LIST_CHECKED) {
        let checkCount = 0;
        const newState = JSON.parse(JSON.stringify(state));
        newState.listData.forEach((item, count) => {
            item.checkStatus = action.flag;
            if (item.checkStatus) {
                checkCount += 1;
            } else {
                if (checkCount === 0) {
                    checkCount = 0;
                } else {
                    checkCount -= 1;
                }
            } 
        })
        newState.checkCount = checkCount;
        return newState;
    }
    // 获取所有数据
    if (action.type === GET_ALL_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.items = action.items;
        console.log('newState',newState);
        return newState
    }
    return state;
}
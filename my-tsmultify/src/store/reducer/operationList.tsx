import { ADD_LIST_DATA, REMOVE_LIST_DATA, DELETE_RIGHT_TABS, LEFT_MENU_STORAGE } from '../actionTypes'
import defaultState from '../defaultState'
export default (state: any = defaultState.globalState, action: any)=> {
    if (action.type === ADD_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        let reduceArray = null;
        let copyObj: any = {};
        newState.listData.push(action.todos);
        reduceArray = newState.listData.reduce((initArray: any, now: any) => {
            copyObj[now.menuSecond] ? '': copyObj[now.menuSecond] = true && initArray.push(now);
            return initArray;
        }, []);
        newState.listData = reduceArray;
        return newState;
    }
    if (action.type === REMOVE_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.listData.forEach((item: any, index: number) => {
            if (item.menuSecond === action.item.menuSecond) {
                newState.listData.splice(index, 1); 
            }
        })
        return newState;
    }  else if (action.type === LEFT_MENU_STORAGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.chooseMenu = action.menu
        return newState;
    } else if (action.type === DELETE_RIGHT_TABS) {
        const newState = JSON.parse(JSON.stringify(state));
        let current:number = 0;
        newState.listData.forEach((item: any, index: number) => {
            if (item.menukey === action.menu) {
                current = index;
            }
        })
        const currentList = newState.listData.filter((item: any, index: number) => {
            return index <= current
        })
        newState.listData = currentList;
        newState.chooseMenu = currentList[currentList.length - 1]
        return newState;
    }
    return state;
}
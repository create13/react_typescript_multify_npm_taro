import { ADD_LIST_DATA } from './actionTypes'
const defaultState = {
    listData: [{title:'数据'}]
}
export default (state: any = defaultState, action: any)=> {
    if (action.type === ADD_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.listData.push(action.todos);
        return newState;
    }
    return state;
}
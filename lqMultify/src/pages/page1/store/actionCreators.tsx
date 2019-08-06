import { REQ_LIST_DATA } from './actionTypes'
// import { ADD_LIST_DATA } from './actionTypes'
// export const addList = (todos: any) => ({
//     type: ADD_LIST_DATA,
//     todos
// })
export const addList = (todos: any) => ({
    type: REQ_LIST_DATA,
    todos
})
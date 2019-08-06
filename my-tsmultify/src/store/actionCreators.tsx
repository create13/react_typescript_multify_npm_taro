import { REQ_LIST_DATA, REQ_REMOVE_DATA, REQ_LOADING, LANGUAGE_STORAGE, LEFT_MENU_STORAGE, DELETE_RIGHT_TABS } from './actionTypes'
export const addList = (todos: any) => ({
    type: REQ_LIST_DATA,
    todos
})
export const delList = (item: any) => ({
    type: REQ_REMOVE_DATA,
    item
})
export const changeLoading = (status: boolean) => ({
    type: REQ_LOADING,
    status
})
export const lanStorage = (data: any) => ({
    type: LANGUAGE_STORAGE,
    data
})
export const leftMenu = (menu: any) => ({
    type: LEFT_MENU_STORAGE,
    menu
})
export const delRight = (menu: any) => ({
    type: DELETE_RIGHT_TABS,
    menu
})
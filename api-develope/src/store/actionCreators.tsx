import { REQ_LIST_DATA, REQ_REMOVE_DATA, REQ_LOADING, LANGUAGE_STORAGE, DELETE_RIGHT_TABS, CHANGE_MENU_LIST, STORAGE_FIRST_ID, CHANGE_MENU_STATUS, DEFAULT_SELECT_FIRST } from './actionTypes'
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
export const delRight = (menu: any) => ({
    type: DELETE_RIGHT_TABS,
    menu
})
export const changeMenu = (menu: any) => ({
    type: CHANGE_MENU_LIST,
    menu
})
export const storageId = (id: any) => ({
    type: STORAGE_FIRST_ID,
    id
})
export const menuStatus = (status: any) => ({
    type: CHANGE_MENU_STATUS,
    status
})
export const defaultSelect = (status: any) => ({
    type: DEFAULT_SELECT_FIRST,
    status
})

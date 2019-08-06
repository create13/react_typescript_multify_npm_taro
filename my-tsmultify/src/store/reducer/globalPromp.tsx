import { LOADING_STATUS, LANGUAGE_STORAGE } from '../actionTypes'
import defaultState from '../defaultState'
export default (state: any = defaultState.globalState, action: any) => {
    if (action.type === LOADING_STATUS) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.maskStatus = action.status
        return newState;
    } else if (action.type === LANGUAGE_STORAGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.lanStorage = action.data
        return newState;
    }
    return state;
}
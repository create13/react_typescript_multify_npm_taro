import { combineReducers } from 'redux'
import operationList from './operationList';
import globalPromp from './globalPromp'
const rootReducer = combineReducers({
    operationList,
    globalPromp
});
export default rootReducer;
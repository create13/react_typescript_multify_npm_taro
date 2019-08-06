// store文件夹是正常的redux 状态管理 没有结合任何中间件
import { createStore } from 'redux'
import reducer from './reducer';
let store = createStore(reducer, window.STATE_FROM_SERVER);
export default store;
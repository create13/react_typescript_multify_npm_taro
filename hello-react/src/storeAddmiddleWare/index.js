// redux-thunk storeAddmiddleWare中内容都是结合redux-thunk tableCopy.jsx是对应的组件内容
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
export default store;
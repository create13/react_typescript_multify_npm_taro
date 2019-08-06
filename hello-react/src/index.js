import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux' // 新增
import PretendApp from './components/pretendApp'  // 新增
import store from './storeSaga' // 新增
// import App from './App'; //为了引入react-redux注销掉
import * as serviceWorker from './serviceWorker';
const App = (
    <Provider store={store}>
    <PretendApp />
    </Provider>
)
// ReactDOM.render(<App />, document.getElementById('root'));//为了引入react-redux注销掉
ReactDOM.render(App, document.getElementById('root'));

serviceWorker.unregister();  //6.0.1

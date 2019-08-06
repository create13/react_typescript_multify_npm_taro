import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import PretendApp from './App'
import store from './store'
const App = (
    <Provider store={store}>
    <PretendApp />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));

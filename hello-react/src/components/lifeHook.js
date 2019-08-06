import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class LifeHook extends Component {
    // 初始化阶段
    constructor (props) {
        super(props)
        this.state = {
            age: 100
        }
        console.log('constructor(props)');
    }
    componentWillMount () {
        console.log('componentWillMount');
    }
    componentDidMount () {
        console.log('componentDidMount');
        this.timeOut = setTimeout(() => {
            this.setState({
                age: this.state.age + 10
            })
        },1000)
    }
    // 更新阶段
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate () {
        console.log('componentWillUpdate');
    }
    componentDidUpdate () {
        console.log('componentDidUpdate');
    }
    // 卸载阶段
    componentWillUnmount () {
        console.log('componentWillUnmount');
        clearTimeout(this.timeOut);
    }
    // 错误处理
    componentDidCatch () {
        console.log('componentDidCatch');
    }
    render () {
        console.log('render');
        return (
        <div>
            <h2>妖,{this.state.age}岁</h2>
            {/* ReactDOM.unmountComponentAtNode(document.getElementById('root'))卸载 */}
            <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>刁民想害我</button>
        </div>
        )
    }

}
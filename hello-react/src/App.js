// 组件components中pretendApp是结合react-redux后修改的内容 结合react-redux后的pretendApp.jsx在根目录下的index.js进行了全局store配置 全局store配置引用的是redux-saga对应的store
// 结合后的react-redux 示例实现组件是pretendFormTotal、pretendFormHeader、pretendFormDetail、pretendFormFooter
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header' // 引入Header
import Body from './components/body'
import Home from './components/home' // 引入Home
import List from './components/list'
import Login from './components/login'
import LifeHook from './components/lifeHook'
import Scratchable from './components/scratchable'
import FormTotal from './components/formTotal'
import AddStore from './components/addStoreFormTotal'
import PretendForm from './components/pretendFormTotal'
import store from './store'
class App extends Component {
  constructor () {
    super()
    this.state = {
      homeLink: 'homeLink',
      stateMount: true
    }
    this.inputRef = React.createRef();
    console.log(store);
  }
  onchangeMount () {
    this.setState({
      stateMount: !this.state.stateMount
    })
  }
  changeHomeLink (newName) {
    this.setState({
      homeLink: newName
    })
  }
  onGreat (age) { // 接收子组件传递过来的值
    console.log('子组件向父组件传值', age);
  }
  focusInput () {
    this.inputRef.current.focus();
  }
  render() {
    let user = {
      name: 'Augus',
      hobby: ['badminton', 'music']
    };
    let cm = '';
    if (this.state.stateMount) {
      cm = (
        <Body changeLink={this.changeHomeLink.bind(this)}/>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Header name={'lee'} age={25} user={user} great={this.onGreat}>
            <p>
              I am child
              <span>里面还有一项内容</span>
            </p>
          </Header>
          {this.state.inputChange}
          <Home homeLink={this.state.homeLink}/>
          {cm}
          <button onClick={this.onchangeMount.bind(this)}>mount状态切换</button>
          {/* 使用ref获取焦点 */}
          <input type="text" ref={this.inputRef} placeholder="请输入内容" />
          <button onClick= {() => this.focusInput()}>获取焦点</button>
        </header>
        <List />
        <Login />
        <LifeHook />
        <Scratchable />
        <FormTotal />
        <AddStore />
        <PretendForm />
      </div>
    );
  }
}

export default App;

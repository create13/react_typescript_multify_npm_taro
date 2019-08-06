import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './header' // 引入Header
import Body from './body'
import Home from './home' // 引入Home
import List from './list'
import Login from './login'
import LifeHook from './lifeHook'
import Scratchable from './scratchable'
import FormTotal from './formTotal'
import AddStore from './addStoreFormTotal'
import store from '../storeSaga'
import PretendForm from './pretendFormTotal'
import { connect } from 'react-redux'
import { getAllList } from './../storeSaga/actionCreators'
class PretendAPP extends Component {
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
  componentDidMount () {
    this.props.reqTodoList();
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
const mapDispatchToProps = (dispatch) => {
  return {
    reqTodoList () {
      const action = getAllList();
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps)(PretendAPP);

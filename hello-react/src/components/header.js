import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入数据类型判断脚本
// 组件写法2 有状态组件
export default class Header extends Component { // 固定格式
  constructor (props) { // 初始化 参数为父组件传过来的内容
    super(props);
    this.age = this.props.age; // 这样写子组件数据改变 父组件不改变
    this.state = { // state对象 初始化age
      age: props.age,
      status: 0
    }
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000)
  }
  addAge () {
    this.age += 3; // 这样写不会双向数据改变
    this.setState({ // this.setState通过修改this.state的值来重新更新dom渲染数据
      age: this.state.age + 3
    });
    console.log(this);
  }
  handleGreet () { // 给父组件传值
    console.log(this.props);
    this.props.great(this.state.age)
  }
  render() {
      console.log('父组件传递过来的数据用this.props接收', this.props);
    return (
      <div className="header">
        my name is {this.props.name}, my age is {this.state.age}
        <h1>
          循环遍历hobby数组：{this.props.user.hobby.map((item, index) => <p key={index}>{item}</p>)}
        </h1>
        <h2>父组件传过来的内容 {this.props.children}</h2>
        <p>status: {this.state.status}</p>
        <button onClick={this.addAge.bind(this)}>click me</button>
        <button onClick={() => {this.addAge()}}>等同上面click的写法 click me</button>
        <button onClick={() => {this.handleGreet()}}>great</button>
      </div>
    );
  }
}
// 制约父组件传递数据的类型
Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.element.isRequired,
  great: PropTypes.func
};
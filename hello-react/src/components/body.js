// 组件生命周期
import React, {Component} from 'react'; // 固定引入
// import PropTypes from 'prop-types'
// 组件写法1
export default class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      homeLink: 'body中的homeLink',
      inputValue: 'lee'
    }
    console.log('constructor');
  }
  changeLink () {
    console.log(this.props);
      this.props.changeLink(this.state.homeLink)
  }
  InputModify (event) {
    console.log(event);
    this.setState({
      inputValue: event.target.value
    })
  }
  // 生命周期 constructor componentWillMount render componentDidMount
  // 数据改变 shouldComponentUpdate componentWillUpdate render componentDidUpdate
  // componentWillUnmount 
  // 当子组件调用父组件方法 将数据传递过去 涉及到更新时触发componentWillReceiveProps
  componentWillMount () {
    console.log('componentWillMount');
  }
  componentDidMount () {
    console.log('componentDidMount');
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <div className="body">
        {'我是body'}
        <button onClick={this.changeLink.bind(this)}>点击我改变homelink中的值 实现父子组件之间相互传值</button>
        <p>实现双向数据绑定：{this.state.inputValue}</p>
        <input type="text" value={this.state.inputValue} onChange={this.InputModify.bind(this)}></input>
      </div>
    );
  }
}
// Body.propTypes = {
// }
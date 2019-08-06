import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入数据类型判断脚本
export default class FormHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
    this.enterRef = React.createRef();
  }
  // 按下回车按键
  keyDown (e) {
    let {lastId, addData} = this.props;
    if (e.keyCode === 13) {
      if (this.enterRef.current.value.trim() === '') {
        alert('数据不得为空');
        return;
      }
      addData({title:this.enterRef.current.value, id: lastId + 1, checkStatus: false});
      this.enterRef.current.value = '';
    }
  }
  render() {
    return (
      <div className="form-header">
      <input type="text" ref={this.enterRef} className="top-input" placeholder="请输入今天的任务清单，按回车确认" onKeyDown={(e) => {this.keyDown(e)}} />
      </div>
    );
  }
}
// 制约父组件传递数据的类型
FormHeader.propTypes = {
  lastId: PropTypes.number.isRequired,
  addData: PropTypes.func.isRequired
};
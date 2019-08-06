import React, { Component } from 'react';
import store from '../store'
import { addList } from '../store/actionCreators'
export default class FormHeader extends Component {
  constructor (props) {
    super(props);
    this.state = store.getState()
    this.enterRef = React.createRef();
    this.updateStatus = this.updateStatus.bind(this);
    store.subscribe(this.updateStatus);
  }
  // 按下回车按键
  keyDown (e) {
    let { listData } = this.state;
    let lastId = listData.length === 0 ? 0: listData[listData.length - 1].id;
    if (e.keyCode === 13) {
      if (this.enterRef.current.value.trim() === '') {
        alert('数据不得为空');
        return;
      }
      const action = addList({title:this.enterRef.current.value, id: lastId + 1, checkStatus: false});
      store.dispatch(action);
      this.enterRef.current.value = '';
    }
  }
  updateStatus () {
    this.setState(store.getState());
  }
  render() {
    return (
      <div className="form-header">
      <input type="text" ref={this.enterRef} className="top-input" placeholder="请输入今天的任务清单，按回车确认" onKeyDown={(e) => {this.keyDown(e)}} />
      </div>
    );
  }
}
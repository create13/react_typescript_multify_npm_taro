import React, { Component } from 'react';
import store from '../store'
import {deleteAllData, allChecked} from '../store/actionCreators'
export default class PretendFormFooter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: false,
      listData: store.getState().listData,
      checkCount: store.getState().checkCount
    }
    this.updateStatus = this.updateStatus.bind(this);
    store.subscribe(this.updateStatus);
  }
  updateStatus () {
    this.setState(store.getState());
  }
  delChecked () {
    const action = deleteAllData()
    store.dispatch(action);
  }
  checkedAll (flag) {
    const action = allChecked(flag);
    store.dispatch(action);
  }
  render() {
    const {listData, checkCount} = this.state;
    return (
        <div className="form-detail form-footer">
            <div className="single-row no-border">
                <div>
                    <input type="checkbox" checked={checkCount === listData.length} onChange={() => {this.checkedAll(checkCount !== listData.length)}}/>
                    <span>已完成{checkCount}件 / 总计{listData.length}件</span>
                </div>
                <button className="del-btn btn-width" onClick={() => {this.delChecked()}}>清除已完成任务</button>
            </div>
        </div>
    );
  }
}
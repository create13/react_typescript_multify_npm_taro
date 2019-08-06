import React, { Component } from 'react';
// import PropTypes from 'prop-types'; // 引入数据类型判断脚本
import store from './../store'
import {removeWithId, changeCheckboxStatus} from '../store/actionCreators'
export default class PretendFormDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
        showStatus: false,
        listData: store.getState().listData
    }
    this.changeStatus = this.changeStatus.bind(this);
    store.subscribe(this.changeStatus);
  }
  showBtn (status) {
    let {showStatus} = this.state;
    showStatus = status;
    this.setState({
        showStatus
    });
  }
  changeStatus () {
    this.setState({
      listData: store.getState().listData,
      checkCount: store.getState().checkCount
    });
  }
  removeWithId (Id) {
    const action = removeWithId(Id)
    store.dispatch(action)
  }
  checkChange (index, status) {
    const action = changeCheckboxStatus(index, status);
    store.dispatch(action);
  }
  render() {
      let {showStatus, listData} = this.state;
    return (
        <div className="form-detail" onMouseOver={() =>{this.showBtn(true)}} onMouseOut={() => {this.showBtn(false)}}>
        {listData.map((item, index) => (
            <div className="single-row" key={index}>
                <div>
                    <input type="checkbox" checked={item.checkStatus} onChange={() => {this.checkChange(item.id, item.checkStatus)}} />
                    <span>{item.title}</span>
                </div>
                <button className="del-btn" style={{display: showStatus ? 'block': 'none'}} onClick={() => {this.removeWithId(item.id)}}>删除</button>
            </div>
        ))}
        </div>
    );
  }
}

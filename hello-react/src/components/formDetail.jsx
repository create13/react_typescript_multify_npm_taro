import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入数据类型判断脚本
export default class FormDetail extends Component {
    // 制约父组件传递数据的类型
    static propTypes = {
        listData: PropTypes.array.isRequired,
        removeWithId:PropTypes.func.isRequired
    };
  constructor (props) {
    super(props);
    this.state = {
        showStatus: false
    }
  }
  showBtn (status) {
    let {showStatus} = this.state;
    showStatus = status;
    this.setState({
        showStatus
    });
  }
  render() {
      let {showStatus} = this.state;
      let {listData, removeWithId, checkChange} = this.props;
    return (
        <div className="form-detail" onMouseOver={() =>{this.showBtn(true)}} onMouseOut={() => {this.showBtn(false)}}>
        {listData.map((item, index) => (
            <div className="single-row" key={index}>
                <div>
                    <input type="checkbox" checked={item.checkStatus} onChange={() => {checkChange(index, item.checkStatus)}} />
                    <span>{item.title}</span>
                </div>
                <button className="del-btn" style={{display: showStatus ? 'block': 'none'}} onClick={() => {removeWithId(index)}}>删除</button>
            </div>
        ))}
        </div>
    );
  }
}

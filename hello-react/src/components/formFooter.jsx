import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入数据类型判断脚本
export default class FormFooter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: false
    }
  }
  render() {
    let {checkCount, totalCount, allChecked, delChecked} = this.props;
    return (
        <div className="form-detail form-footer">
            <div className="single-row no-border">
                <div>
                    <input type="checkbox" checked={checkCount === totalCount} onChange={() => {allChecked(checkCount !== totalCount)}}/>
                    <span>已完成{checkCount}件 / 总计{totalCount}件</span>
                </div>
                <button className="del-btn btn-width" onClick={() =>{delChecked()}}>清除已完成任务</button>
            </div>
        </div>
    );
  }
}
// 制约父组件传递数据的类型
FormFooter.propTypes = {
  checkCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  allChecked: PropTypes.func.isRequired,
  delChecked: PropTypes.func.isRequired
};
// formDetail、formTotal、formHeader、formFooter有状态 无状态组件互相传递参数 实现的逻辑
import React, { Component } from 'react';
import FormHeader from './formHeader';
import FormDetail from './formDetail';
import FormFooter from './formFooter';
import Hot from './hot';
import HotDetail from './hotDetail';
import Follow from './follow'  // 引入路由所需的组件
import Login from './login'
import { BrowserRouter, Route, Link } from 'react-router-dom' // 引入react-router-dom
// import PropTypes from 'prop-types'; // 引入数据类型判断脚本
import '../static/css/formAbout.css'
export default class FormTotal extends Component {
    // 制约父组件传递数据的类型
    static propTypes = {
    };
  constructor (props) {
    super(props);
    this.state = {
        listData: [
            {title: '看书一小时', id: 1, checkStatus: false},
            {title: '打篮球一小时', id: 2, checkStatus: false},
            {title: '玩游戏一小时', id: 3, checkStatus: false}
        ],
        checkCount: 0
    }
    this.removeWithId = this.removeWithId.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.addData = this.addData.bind(this);
    this.delChecked = this.delChecked.bind(this);
    this.allChecked = this.allChecked.bind(this);
  }
  // 删除
  removeWithId (index) {
    let dataList = this.state.listData;
    dataList.forEach((item, count) => {
      if (index === count) {
        dataList.splice(count, 1);
      }
    })
    this.setState({
      listData: dataList
    });
  }
  // 切换按钮状态
  checkChange (index, status) {
    let dataList = this.state.listData;
    let checkCount = this.state.checkCount;
    dataList.forEach((item, count) => {
      if (index === count) {
        item.checkStatus = !status;
        if (item.checkStatus) {
          checkCount += 1;
        } else {
          checkCount -= 1;
        }
      }
    })
    this.setState({
      listData: dataList,
      checkCount
    });
  }
  // 插入一条数据
  addData (data) {
    let dataList = this.state.listData;
    dataList.push(data);
    this.setState({
      listData: dataList
    });
  }
  // 删除选中状态
  delChecked () {
    let dataList = this.state.listData;
    dataList.forEach((item, count) => {
      if (item.checkStatus) {
        dataList.splice(count, 1);
      }
    })
    this.setState({
      listData: dataList,
      checkCount: 0
    });
  }
  // 全部选中状态变更
  allChecked (flag) {
    let dataList = this.state.listData;
    let checkCount = 0;
    dataList.forEach((item, count) => {
      item.checkStatus = flag;
      if (item.checkStatus) {
        checkCount += 1;
      }
    })
    this.setState({
      listData: dataList,
      checkCount
    });
  }
  render() {
    let {listData, checkCount} = this.state;
    return (
      <BrowserRouter> // 最外层 1
        {/* <div className="total">
          <FormHeader addData={this.addData} lastId={listData.length === 0 ? 0: listData[listData.length - 1].id} />
          <FormDetail listData={listData} removeWithId={this.removeWithId} checkChange = {this.checkChange} />
          <FormFooter checkCount = {checkCount} totalCount={listData.length} delChecked = {this.delChecked} allChecked = {this.allChecked} />
        </div> */}
        <Link to="/">主页</Link> // 作用相当于a标签
        <Link to="/hot/123">热门</Link>
        <Link to="/follow">关注</Link>
        <Route path='/' exact></Route>
        <Route path='/hot/:titleId' component={Hot}></Route>
        <Route path='/hotDetail' component={HotDetail}></Route> // 用来显示切换的路由
        <Route path='/follow' component={Follow}></Route>
        <Route path='/login' component={Login}></Route>
      </BrowserRouter>
    );
  }
}
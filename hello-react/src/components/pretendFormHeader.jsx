import React, { Component } from 'react';
// import store from '../store'
import { addList } from '../storeSaga/actionCreators'
import {connect} from 'react-redux'
class PretendFormHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {}
    this.enterRef = React.createRef();
    // this.updateStatus = this.updateStatus.bind(this);
    // store.subscribe(this.updateStatus);
  }
  // 按下回车按键
  keyDown (e) {
      console.log('按下回车显示props', this.props);
    let { listData } = this.props;
    let lastId = listData.length === 0 ? 0: listData[listData.length - 1].id;
    if (e.keyCode === 13) {
      if (this.enterRef.current.value.trim() === '') {
        alert('数据不得为空');
        return;
      }
    //   const action = addList({title:this.enterRef.current.value, id: lastId + 1, checkStatus: false});
    //   store.dispatch(action);
      this.props.addData({title:this.enterRef.current.value, id: lastId + 1, checkStatus: false});
      this.enterRef.current.value = '';
    }
  }
//   updateStatus () {
//     this.setState(store.getState());
//   }
  render() {
    return (
      <div className="form-header">
      <input type="text" ref={this.enterRef} className="top-input" placeholder="请输入今天的任务清单，按回车确认" onKeyDown={(e) => {this.keyDown(e)}} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log('查看state', state);
    return {
        listData: state.listData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addData(todos) {
            const action = addList(todos);
            dispatch(action);
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(PretendFormHeader)
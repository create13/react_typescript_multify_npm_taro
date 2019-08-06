import React, { Component } from 'react'
// import WebSocket from 'webSocket'
import { blueData, addData } from 'myAxios'
import { connect } from 'react-redux'
import mulLan from 'multilingual';
import { addList } from '@/store/actionCreators'
class PageJump extends Component<any, any> {
    constructor(props: any) {
      super(props)
    
      this.state = {
         
      }
    }
    componentDidMount() {
        // window.location.href="https://www.baidu.com/";
        window.frames.postMessage({ type: "loginOut", name: 111 }, "*")
        // WebSocket({url: 'localhost', port: '8080'});
        blueData({name:'lee'}).then((res: any) => {
        })
        addData().then((w: any) => {
        })
    }
    changeLanguage () {
        mulLan('en_US');
    }
    addTab () {
        this.props.addList({ menuSecond: '我提交的审批', linkRoute: '/main/mySubmitApproval', menukey: '1' });
        this.props.history.push('/main/mySubmitApproval');
    }
    render() {
        return (
            <div className="page-jump">
                <button onClick={() => {this.changeLanguage()}}>切换语言</button>
                <button onClick={() => {this.addTab()}}>点击添加</button>
                {/* <iframe src="http://192.168.3.211/" id="iframe" className="iframe-content"></iframe> */}
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
	return {
        dataStatus: state.globalPromp.lanStorage
	}
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addList (tabs: any) {
            const action = addList(tabs);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageJump);

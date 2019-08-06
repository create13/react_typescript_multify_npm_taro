import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import { defaultSelect, storageId } from '@/store/actionCreators'
import { connect } from 'react-redux'
class SdkDirections extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
            updateDate: '2019-07-05',
            visitedCount: 4286072
        }
    }
    goApi() {
        let navigatorMenu:any = localStorage.getItem('navigatorMenu');
        navigatorMenu = JSON.parse(navigatorMenu);
        this.props.history.push(navigatorMenu[1].linkAbout);
        this.props.defaultSelect(true);
        this.props.storageId('seeSample');
    }
    render() {
        let {updateDate, visitedCount} = this.state;
        return (
            <div className="container"> 
                <div className="header">
                    <h4>SDK使用说明</h4>
                    <div className="page-count">
                        <span className="times">更新日期：{updateDate} </span>
                    </div>
                </div>
                <div className="content-container">
                    <br/>
                    <div><span>概述</span></div>
                    <div>WTS开放平台SDK提供了API的请求封装、摘要签名、响应解释、消息监听等功能，使用SDK可以轻松完成API的调用，API结果的获取，消息的实时监听。</div>
                    <br/>
                    <div><span>环境依赖</span></div>
                    <ul>
                        <li>.NET SDK 需要依赖 .NET Framework 4.0及以上 （不支持Windows Phone平台）</li>
                    </ul>
                    <br/>
                    <div><span>SDK下载</span></div>
                    <div><a href="../netsdk.rar"><span>.NET SDK下载</span></a></div>
                    <br/>
                    <div><span>开发与测试</span></div>
                    <div>进入任意一个API的详情页面，查看API的<a onClick={() => {this.goApi()}}><span>请求示例</span></a></div>
            
                </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        storageId(status: boolean) {
            const action = storageId(status);
            dispatch(action);
        },
        defaultSelect(status: boolean) {
            const action = defaultSelect(status);
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(SdkDirections);
import React, { Component } from 'react'
import { Spin } from 'antd';
import '@/static/css/loading.scss'
class Loading extends Component<any, any> {
    render() {
        const spinElement = (
            <Spin tip="Loading..."></Spin>
        )
        const showLoading = this.props.loadingShow ? spinElement : null
        return (
            <div className="spin-cneter">
                {showLoading}
            </div>
        )
    }
}
export default Loading
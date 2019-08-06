import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
export default class finishApproval extends Component<any, any> {
    constructor(props:any) {
        super(props)
    }
    state = {
        newsList: [
            {listId: 1001, title: '习近平走进青年一代 八张海报感受暖心瞬间'},
            {listId: 1002, title: '李克强：力争年底基本取消高速公路省界收费站'},
            {listId: 1003, title: '广东高考移民事件正调查 取消移民考生高考成绩'},
            {listId: 1004, title: '美向中东部署航母震慑伊朗 或启动对伊新一轮制裁'}
        ]
    }
    clickBtn () {
        this.props.history.push({pathname: '/main/mySubmitApproval', state:{aa: '111'}});
    }
    render() {
        let {newsList} = this.state;
        return (
            <div className="finish-approval">
                <div>
                    <button onClick={() => {this.clickBtn()}}>点击跳转新闻详情页</button>
                    {newsList.map((item:any, index:any) => {
                        return (
                            <div key={index} className="news-title"><Link to={`/main/newsApproval/${item.listId}`}>{item.title}</Link></div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

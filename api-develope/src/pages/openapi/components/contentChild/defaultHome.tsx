import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import { connect } from 'react-redux'
import { changeMenu, menuStatus } from '@/store/actionCreators'
import introduce from '@/static/image/coho_introduce.png';
class DefaultHome extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
            updateDate: '2019-07-05',
            visitedCount: 4286072
        }
    }
    componentWillMount () {
        this.props.menuStatus(true);
    }
    componentDidMount () {
        let menuList = [
            {
                // menuFirst: '',
                menuArray: [
                    { menuSecond: '平台简介', linkRoute: '/', menukey: 'm001' },
                    { menuSecond: '开发入门', linkRoute: '/documentCenter', menukey: 'm002' },
                    { menuSecond: 'SDK使用说明', linkRoute: '/sdkDirections', menukey: 'm003' }
                ]
            }
        ];
        this.props.changeMenu(menuList);
    }
    render() {
        let {updateDate, visitedCount} = this.state;
        return (
            <div className="container">
                <div className="header">
                    <h4>平台简介</h4>
                    <div className="page-count">
                        <span className="times">更新日期：{updateDate}</span>
                    </div>
                </div>
                <div className="content-container">
                    <br/>
                    <div><span>一.平台简介</span></div>
                    <div>劳勤开放平台（Coho Open Platform）是基于WTS业务的开放平台，提供外部合作伙伴或客户访问劳勤业务数据，例如API、授权体系等。她是劳勤基础服务的重要开放途径，将推动各行各业定制、创新、进化，并最终促成新商业文明生态圈的建立。</div>
                    <br/>
                    <div><span>二、平台特点</span></div>
                    <div>劳勤开放平台为外部合作伙伴或客户提供了极大的想象空间——目前对外开放的 API近20个，涵盖了劳勤核心业务的主要流程。同时，劳勤开放平台形式自由——不限语言、不限平台（支持浏览器、桌面）、不限使用场所。 </div>
                    <br/>
                </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        changeMenu(data: any) {
            const action = changeMenu(data);
            dispatch(action);
        },
        menuStatus(data: any) {
            const action = menuStatus(data);
            dispatch(action);
        },
	}
}
export default connect(null, mapDispatchToProps)(DefaultHome);
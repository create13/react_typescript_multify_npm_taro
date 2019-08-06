import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import { changeMenu, menuStatus } from '@/store/actionCreators'
import { connect } from 'react-redux'
class typeFixed extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
             typeConstructor: true
        }
    }
    toggleForm = (data: string) => {
        const { typeConstructor } = this.state;
        switch (data) {
            case '类型说明':
                this.setState({
                    typeConstructor: !typeConstructor
                });
                break;
        }
    };
    componentWillMount () {
        this.props.changeMenu([]);
        this.props.menuStatus(false);
    }
    render() {
        let { typeConstructor } = this.state;
        return (
            <div className="container"> 
                <div className="page-container">
                <div className="ClaimList-wrap"> 
                    <div className="ClaimList-box">
                        {/* 列表内容 */}
                        <div className="ClaimList-title" onClick={() => this.toggleForm('类型说明')}>
                            <span className={`flex-triangle ${typeConstructor ? '': 'left'}`}></span>
                            <h2>类型说明</h2>
                        </div>
                        {typeConstructor ? <div className="ClaimList-content">
                            {/* table标题 */}
                            <div className="table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>名称</th>
                                            <th>示例</th>
                                            <th>描述</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>string</td>
                                            <td>afwhegwhfewf</td>
                                            <td>字符串</td>
                                        </tr>
                                        <tr>
                                            <td>boolean</td>
                                            <td>true</td>
                                            <td>布尔类型</td>
                                        </tr>
                                        <tr>
                                            <td>array</td>
                                            <td>[]</td>
                                            <td>用户对象列表</td>
                                        </tr>
                                        <tr>
                                            <td>int</td>
                                            <td>123</td>
                                            <td>整数类型</td>
                                        </tr>
                                        <tr>
                                            <td>float</td>
                                            <td>12.13</td>
                                            <td>浮点类型</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>: ''}
                    </div>
                </div>
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
        }
	}
}
export default connect(null, mapDispatchToProps)(typeFixed);

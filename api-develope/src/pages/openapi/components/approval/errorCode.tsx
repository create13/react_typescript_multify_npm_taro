import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import { getErrCode, getErrorCodesTree } from '@/api'
import { changeMenu, menuStatus } from '@/store/actionCreators'
import { connect } from 'react-redux'
class ErrorCode extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
            tableList: [],
            errorStatus: true
        }
    }
    getErrCode () {
        getErrCode({categoryId: 'ec001'}).then((res: any) => {
            if (res.data.length > 0) {
                this.setState({
                    tableList: res.data
                })
            } else {
                this.setState({
                    tableList: []
                })
            }
        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    componentWillMount () {
        this.props.menuStatus(true);
        this.getErrCode();
        getErrorCodesTree().then((res: any) => {
            let menuList = [];
            let menuArray = [];
            let firstId:any = {};
            if (res.data.length > 0) {
                for (let project of res.data) {
                    let objOuter: any = {};
                    let { errcodeName: menuFirst } = project;
                    objOuter.menuFirst = menuFirst;
                    let childrens = project.childrens;
                    firstId = {api: childrens[0].errcodeCategoryPid};
                    // this.props.storageId(firstId);
                    for (let single of childrens) {
                        let obj: any = {};
                        let {errcodeName: menuSecond, errcodeCategoryPid: menukey} = single;
                        obj.menuSecond = menuSecond;
                        obj.linkRoute = `/errorCode/${menukey}`
                        obj.menukey = menukey;
                        menuArray.push(obj);
                        objOuter.menuArray = menuArray;
                    }
                    menuList.push(objOuter);
                }
            }
            this.props.changeMenu(menuList);
        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    toggleForm = (data: string) => {
        const { errorStatus } = this.state;
        switch (data) {
            case '错误码':
                this.setState({
                    errorStatus: !errorStatus
                });
                break;
        }
    };
    render() {
        let {tableList, errorStatus} = this.state;
        return (
            <div className="container"> 
            <div className="page-container">
            <div className="ClaimList-wrap"> 
            <div className="ClaimList-box">
            {/* 列表内容 */}
            <div className="ClaimList-title" onClick={() => this.toggleForm('错误码')}>
                <span className={`flex-triangle ${errorStatus ? '': 'left'}`}></span>
                <h2>错误码</h2>
            </div>
                {errorStatus ? <div className="ClaimList-content">
                    {tableList && tableList.length > 0 ? <div>

                            <div className="table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>错误码</th>
                                            <th>错误详情</th>
                                            <th>错误描述</th>
                                            <th>解决方案</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableList.map((datam: any, mindex: number) => {
                                            return (
                                                <tr key={mindex}>
                                                    <td>
                                                        {datam.errcodeCode}
                                                    </td>
                                                    <td>
                                                        {datam.errcode_name}
                                                    </td>
                                                    <td>
                                                        {datam.errcodeDesc}
                                                    </td>
                                                    <td>
                                                        {datam.errcodeSolution}
                                                    </td>
                                                </tr>
                                                )
                                        })}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    : '后端返回数据为空或者服务器开小差~'}
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
        // storageId(data: any) {
        //     const action = storageId(data);
        //     dispatch(action);
        // },
        menuStatus(data: any) {
            const action = menuStatus(data);
            dispatch(action);
        },
	}
}
export default connect (null, mapDispatchToProps)(ErrorCode)

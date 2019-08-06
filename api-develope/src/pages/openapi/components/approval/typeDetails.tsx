import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import ReactDOM from 'react-dom';
import Highlight from 'react-highlight'
import { getApiMenu, getApi } from '@/api'
import TabsControl from './tabsControl';
import { Button } from 'antd';
import { changeMenu, menuStatus, storageId } from '@/store/actionCreators'
class TypeDetails extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            publicParam: [],
            businessParam: [],
            responseParams: [],
            requestAddress: [],
            expandListPub: true,
            expandListHttp: true,
            expandListParams: true,
            expandListResponse: true,
            expandListRequest: true,
            expandListSample: true,
            expandListError: true,
            expandListApi: true,
            codeDetail: [],
            responseCode: [],
            errCode: [],
            apiId: '',
            projectId: '',
            titleName: {},
            componentStatus: false,
            menuRecord: ''

        }
    }
    componentWillReceiveProps (nextProps: any) {
        if (nextProps.match.params.typeId !== this.props.match.params.typeId) {
            let getTitle: any = localStorage.getItem('typeData');
            getTitle = JSON.parse(getTitle);
            if (Object.keys(getTitle).length > 0) {
                this.setState({
                    titleName: getTitle
                })
            }
            let typeId = nextProps.match.params.typeId;
            this.getApiMenu(typeId);
        }
    }
    getApiMenu (typeId: any) {
        getApiMenu({apiId: typeId}).then((res: any) => {
            if (res.data.pubParams.length > 0) {
                this.setState({
                    publicParam: res.data.pubParams
                })
            }
            if (res.data.bllParams.length > 0) {
                this.setState({
                    businessParam: res.data.bllParams
                })
            }
            if (res.data.resparams.length > 0) {
                this.setState({
                    responseParams: res.data.resparams
                })
            }
            if (res.data.requestExamples.length > 0) {
                this.setState({
                    codeDetail: res.data.requestExamples
                })
            }
            if (res.data.responseExamples.length > 0) {
                this.setState({
                    responseCode: res.data.responseExamples
                })
            }
            if (res.data.exceptionExamples.length > 0) {
                this.setState({
                    errCode: res.data.exceptionExamples
                })
            }
            if (res.data.requestAddress.length > 0) {
                this.setState({
                    requestAddress: res.data.requestAddress
                })
            }
            this.setState({
                // moduleId: res.data.moduleId,
                apiId: typeId,
                projectId: res.data.projectId,
                componentStatus: true
            })
        }).catch((err: any) => {
            console.log('err', err)
        })
    }
    componentWillMount () {
        this.props.menuStatus(true);
        let typeId = this.props.match.params.typeId;
        let moduleId = this.props.match.params.moduleId;
        this.getApiMenu(typeId);
        getApi({moduleId}).then((res: any) => {
            let menuList = [];
            let menuArray = [];
            let firstId:any = {};
            if (res.data.apis.length > 0) {
                firstId = {api: res.data.apis[0].id};
                // this.props.storageId(firstId);
                let objOuter: any = {};
                this.setState({
                    menuRecord: res.data.curModule.moduleName
                })
                for (let project of res.data.apis) {
                    objOuter.firstMenu = res.data.curModule.moduleName;
                    let obj: any = {};
                    let {apiName: menuSecond, id: menukey, apiModuleId, apiDesc, apiDetail} = project;
                    obj.menuSecond = menuSecond;
                    obj.menuDes = apiDesc;
                    obj.menuDetail = apiDetail;
                    obj.linkRoute = `/typeDetails/${menukey}/${apiModuleId}`
                    obj.menukey = menukey;
                    if (this.props.match.params.typeId === menukey) {
                        obj.firstSelect = true;
                    } else {
                        obj.firstSelect = false;
                    }
                    menuArray.push(obj);
                    objOuter.menuArray = menuArray;
                }
                menuList.push(objOuter);
            }
            let getTitle: any = localStorage.getItem('typeData');
            getTitle = JSON.parse(getTitle);
            if (Object.keys(getTitle).length > 0) {
                this.setState({
                    titleName: getTitle
                })
            }
            this.props.changeMenu(menuList);
        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    // 展开搜收缩
    toggleForm = (data: string) => {
        const { expandListPub, expandListApi, expandListParams, expandListResponse, expandListRequest, expandListSample, expandListError, expandListHttp} = this.state;
        switch (data) {
            case '公共请求参数':
                this.setState({
                    expandListPub: !expandListPub
                });
                break;
            case '请求地址':
                this.setState({
                    expandListHttp: !expandListHttp
                });
                break;
            case '业务请求参数':
            this.setState({
                expandListParams: !expandListParams
            });
            break;
            case '响应参数':
                this.setState({
                    expandListResponse: !expandListResponse
                });
                break;
            case '请求示例':
                this.setState({
                    expandListRequest: !expandListRequest
                });
                break;
            case '响应示例':
                this.setState({
                    expandListSample: !expandListSample
                });
                break;
            case '异常示例':
                this.setState({
                    expandListError: !expandListError
                });
                break;
            case 'API工具':
                this.setState({
                    expandListApi: !expandListApi
                });
                break;
        }
    };
    sdkRun () {
        let menuList = [
            {
                menuType: 'typeDetails',
                menuArray: [
                    { menuSecond: '平台介绍', linkRoute: '/', menukey: 'm001' },
                    { menuSecond: '开发入门', linkRoute: '/documentCenter', menukey: 'm002' },
                    { menuSecond: 'SDK使用说明', linkRoute: '/sdkDirections', menukey: 'm003' }
                ]
            }
        ];
        this.props.history.push('/sdkDirections');
        this.props.changeMenu(menuList);
        this.props.storageId('sdk');
    }
    render() {
        let {publicParam, apiId, projectId, businessParam, requestAddress, menuRecord, expandListApi, responseParams, componentStatus, codeDetail, responseCode, errCode, expandListPub, expandListHttp, expandListParams, expandListResponse, expandListRequest, expandListSample, expandListError, titleName} = this.state;
        if (componentStatus) {
            return (
                <div className="container">
                    <div className="page-container">
                        <div className="ClaimList-wrap">
                            <h4>{titleName.menuSecond}</h4>
                            <div>{titleName.menuDetail}</div>
                            <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('请求地址')}>
                                    <span className={`flex-triangle ${expandListHttp ? '': 'left'}`}></span>
                                    <h2>请求地址</h2>
                                </div>
                                {/* 列表内容 */}
                                {expandListHttp ? <div className="ClaimList-content">
                                    {/* table标题 */}
                                    <div className="table-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>环境</th>
                                                    <th>HTTP地址</th>
                                                    <th>HTTPS地址</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {requestAddress.map((datam: any, pindex: number) => {
                                                    return (
                                                        <tr key={pindex}>
                                                            <td>
                                                                {datam.cfgName}
                                                            </td>
                                                            <td>
                                                                {datam.cfgValue}
                                                            </td>
                                                            <td>
                                                                {datam.cfgValue2}
                                                            </td>
                                                        </tr>
                                                        )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
    
                                </div>
                                : ''}
                            </div>
                            {publicParam && publicParam.length > 0 ? <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('公共请求参数')}>
                                    <span className={`flex-triangle ${expandListPub ? '': 'left'}`}></span>
                                    <h2>公共请求参数</h2>
                                </div>
                                {/* 列表内容 */}
                                {expandListPub ? <div className="ClaimList-content">
                                    {/* table标题 */}
                                    <div className="table-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>名称</th>
                                                    <th>类型</th>
                                                    <th>是否必须</th>
                                                    <th>示例值</th>
                                                    <th>默认值</th>
                                                    <th>描述</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {publicParam.map((datam: any, pindex: number) => {
                                                    return (
                                                        <tr key={pindex}>
                                                            <td>
                                                                {datam.paramName}
                                                            </td>
                                                            <td style={{width: 66}}>
                                                                <Link to='/typeFixed'>{datam.paramDatatype}</Link>
                                                            </td>
                                                            <td>
                                                                {datam.paramIsNecessary ? '必填': '选填'}
                                                            </td>
                                                            <td>
                                                                {datam.paramExampleValue}
                                                            </td>
                                                            <td>
                                                                {datam.paramDefaultValue}
                                                            </td>
                                                            <td>
                                                                {datam.paramDesc}
                                                            </td>
                                                        </tr>
                                                        )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
    
                                </div>: ''}
                            </div>: ''}
                            {businessParam && businessParam.length > 0 ? <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('业务请求参数')}>
                                    <span className={`flex-triangle ${expandListParams ? '': 'left'}`}></span>
                                    <h2>业务请求参数</h2>
                                </div>
                                {expandListParams ? <div className="ClaimList-content">
                                    <div className="table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>名称</th>
                                                <th>类型</th>
                                                <th>是否必须</th>
                                                <th>示例值</th>
                                                <th>默认值</th>
                                                <th>描述</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {businessParam.map((datam: any, bindex: number) => {
                                                return (
                                                    <tr key={bindex}>
                                                        <td>
                                                            {datam.paramName}
                                                        </td>
                                                        <td>
                                                            <Link to='/typeFixed'>{datam.paramDatatype}</Link>
                                                        </td>
                                                        <td>
                                                            {datam.paramIsNecessary ? '必填': '选填'}
                                                        </td>
                                                        <td>
                                                            {datam.paramExampleValue}
                                                        </td>
                                                        <td>
                                                            {datam.paramDefaultValue}
                                                        </td>
                                                        <td>
                                                            {datam.paramDesc}
                                                        </td>
                                                    </tr>
                                                    )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>: ''}
                            </div>: ''}
                            
                            {responseParams && responseParams.length > 0 ? <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('响应参数')}>
                                    <span className={`flex-triangle ${expandListResponse ? '': 'left'}`}></span>
                                    <h2>响应参数</h2>
                                </div>
                                { expandListResponse ? <div className="ClaimList-content">
                                    <div className="table-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>名称</th>
                                                    <th>类型</th>
                                                    <th>示例值</th>
                                                    <th>描述</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {responseParams.map((datam: any, rindex: number) => {
                                                    let goPage: any
                                                    if (datam.resparamModelId.trim() !== '' && datam.resparamModelId !== null) {
                                                        goPage = <Link to={`/customField/${datam.resparamModelId}/${datam.resparamName}/${datam.resparamDesc}/${menuRecord}`}>{datam.resparamDataType}</Link>
                                                    } else {
                                                        goPage = <Link to='/typeFixed'>{datam.resparamDataType}</Link>
    
                                                    }
                                                    return (
                                                        <tr key={rindex}>
                                                            <td>
                                                                {datam.resparamName}
                                                            </td>
                                                            <td>
                                                                {goPage}
                                                            </td>
                                                            <td>
                                                                {datam.resparamExampleValue}
                                                            </td>
                                                            <td>
                                                                {datam.resparamDesc}
                                                            </td>
                                                        </tr>
                                                        )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>: ''}
                            </div>: ''}
                            {codeDetail && codeDetail.length > 0 ? <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('请求示例')}>
                                    <span className={`flex-triangle ${expandListRequest ? '': 'left'}`}></span>
                                    <h2>请求示例</h2>
                                </div>
                                {expandListRequest ? <div className="tab-wrap" id="requestA">
                                    <TabsControl>
                                        {codeDetail.map((item: any, tindex: number) => {
                                            return (
                                                <div title={item.tabName} key={tindex}>
                                                    <Highlight className="js">
                                                        {item.content}
                                                    </Highlight>
                                                </div>
                                            )
                                        })}
                                    </TabsControl>
                            </div>: ''}
                            </div>: ''}
                            {responseCode && responseCode.length > 0 ? <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('响应示例')}>
                                    <span className={`flex-triangle ${expandListSample ? '': 'left'}`}></span>
                                    <h2>响应示例</h2>
                                </div>
                                {expandListSample ? <div className="tab-wrap">
                                    <TabsControl>
                                    {responseCode.map((item: any, sindex: number) => {
                                        return (
                                            <div title={item.tabName} key={sindex}>
                                                <Highlight className="js">
                                                    {item.content}
                                                </Highlight>
                                            </div>
                                        )
                                    })}
                                </TabsControl>
                            </div>: ''}
                            </div>: ''}
    
                            {errCode && errCode.length > 0 ? <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('异常示例')}>
                                    <span className={`flex-triangle ${expandListError ? '': 'left'}`}></span>
                                    <h2>异常示例</h2>
                                </div>
                                {expandListError ? <div className="tab-wrap">
                                    <TabsControl>
                                    {errCode.map((item: any, eindex: number) => {
                                        return (
                                            <div title={item.tabName} key={eindex}>
                                                <Highlight className="js">
                                                    {item.content}
                                                </Highlight>
                                            </div>
                                        )
                                    })}
                                    </TabsControl>
                                </div>: ''}
                            </div>: ''}
                            <div className="ClaimList-box">
                                <div className="ClaimList-title" onClick={() => this.toggleForm('API工具')}>
                                    <span className={`flex-triangle ${expandListApi ? '': 'left'}`}></span>
                                    <h2>API工具</h2>
                                </div>
                                {expandListApi ? <div className="tab-wrap">
                                    <Button className="btn-border"><Link to={`/apiTest/${apiId}/${projectId}`}>API测试工具</Link></Button>
                                    <Button className="btn-border" onClick={() => {this.sdkRun()}}>SDK下载</Button>
                                </div>: ''}
                            </div>
                            </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        changeMenu(data: any) {
            const action = changeMenu(data);
            dispatch(action);
        },
        menuStatus(data: boolean) {
            const action = menuStatus(data);
            dispatch(action);
        },
        storageId(data: any) {
            const action = storageId(data);
            dispatch(action);
        }
	}
}
export default connect(null, mapDispatchToProps)(TypeDetails);
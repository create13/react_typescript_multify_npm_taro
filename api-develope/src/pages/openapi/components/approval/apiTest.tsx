import React, { Component } from 'react'
import BoxHeader from '@/baseComponent/outBox/boxHeader'
import '@/static/sass/controllers/home.scss'
import '@/static/sass/controllers/apiTest.scss'
import {storageId } from '@/store/actionCreators'
import { connect } from 'react-redux'
import {getApiTest, getGiveData, getApiParams} from '@/api/index'
import { message } from 'antd';
import ReactJson from 'react-json-view'
class ApiTest extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
            apiData: {},
            selectObj: {},
            selectKey: 0,
            // apiName: ['json', 'xml'],
            // defaultRadio: false,
            paramsArray: [],
            defaultEnvironment: '',
            // defaultFormat: '',
            defaultApi: '',
            defaultApiName: '',
            // appKey: '',
            firstConnect: false,
            paramCount: null,
            backData: {},
            apiId: '',
            projectId: '',
            defaultKey: 0,
            defaultOption: '',
            paramObj: {}
        }
    }
    getParams (selectKey: number) {
        this.state.apiData.apis[selectKey].map((item: any, index:number) => {
            getApiParams({apiId: item.api_id}).then((apiRes: any) => {
                this.state.apiData.params[selectKey][index] = apiRes.data.params;
                this.setState({
                    apiData: this.state.apiData,
                    paramsArray: this.state.apiData.params[selectKey][this.state.defaultKey]
                })
            }).catch((err: any) => {
                console.log('err', err);
            })
        })
    }
    getApiTest (objData: any) {
        getApiTest(objData).then((res: any) => {
            if (Reflect.ownKeys(res.data).length > 0) {
                let apiId = '';
                let apiName = '';
                let apiLength = res.data.apis.length;
                for (let i = 0; i < apiLength; i++) {
                    res.data.apis[i].map((item: any, index:number) => {
                        if (objData.apiId === item.api_id) {
                            apiId = item.api_id;
                            apiName = item.api_name;
                            if (res.data.params[i][index] === null) {
                                getApiParams({apiId: objData.apiId}).then((apiRes: any) => {
                                    res.data.params[i][index] = apiRes.data.params;
                                }).catch((err: any) => {
                                    console.log('err', err);
                                })
                            }
                            // 在这里修复请求到所有params的数组值 而不是空

                            this.setState({
                                selectKey: i,
                                defaultKey: index,
                                defaultOption: item.api_name
                            })
                        }
                    })
                }
                this.setState({
                    apiData: res.data,
                    selectObj: res.data.modules[this.state.selectKey],
                    defaultEnvironment: res.data.environments[0].value,
                    // defaultFormat: this.state.apiName[0],
                    defaultApi: apiId,
                    defaultApiName: apiName,
                    // appKey:res.data.appKey,
                    paramCount: res.data.params[this.state.selectKey],
                    paramsArray: res.data.params[this.state.selectKey][this.state.defaultKey],
                });
            }
        }).catch((err: any) => {
            console.log('err', err)

        })
    }
    componentWillMount () {
        this.setState({
            apiId: this.props.match.params.apiId,
            projectId: this.props.match.params.projectId
        });
        let objData = {
            apiId: this.props.match.params.apiId,
            projectId: this.props.match.params.projectId
        }
        this.getApiTest(objData);
        // this.setState({
        //     defaultRadio: true
        // })
        this.props.storageId('seeSample');
    }
    componentDidMount () {
    }
    changeMenu (menu: any, index: number) {
        this.setState({
            selectObj: menu,
            selectKey: index,
            defaultKey: 0,
            backData: {},
            paramObj: {},
            paramCount: this.state.apiData.params[index],
            // paramsArray: []
        })
        this.getParams(index);

    }
    changeSelect(event: any) {
        this.setState({
            defaultEnvironment: event.target.value
        })
    }
    // changeRadio (event: any) {
    //     this.setState({
    //         defaultRadio: false,
    //         defaultFormat: event.target.value
    //     })
    // }
    changeApiName (event: any) {
        let num = event.target.value.indexOf('&');
        let defaultApi = event.target.value.substring(0, num);
        let numName = event.target.value.indexOf('#');
        let defaultKey = event.target.value.substring(num + 1, numName);
        let defaultApiName = event.target.value.substring(numName + 1);
        this.setState({
            defaultApi,
            defaultKey,
            defaultApiName,
            backData: {},
            paramObj: {},
            paramCount: this.state.apiData.params[this.state.selectKey]
        })
        this.getParams(this.state.selectKey);
        // this.getApiTest({apiId: defaultApi, projectId:this.state.projectId})
    }
    // blurInput (event: any, item: any, index:number) {
    //     let obj:any = {};
    //     let arrayObj:any = [];
    //     obj.name = item.param_name
    //     obj.value = event.target.value
    //     obj.is_necessary = item.is_necessary
    //     obj.key = index
    //     arrayObj.push(obj);
    //     if (!this.state.firstConnect) {
    //         this.setState({
    //             paramsArray: this.state.paramsArray.concat(arrayObj),
    //             firstConnect: true
    //         })
    //     } else {
    //         let goIn = false;
    //         this.state.paramsArray.map((item: any, index: number) => {
    //             if (item.name === arrayObj[0].name) {
    //                 item.value = arrayObj[0].value
    //                 goIn = true;
    //             }
    //         })
    //         if (!goIn) {
    //             this.setState({
    //                 paramsArray: this.state.paramsArray.concat(arrayObj)
    //             })
    //         }
    //     }
    // }
    changeValue (event: any, item: any) {
        let acceptArray:any[] = [];
        this.state.apiData.params[this.state.selectKey][this.state.defaultKey].forEach((element: any, index: number) => {
            if (element.param_name === item.param_name) {
                element.default_value = event.target.value;
            }
            // let objData: any = {};
            // objData.name = element.param_name;
            // objData.value = element.default_value;
            // objData.is_necessary = element.is_necessary
            // acceptArray.push(objData);
        });
        // console.log('acceptArray', acceptArray);
        this.setState({
            apiData: this.state.apiData
            // paramsArray: acceptArray
        });
    }
    submitTest() {
        let {defaultEnvironment, defaultApiName, paramsArray} = this.state;
        let obj:any = {};
        let necessaryParam = paramsArray.filter((item: any, index: number) => {
            return item.is_necessary === '1'
        })
        let paramCount = this.state.paramCount[this.state.defaultKey].filter((item: any, index: number) => {
            return item.is_necessary === '1'
        })
        let paramObj:any = {};
        let passCheck = false;
        let insideObj:any = {};
        let warnSpace = false;
        paramsArray.map((item:any, index:number) => {
            if (item.is_necessary === '1' && (item.default_value === '' || item.default_value === null || item.default_value.trim() === '')) {
                if (!warnSpace) {
                    message.info('请填写必填字段');
                }
                warnSpace = true;
                return;
            } else if (necessaryParam.length !== paramCount.length) {
                if (!warnSpace) {
                    message.info('请填写必填字段');
                }
                warnSpace = true;
                return;
            } else {
                paramObj.apiName = defaultApiName;
                paramObj.serverUrl = defaultEnvironment;
                insideObj[item.param_name] = item.default_value;
                passCheck = true;
            }
        })
        if (Object.keys(insideObj).length !== this.state.paramCount[this.state.defaultKey].length) {
            this.state.paramCount[this.state.defaultKey].map((item: any, index:number) => {
                if (!(Object.keys(insideObj).includes(item.param_name))) {
                    insideObj[item.param_name] = '';
                }
            })
        }
        paramObj.parameters = insideObj;
        if (passCheck && !warnSpace) {
            getGiveData(paramObj).then((res:any) => {
                if (res.data.data) {
                    // res.data.data = JSON.stringify(res.data.data);
                    this.setState({
                        paramObj: paramObj,
                        backData: res.data.data
                    });
                } else if (res.data) {
                    // res.data = JSON.stringify(res.data);
                    this.setState({
                        paramObj: paramObj,
                        backData: {xml: res.data}
                    });
                }
            }).catch((err: any) => {
                this.setState({
                    paramObj: paramObj,
                    backData: {error: err}
                });
            })
        }
    }
    copyText (idName: string) {
        let getCopy = document.getElementsByClassName(idName)[0].innerHTML
        let inputVlue = document.createElement('input');
        inputVlue.value = getCopy;
        document.body.appendChild(inputVlue);
        inputVlue.select();
        document.execCommand("copy");
        inputVlue.remove();
        message.info('复制成功');
    }
    render() {
        let {apiData, selectObj, selectKey, backData, defaultKey, defaultOption, paramObj} = this.state
        return (
            <div className="api-container">
                <div className="ant-layout-header">
                    <BoxHeader />
                </div>
                {Reflect.ownKeys(apiData).length > 0 ? <div className="apitest-content">
                    <div className="content-left">
                        <div className="menu-content">
                            <ul className="menu">
                                <li>
                                    <div>
                                        <div>常用工具</div>
                                        <ul>
                                            {apiData.modules.map((item: any, index: number) => {
                                                return (
                                                    <li key={index} onClick={() => {this.changeMenu(item, index)}}><a className={selectObj && selectObj.module_id === item.module_id ? 'selected': ''}>{item.module_name}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="right-content">

                        
                            <div className="main">
                                <div className="main-header">注：系统分配AppKey只能调用基础API，增值API需要填入自己申请的AppKey </div>
                                <div className="main-content">
                                    <div className="form-wrap left-field">
                                        <dl>
                                            <dt>
                                                <label>环境：</label>
                                            </dt>
                                            <dd>
                                                <select onChange={(e) => {this.changeSelect(e)}}>
                                                    {apiData.environments.map((item: any, index: number) => {
                                                        return (
                                                            <option key={index} value={item.value}>{item.key}</option>
                                                        )
                                                    })}
                                                </select>
                                            </dd>
                                        </dl>
                                        {/* <dl>
                                            <dt className="mandatory">
                                                <label>返回格式:</label>
                                            </dt>
                                            <dd>
                                                {apiName.map((item: any, index: number) => {
                                                    if (index === 0 && defaultRadio) {
                                                        return (
                                                            <label key={index}>
                                                                <input type="radio" name='radio' value={item} onChange={(e) => {this.changeRadio(e)}} checked />
                                                                <span>{item}</span>
                                                            </label>
                                                        )
                                                    } else {
                                                        return (
                                                            <label key={index}>
                                                                <input type="radio" value={item} onChange={(e) => {this.changeRadio(e)}} name='radio' />
                                                                <span>{item}</span>
                                                            </label>
                                                        )
                                                    }

                                                })}
                                            </dd>
                                        </dl> */}
                                        <dl>
                                            <dt>
                                                <label>API名称:</label>
                                            </dt>
                                            <dd>
                                                <select onChange={(e) => {this.changeApiName(e)}}>
                                                    {apiData.apis[selectKey].map((item: any, index: number) => {
                                                        if (defaultOption === item.api_name) {
                                                            return (
                                                                <option key={index} selected value={`${item.api_id}&${index}#${item.api_name}`}>{item.api_name}</option>
                                                            )
                                                        } else {
                                                            return (
                                                                <option key={index} value={`${item.api_id}&${index}#${item.api_name}`}>{item.api_name}</option>
                                                            )
                                                        }
                                                    })}
                                                </select>
                                            </dd>
                                        </dl>
                                        {apiData.params[selectKey][defaultKey]!== null && apiData.params[selectKey][defaultKey].length > 0 && apiData.params[selectKey][defaultKey].map((item: any, index: number) => {
                                            if (item.param_name === 'method') {
                                                return (
                                                    <dl key={index}>
                                                        <dt className={item.is_necessary === '1' ? 'mandatory': ''}>
                                                            <label>{item.param_name}: </label>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <input type="text" value={item.default_value} readOnly/>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                    )
                                            } else {
                                                return (
                                                    <dl key={index}>
                                                        <dt className={item.is_necessary === '1' ? 'mandatory': ''}>
                                                            <label>{item.param_name}: </label>
                                                        </dt>
                                                        <dd>
                                                            <span>
                                                                <input type="text" value={item.default_value} onChange={(e) => {this.changeValue(e, item)}}/>
                                                            </span>
                                                        </dd>
                                                    </dl>
                                                )
                                            }
                                        })}
                                        {/* <dl>
                                            <dt>
                                                <label>AppKey:</label>
                                            </dt>
                                            <dd>
                                                <span>
                                                    <input type="text" value={apiData.appKey || ''} readOnly/>
                                                </span>
                                            </dd>
                                        </dl> */}
                                        <dl>
                                            <dt>
                                                <label>&nbsp;</label>
                                            </dt>
                                            <dd>
                                                <a className="btn" onClick={() => {this.submitTest()}}>提交测试</a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="result-wrap">
                                        <div className="form-wrap special">
                                            <dl>
                                                <dt>
                                                    <label>请求：</label>
                                                </dt>
                                                <dd> 
                                                    <div className="panel">
                                                        <div className="panel-header">
                                                            {/* <select>
                                                                <option>请选择</option>
                                                            </select> */}
                                                            <a className="btn" onClick={() => {this.copyText('requestContent')}}>Copy</a>
                                                        </div>
                                                        <div className="panel-content requestContent">
                                                            <ReactJson src={paramObj} name={false} />
                                                            
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <label>响应：</label>
                                                </dt>
                                                <dd> 
                                                    <div className="panel">
                                                        <div className="panel-header">
                                                            <span>&nbsp;</span>
                                                            <a className="btn" onClick={() => {this.copyText('responseContent')}}>Copy</a>
                                                        </div>
                                                        <div className="panel-content responseContent">
                                                        <ReactJson src={backData} name={false} />
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>: <div className="prompt-info">服务器开小差了，请稍后再试吧~</div>}
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
    }
}
export default connect(null, mapDispatchToProps)(ApiTest);

import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getModelParams, getApiMenu, getModel } from '@/api'
import { changeMenu, menuStatus} from '@/store/actionCreators'
class CustomField extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
             listDetail: [],
             detailInfo: true,
             titleData: {}
        }
    }
    componentWillReceiveProps (nextProps: any) {
        if (nextProps.match.params.customId !== this.props.match.params.customId) {
            let customId = nextProps.match.params.customId;
            this.getModelParams(customId);
            let titleData: any = {};
            let {customType, customDes} = nextProps.match.params;
            titleData.menuSecond = customType;
            titleData.modelDesc = customDes;
            this.setState({
                titleData
            })
        }
    }
    getModelParams (customId: any) {
        getModelParams({modelId: customId}).then((res: any) => {
            if (res.data.length > 0) {
                this.setState({
                    listDetail: res.data
                })
            } else {
                this.setState({
                    listDetail: []
                })
            }
        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    componentWillMount () {
        this.props.menuStatus(true);
        localStorage.setItem('MenuName', this.props.match.params.moduleName);
        let drawMenu:any = localStorage.getItem('filterParams');
        let getMenu = localStorage.getItem('MenuName');
        drawMenu = JSON.parse(drawMenu);
        let menuList = [];
        let menuArray = [];
        let firstId:any = {};
        if (drawMenu.length > 0) {
            let objOuter: any = {};
            if (drawMenu[0].modelName) {
                firstId = {api: drawMenu[0].id};
                // this.props.storageId(firstId);
                for (let project of drawMenu) {
                    objOuter.firstMenu = this.props.match.params.moduleName;
                    let obj: any = {};
                    let {modelName: menuSecond, id: menukey, modelDesc} = project;
                    obj.menuSecond = menuSecond;
                    obj.menuDes = modelDesc;
                    obj.linkRoute = `/customField/${menukey}/${menuSecond}/${modelDesc}/${getMenu}`
                    obj.menukey = menukey;
                    if (this.props.match.params.customId === menukey) {
                        obj.firstSelect = true;
                        let titleData: any = {};
                        titleData.menuSecond = menuSecond;
                        titleData.modelDesc = modelDesc;
                        this.setState({
                            titleData
                        })
                    } else {
                        obj.firstSelect = false;
                    }
                    menuArray.push(obj);
                    objOuter.menuArray = menuArray;
                }
            }
            menuList.push(objOuter);
        }
        this.props.changeMenu(menuList);
        let customId = this.props.match.params.customId;
        this.getModelParams(customId);
    }
    toggleForm = (data: string) => {
        const { detailInfo } = this.state;
        let {customType} = this.props.match.params;
        if (customType === data) {
            this.setState({
                detailInfo: !detailInfo
            });
        }
    };
    render() {
        let {customType, customDes, moduleName} = this.props.match.params;
        let {listDetail, detailInfo, titleData} = this.state;
        return (
            <div className="container">
                <div className="page-container">
                <div className="ClaimList-wrap"> 
                    <h3>{titleData.menuSecond}</h3>
                    <div>{titleData.modelDesc}</div>
                    <div className="ClaimList-box">
                        {/* 列表内容 */}
                        <div className="ClaimList-title"  onClick={() => this.toggleForm(customType)}>
                            {/* 箭头 */}
                            <span className={`flex-triangle ${detailInfo ? '': 'left'}`}></span>
                            <h2>{customType}</h2>
                        </div>
                        {detailInfo ? <div className="ClaimList-content">
                            {/* table标题 */}
                            <div className="table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>名称</th>
                                            <th>数据类型</th>
                                            <th>示例值</th>
                                            <th>描述</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listDetail.map((datam: any, lindex: number) => {
                                            let goPage: any
                                            if (datam.resparamModelId.trim() !== '' && datam.resparamModelId !== null) {
                                                goPage = <Link to={`/customField/${datam.resparamModelId}/${datam.resparamName}/${datam.resparamDesc}/${moduleName}`}>{datam.resparamDataType}</Link>
                                            } else {
                                                goPage = <Link to='/typeFixed'>{datam.resparamDataType}</Link>

                                            }
                                            return (
                                                <tr key={lindex}>
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
        menuStatus(data: boolean) {
            const action = menuStatus(data);
            dispatch(action);
        }
	}
}
export default connect(null, mapDispatchToProps)(CustomField);

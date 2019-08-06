import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import ClaimList from './claimList';
import { getApiList, getModel } from '@/api'
import { connect } from 'react-redux'
import { changeMenu, menuStatus } from '@/store/actionCreators'
class ApiCenter extends Component<any, any> {
    constructor(props: any) {
        super(props)
        
        this.state = {
            codeDetail: [],
            tableList: [],
            moduleList: [],
            moduleId: null,
            menuRecord: ''
        }
    }
    componentWillReceiveProps (nextProps: any) {
        if (nextProps.match.params.apiId !== this.props.match.params.apiId) {
            let apiId = nextProps.match.params.apiId;
            this.getModelList(apiId);
            this.setState({
                moduleId: apiId
            })
        }
    }
    getModelList (moduleId: any) {
        getModel({moduleId: moduleId}).then((res: any) => {
            if (Object.keys(res.data).length > 0) {
                if (res.data.apis.length > 0) {
                    this.setState({
                        tableList: res.data.apis
                    })
                } else {
                    this.setState({
                        tableList: []
                    })
                }
                if (res.data.models.length > 0) {
                    let filterParams = res.data.models.filter((item: any) => {
                        return item.id !== ''
                    })
                    let outerArray:any =[];
                    filterParams.forEach((element: any) => {
                        let obj: any = {};
                        obj.modelName = element.modelName;
                        obj.id = element.id;
                        obj.modelDesc = element.modelDesc;
                        outerArray.push(obj);
                    });
                    localStorage.removeItem('filterParams');
                    localStorage.setItem('filterParams',JSON.stringify(outerArray));
                    this.setState({
                        moduleList: res.data.models
                    })
                } else {
                    this.setState({
                        moduleList: []
                    })
                }
            }

        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    componentWillMount () {
        this.props.menuStatus(true);
        let moduleId = this.props.match.params.apiId;
        this.setState({
            moduleId
        })
        getApiList().then((res: any) => {
            let menuList = [];
            let menuArray = [];
            let firstId:any = {};
            if (res.data.length > 0) {
                for (let project of res.data) {
                    let objOuter: any = {};
                    let { projectName: menuFirst } = project.project;
                    objOuter.menuFirst = menuFirst;
                    this.setState({
                        menuRecord: menuFirst
                    })
                    let modules = project.modules;
                    firstId = {api: modules[0].id};
                    // this.props.storageId(firstId);
                    for (let single of modules) {
                        let obj: any = {};
                        let {moduleName: menuSecond, id: menukey} = single;
                        obj.menuSecond = menuSecond;
                        obj.linkRoute = `/apiDocument/${menukey}`
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
        this.getModelList(moduleId);
    }
    render() {
        let {codeDetail, tableList, moduleList, menuRecord} = this.state;
        return (
            <div className="container">
                <div className="page-container">
                    {/* 列表收缩组件 */}
                    <ClaimList tableList={tableList} moduleList={moduleList}  codeDetail={codeDetail} menuRecord={menuRecord} />
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
export default connect (null, mapDispatchToProps)(ApiCenter)

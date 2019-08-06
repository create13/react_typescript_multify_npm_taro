import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//表格收缩组件
class ClaimList extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            apiList: true,
            dataStructure: true
        }
    }
    toggleForm = (data: string) => {
        const { apiList, dataStructure } = this.state;
        switch (data) {
            case '接口列表':
                this.setState({
                    apiList: !apiList
                });
                break;
            case '数据结构':
                this.setState({
                    dataStructure: !dataStructure
                });
                break;
        }
    };
    // 渲染全部
    renderAllList=() => {
        let {tableList, codeDetail, moduleList, menuRecord} = this.props;
        let {apiList, dataStructure} = this.state;
        return (
            <div className="">
                {/* 列表内容 */}
                <div className="ClaimList-box">
                    <div className="ClaimList-title" onClick={() => this.toggleForm('接口列表')}> <span className={`flex-triangle ${apiList ? '': 'left'}`}></span>
                        <h2>接口列表</h2>
                    </div>
                    {tableList && tableList.length > 0 && apiList ? <div className="ClaimList-content">
                        <div className="table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>接口名称</th>
                                        <th>接口描述</th>
                                        <th>是否需要授权</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableList.map((datam: any, mindex: number) => {
                                        return (
                                            <tr key={datam.id}>
                                                <td onClick={() => {this.storageInfo(datam)}}>
                                                    <Link to={`/typeDetails/${datam.id}/${datam.apiModuleId}`}>{datam.apiName}</Link>
                                                </td>
                                                <td>
                                                    {datam.apiDesc}
                                                </td>
                                                <td>
                                                    {datam.apiIsNeedAuth ? '是': '否'}
                                                </td>
                                            </tr>
                                            )
                                    })}
                            </tbody>
                            </table>
                        </div>
                    </div>
                        : ''}
                    <div className="ClaimList-title" onClick={() => this.toggleForm('数据结构')}> <span className={`flex-triangle ${dataStructure ? '': 'left'}`}></span>
                        <h2>数据结构 </h2>
                    </div>
                    {moduleList && moduleList.length > 0 && dataStructure ? <div className="ClaimList-content">
                        <div className="table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>名称</th>
                                            <th>描述</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {moduleList.map((datam: any, mindex: number) => {
                                            if (datam.modelDesc === '') {
                                                datam.modelDesc = ' ';
                                            }
                                            return (
                                                <tr key={mindex}>
                                                    <td>
                                                        <Link to={`/customField/${datam.id}/${datam.modelName}/${datam.modelDesc}/${menuRecord}`}>{datam.modelName}</Link>
                                                    </td>
                                                    <td>
                                                        {datam.modelDesc}
                                                    </td>
                                                </tr>
                                                )
                                        })}
                                </tbody>
                                </table>
                            </div>
                    </div>
                        : ''}
                    {tableList.length === 0 && moduleList.length === 0 ? '后端数据返回都为空或者服务器开小差了~': ''}
                </div>
            </div>
        );
    }
    storageInfo (info: any) {
        let passObj: any = {};
        passObj.menuSecond = info.apiName;
        passObj.menuDes = info.apiDesc;
        passObj.menuDetail = info.apiDetail;
        localStorage.setItem('typeData', JSON.stringify(passObj));
    }
    //展开、收起 功能按钮
    renderList() {
        return this.renderAllList()
    }
    render() {
        return (
            <div className="ClaimList-wrap"> 
                {this.renderList()}
            </div>
        )
    }
}
export default ClaimList;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Input, Avatar } from 'antd';
import { connect } from 'react-redux'
import {defaultSelect, storageId } from '@/store/actionCreators'
import { getApiList, getErrorCodesTree } from '@/api'
import backgroundImg from '@/static/image/nav_logo.png';
const Search = Input.Search;

class boxHeader extends Component<any, any> {
    state = {
        current: '',
        personName: '劳勤开放平台',
        navigatorMenu: [{ icons: 'mail', title: '文档中心', linkAbout: '/' }]
    }
    handleClick(e: any) {
        this.setState({
            current: e.key,
        });
    }
    getApiList() {
        let apiId:string = '';
        let errCode:string = '';
        let navigatorMenu = [
            { icons: 'mail', title: '文档中心', linkAbout: '/' },
            { icons: 'appstore', title: 'API文档', linkAbout: '/apiDocument'},
            { icons: 'setting', title: '类型说明', linkAbout: '/typeFixed'},
            { icons: 'calendar', title: '错误码', linkAbout: '/errorCode' }
        ]
        Promise.all([getApiList(), getErrorCodesTree()]).then((res: any) => {
            if (res[0].data.length > 0) {
                apiId = res[0].data[0].modules[0].id;
            }
            if (res[1].data.length > 0) {
                errCode = res[1].data[0].childrens[0].errcodeCategoryPid;
            }
            navigatorMenu[1].linkAbout = `${navigatorMenu[1].linkAbout}/${apiId}`;
            navigatorMenu[3].linkAbout = `${navigatorMenu[3].linkAbout}/${errCode}`
            this.setState({
                navigatorMenu
            })
            localStorage.setItem('navigatorMenu', JSON.stringify(navigatorMenu));
        }).catch((err: any) => {
            let navigatorMenu = localStorage.getItem('navigatorMenu');
            if (navigatorMenu) {
                
                navigatorMenu = JSON.parse(navigatorMenu);
                this.setState({
                    navigatorMenu
                })
            } else {
                console.log('err', err)
            }
        })
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.defaultId.length > 0) {
            if (nextProps.defaultId[0] === 'sdk') {
                this.setState({
                    current: this.state.navigatorMenu[0].icons
                })
            } else if (nextProps.defaultId[0] === 'seeSample') {
                if (this.state.navigatorMenu.length < 2) {
                    let navigatorMenus:any = localStorage.getItem('navigatorMenu');
                    if (navigatorMenus) {
                        navigatorMenus = JSON.parse(navigatorMenus);
                        this.setState({
                            current: navigatorMenus[1].icons
                        })
                    }
                } else {
                    this.setState({
                        current: this.state.navigatorMenu[1].icons
                    })
                }
            }
        }
    }
    componentWillMount () {
        this.getApiList();
    }
    componentDidMount() {
        this.setState({
            current: this.state.navigatorMenu[0].icons
        })
    }
    clearMenu(data: any, index: number) {
        this.props.defaultSelect(true);
        this.props.storageId([]);
    }
    render() {
        let { personName, navigatorMenu, current } = this.state;
        return (
            <div className="box-header">
                <div className="layout-header">
                    <div className="left-content" style={{ width: 226 }}>
                        <img src={`../${backgroundImg}`} />
                        <span className="person-info" style={{fontSize:20,fontWeight:'bold'}}>{personName}</span>
                    </div>
                    <Menu onClick={(e) => { this.handleClick(e) }} selectedKeys={[current]} mode="horizontal" style={{ background:'transparent',fontSize: 18,fontWeight:'bold',marginLeft:0 }}>
                    {navigatorMenu.map((navigator, nIndex) => (
                        <Menu.Item key={navigator.icons} onClick={() => {this.clearMenu(navigator, nIndex)}}>
                            <Link to={navigator.linkAbout}>
                            {navigator.title}
                            </Link>
                        </Menu.Item>
                    ))}
                    </Menu>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        defaultId: state.globalPromp.defaultId
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        defaultSelect(status: boolean) {
            const action = defaultSelect(status);
            dispatch(action);
        },
        storageId(status: boolean) {
            const action = storageId(status);
            dispatch(action);
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(boxHeader)

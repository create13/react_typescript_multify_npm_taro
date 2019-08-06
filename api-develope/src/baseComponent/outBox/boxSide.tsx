import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom'
import '@/static/sass/controllers/home.scss'
import { Menu } from 'antd';
import { connect } from 'react-redux'
import { addList, defaultSelect, storageId } from '@/store/actionCreators'
const SubMenu = Menu.SubMenu;
class boxSide extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    state = {
        firstChoose: true,
        apiAbout: 0,
        selectLine: false,
        menuDetail: {menukey: '1'},
        chooseStatus: true,
        secondDetail: {menukey: '-'}
    };
    componentWillReceiveProps(nextProps: any) {
        nextProps.menuList.forEach((item: any, index: number) => {
            if (nextProps.defaultSelect && item.menuFirst) {
                this.cacelChoose({}, 0);
            } else if (nextProps.defaultSelect && item.firstMenu) {
                let secondDetail = {menukey: '-'};
                this.setState({
                    secondDetail
                });
            } else if (nextProps.defaultId.length > 0 && item.menuType) {
                this.cacelChoose({}, 1);
                let menuDetail = item.menuArray[2];
                this.setState({
                    menuDetail
                })
                this.props.storageId([]);
            }
        })
    }
    addMenuList (menu: any) {
        this.props.addMenu(menu);
    }
    cacelChoose(data: any, indexs: number) {
        if (indexs !== 0) {
            this.setState({
                chooseStatus: false
            })
            this.props.defaultActions(false);
        } else {
            this.setState({
                chooseStatus: true
            })
        }
        this.setState({
            menuDetail: data
        })
    }
    defaultStatus (menu: any, index: number) {
        this.props.menuList.forEach((item: any, index: number) => {
            item.menuArray.forEach((menu: any, indexs: number) => {
                menu.firstSelect = false;
            })
        })
        this.setState({
            firstChoose: false,
            secondDetail: menu
        })
        this.props.defaultActions(false);
        localStorage.setItem('typeData', JSON.stringify(menu));
    }
    render() {
        let { menuList } = this.props;
        let { firstChoose, menuDetail, chooseStatus, secondDetail } = this.state;
        return (
            <HashRouter>
                <div className="box-side">
                    <ul className="menu">
                        <li>
                            {menuList.map((item: any, index: number) => {
                                if (item.menuFirst && item.menuFirst !== '') {
                                    return (
                                        <div key={index + 'submenu'}>
                                            <div>{item.menuFirst}</div>
                                            <ul>
                                            {item.menuArray.map((menu: any, indexs: number) => {
                                                return (
                                                    <li key={menu.menukey} onClick={() => {this.cacelChoose(menu, indexs)}}>
                                                        <Link to={menu.linkRoute} className={chooseStatus && indexs === 0 ? 'selected': (menuDetail && menuDetail.menukey === menu.menukey) ? 'selected': ''}>{menu.menuSecond}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        </div>
                                    )
                                } else if (!item.menuFirst && !item.firstMenu) {
                                    return (
                                        <div key={index + 'submenu'}>
                                            <ul>
                                            {item.menuArray.map((menu: any, indexs: number) => {
                                                return (
                                                    <li key={menu.menukey} onClick={() => {this.cacelChoose(menu, indexs)}}>
                                                        <Link to={menu.linkRoute} className={chooseStatus && indexs === 0 ? 'selected': (menuDetail && menuDetail.menukey === menu.menukey) ? 'selected': ''}>{menu.menuSecond}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        </div>
                                    )
                                } else if (item.firstMenu) {
                                    return (
                                        <div key={index + 'submenu'}>
                                            <div>{item.firstMenu}</div>
                                            <ul>
                                                {item.menuArray.map((menu: any, indexs: number) => {
                                                    return (
                                                        <li key={menu.menukey} onClick={() => {this.defaultStatus(menu, indexs)}}>
                                                            <Link to={menu.linkRoute} className={menu.firstSelect ? 'selected': (secondDetail && secondDetail.menukey === menu.menukey) ? 'selected': ''}>
                                                                <p>{menu.menuSecond}</p>
                                                                <p>{menu.menuDes}</p>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                    </div>
                                    )
                                }
                            })}
                        </li>
                    </ul>
                </div>
            </HashRouter>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        menuList: state.globalPromp.menuList,
        defaultId: state.globalPromp.defaultId,
        defaultSelect: state.globalPromp.selectFirst
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        addMenu(data: any) {
            const action = addList(data);
            dispatch(action);
        },
        defaultActions(status: boolean) {
            const action = defaultSelect(status);
            dispatch(action);
        },
        storageId(data: any) {
            const action = storageId(data);
            dispatch(action);
        }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(boxSide);
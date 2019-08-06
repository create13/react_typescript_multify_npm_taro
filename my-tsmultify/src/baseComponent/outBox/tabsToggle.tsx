import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Icon } from 'antd';
import { Link } from 'react-router-dom'
import {delList} from '@/store/actionCreators'
import Contextmenu from 'contextmenu'
import global from 'global'
import '../../static/css/contextmenu.scss'
const TabPane = Tabs.TabPane;
class tabsToggle extends Component<any, any> {
	newTabIndex: number;
	[k: string]: any
	constructor(props: any) {
		super(props)
		this.state = {
			activeKey: null,
			activeStatus: false,
			listData: props.listData,
			x: 0,
			y: 0,
			states: false,
			objs: {
				obj: null,
				evt: null,
				title: "",
				items: [],
				before: function() { return { } },
				complete: function() {  },
				callback: function() {  }
			}
		}
		this.newTabIndex = 0;
		// this.add = this.add.bind(this);
		// this.remove = this.remove.bind(this);
		// this.onEdit = this.onEdit.bind(this);
		// this.onChange = this.onChange.bind(this);
		this.handleClick = 	this.handleClick.bind(this);
	}
	componentWillMount () {
		if (this.state.listData.length > 0) {
			this.setState({
				activeKey:this.state.listData[this.state.listData.length - 1].menukey
			})
		}
	}
	// console.log('this.state.activeKey', this.state.activeKey);
	// onChange (activeKey: string) {
	// 	console.log('activeKey', activeKey)
	// 	this.setState({activeKey});
	// };
	// onEdit (targetKey: any, action: any) {
	// 	this[action](targetKey);
	// };

	// add () {
	// 	const panes = this.state.listData;
	// 	const activeKey = `newTab${this.newTabIndex++}`;
	// 	panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
	// 	this.setState({ panes, activeKey });
	// };
	// remove (targetKey: string) {
	// 	let activeKey = this.state.activeKey;
	// 	let lastIndex: number = 0;
	// 	this.state.listData.forEach((pane: any, i: number) => {
	// 		if (pane.menukey === targetKey) {
	// 			lastIndex = i - 1;
	// 		}
	// 	});
	// 	const delData = this.state.listData.filter((pane: any) => pane.menukey === targetKey);
	// 	const panes = this.state.listData.filter((pane: any) => pane.menukey !== targetKey);
	// 	if (panes.length && activeKey === targetKey) {
	// 		if (lastIndex >= 0) {
	// 			activeKey = panes[lastIndex].menukey;
	// 		} else {
	// 			activeKey = panes[0].menukey;
	// 		}
	// 	}
	// 	this.setState({ listData: panes, activeKey });
	// 	this.props.deleteTabs(delData[0]);
	// };
	componentWillUpdate(nextProps: any, nextState: any) {
		if (!nextState.activeStatus) {
			if (Object.keys(nextProps.chooseMenu).length > 0) {
				let activeData = nextState.listData.filter((item: any) => {
					return item.menukey === nextProps.chooseMenu.menukey
				})
				if (Object.keys(activeData).length > 0) {
					nextState.activeKey = activeData[0].menukey;
				} else {
					nextState.activeKey = nextProps.listData[nextProps.listData.length - 1].menukey
				}
			}
		} else {
			console.log('active true');
		}
		nextState.listData = nextProps.listData;
	}
	handleClick(evt: any, key: string) {
        evt.preventDefault();
        var _this = this;
        evt.persist();
        this.setState({
            states: true,
            objs: {
                obj: evt.target,
                evt: evt,
                items: [{
                    items: [{ 
                        code: 'DASD', label: '关闭到右侧', icon: <global.IconFont type="icon-com-bianji" />, key, items: [{
                            items: [{ 
                                code: 'DASD', label: '关闭到右侧', icon: <global.IconFont type="icon-com-bianji" />, key,items: [], complete: function(data: any) {
                                    _this.setState({
                                        states: false
                                    });
                                } 
                            }, { 
                                code: 'DDDD', label: '删除', icon: <global.IconFont type="icon-com-shanchu2" />, items: [], complete: function() {
                                    _this.setState({
                                        states: false
                                    });
                                } 
                            }]
                        }], complete: function(data: any) { } 
                    }, { 
                        code: 'DDDD', label: '删除', icon: <global.IconFont type="icon-com-shanchu2" />, items: [], complete: function() {
                            _this.setState({
                                states: false
                            });
                        } 
                    }]
                }, {
                    items: [{ 
                        code: 'DASD', label: '增加', icon: <global.IconFont type="icon-com-zengjia" />, complete: function(data: any) {
                            window.alert(data);
                            _this.setState({
                                states: false
                            });
                        } 
                    }, { 
                        code: 'DDDD', label: '打印', icon: <global.IconFont type="icon-sys-sub-sub-zidingyiqianqia" />, complete: function() {
                            _this.setState({
                                states: false
                            });
                        } 
                    }]
                }],
                before: function(data: any) {
                    return { hides: ['qwewq', 'dsadsa'], invalids: ['dsadsa', 'cccccc'] }
                },
                complete: function() { },
                callback: function() {
                    _this.setState({
                        states: false
                    });
                }
            }
        });
	}
	delTab (key: string) {
		this.props.deleteTabs(key);
		console.log('this.props.chooseMenu', this.props.chooseMenu);
		this.props.history(this.props.chooseMenu.linkRoute);
	}
	changeTabs (tab: string) {
		this.setState({
			activeKey: tab,
			activeStatus: true
		});
	}
	render() {
		let { listData, activeKey } = this.state;
		let tabsData = null;
		const showContext = this.state.states ? <Contextmenu.Init obj={this.state.objs.obj} evt={this.state.objs.evt} title={this.state.objs.title} items={this.state.objs.items} before={this.state.objs.before} complete={this.state.objs.complete} callback={this.state.objs.callback} />: null
		if (listData && listData.length > 0) {
			tabsData = (
				<div className="square-title">
					<Icon type="left" className="center-icon" />
					{listData.map((list: any, lindex: number) => {
						return (
							<div key={list.menukey} onContextMenu={(e) => {this.handleClick(e, list.menukey)}} onClick={() => {this.changeTabs(list.menukey)}} className={`title-menu ${activeKey === list.menukey ? 'active': ''}`}>
								<Link to={`${list.linkRoute}`}>{list.menuSecond}</Link>
								<Icon type="close" onClick={() => {this.delTab(list)}} />
							</div>
						)
					})}
					<Icon type="right" className="center-icon" />
					{/* <Tabs hideAdd onChange={this.onChange} activeKey={activeKey ? activeKey :listData[listData.length - 1].menukey} onTabClick={this.handleClick} type="editable-card" className="title-menu" onEdit={this.onEdit}>
						{listData.map((list: any, lindex: number) => {
							return (
								<TabPane key={list.menukey} forceRender={true} tab={<Link to={`${list.linkRoute}`}>{list.menuSecond}</Link>}></TabPane>
							)
						})}
					</Tabs> */}
					{/* <div onContextMenu={this.handleClick.bind(this)}>点击出现右键菜单</div> */}
					{showContext}
				</div>
			)
		} else {
			tabsData = '';
		}
		return (
			<div>
				{tabsData}
			</div>
		)
	}
}
const mapStateToProps = (state: any) => {
	return {
		listData: state.operationList.listData,
		chooseMenu:state.operationList.chooseMenu
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		deleteTabs (obj: any) {
			const action = delList(obj);
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(tabsToggle)

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import '@/static/css/boxContent.scss'
class BoxContent extends Component<any, any> {
	constructor(props: object) {
		super(props)
		this.state = {
		}
	}
	render() {
		let {reduxStatus, routes} = this.props;
		return (
			<div className="box-content">
					<Switch>
						{routes.map((route: any, index: number) => {
						if (route.exact) {
							return (
								<Route exact key={index} path={route.path} component={route.component}></Route>
							)
						} else {
							if (!route.path) {
								return (
									<Route key={index} component={route.component} />
								)
							} else {
								return (
									<Route key={index} path={route.path} render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
								)
							}
						}
						})}
					</Switch>
			</div>
		);
	}
}
const mapStateToProps = (state: any) => {
	return {
		reduxStatus: state.operationList.listData
	}
}
export default connect(mapStateToProps)(BoxContent);
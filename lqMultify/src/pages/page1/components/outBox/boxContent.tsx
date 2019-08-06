import React, { Component } from 'react';
import routes from '../../routes/index'
// import DefaultHome from '../contentChild/defaultHome'
import { Route } from 'react-router-dom'
import '../../static/css/boxContent.less'
class BoxContent extends Component {
	constructor(props: object) {
		super(props)
	}

	render() {
		return (
			<div className="box-content">
				{routes.map((route: any, index: number) => {
					if (route.exact) {
						return (
							<Route exact key={index} path={route.path} component={route.component}></Route>
						)
					} else {
						return (
							<Route key={index} path={route.path} render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
							// <Route key={index} path={route.path} component={route.component}></Route>
						)
					}
				})}
			</div>
		);
	}
}

export default BoxContent;
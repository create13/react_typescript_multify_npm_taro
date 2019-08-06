import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from '../routes/index'
import '@/static/css/homePage.scss'

class WTSHome extends Component<any, any> {
	constructor(props: any) {
		super(props)
		this.state = {
		}
	}
	componentWillUnmount () {
	}
	render() {
		return (
			<HashRouter>
				<div className="home-page">
					<Switch>
						{routes.map((route: any, index: number) => {
						if (route.exact) {
							return (
								<Route key={index} path={route.path} exact render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
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
			</HashRouter>
		);
	}
}
export default WTSHome;
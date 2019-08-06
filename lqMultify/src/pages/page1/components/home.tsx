import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import routes from '../routes/index'
import { Layout } from 'antd';
import '../static/css/homePage.less'
import BoxHeader from './outBox/boxHeader'
import BoxSide from './outBox/boxSide'
import BoxContent from './outBox/boxContent'
const { Header, Sider, Content, } = Layout;

class WTSHome extends Component {
	constructor(props: any) {
		super(props)
	}
	render() {
		return (
			<HashRouter>
				<div className="home-page">
					<Layout>
						<Header>
							<BoxHeader />
						</Header>
						<Layout>
							<Sider>
								<BoxSide />
							</Sider>
							<Content>
								<BoxContent />
							</Content>
						</Layout>
					</Layout>
					{/* {routes.map((route, rIndex) => {
						if (!route.exact) {
							return (
								// <Route key={rIndex} path={route.path} render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
								<Route key={rIndex} path={route.path} exact render={(props: any) => (<route.component {...props} />)} />
							)
						} else {
							return (
								<Route key={rIndex} path={route.path} exact render={(props: any) => (<route.component {...props} />)} />
							)
						}
					})} */}
				</div>
			</HashRouter>
		);
	}
}

export default WTSHome;
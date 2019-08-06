import React, { Component } from 'react';
import { HashRouter} from 'react-router-dom'
import { Layout } from 'antd';
import '@/static/css/homePage.scss'
import BoxHeader from '@/baseComponent/outBox/boxHeader'
import BoxSide from '@/baseComponent/outBox/boxSide'
import BoxContent from '@/baseComponent/outBox/boxContent'
const { Header, Sider, Content, } = Layout;

class WTSHome extends Component {
	constructor(props: any) {
		super(props)
	}
	render() {
		let a = '123adwwse';
		let b = a.match(/[1-9]/gi);
		console.log('正则表达式', b);
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
				</div>
			</HashRouter>
		);
	}
}

export default WTSHome;
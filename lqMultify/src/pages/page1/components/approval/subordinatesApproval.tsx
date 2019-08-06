import React, { Component } from 'react'
import {
	Statistic, Row, Col, Tree, Timeline, Icon, Tag, Tabs, Alert, Drawer, Button, Modal, message, notification, Progress, Popconfirm, Spin, Skeleton, Anchor, BackTop,
	Divider, Form, Input, Checkbox
} from 'antd';
const TabPane = Tabs.TabPane;
const { Link } = Anchor;
function confirm(e: any) {
	console.log(e);
	message.success('Click on Yes');
}

function cancel(e: any) {
	console.log(e);
	message.error('Click on No');
}

function callback(key: any) {
	console.log(key);
}
const openNotification = () => {
	notification.open({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
		onClick: () => {
			console.log('Notification Clicked!');
		},
	});
};
const Countdown = Statistic.Countdown;
const info = () => {
	message.info('This is a normal message');
};
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
function onFinish() {
	console.log('finished!');
}
const { TreeNode } = Tree;
export default class subordinatesApproval extends Component {
	constructor(props: any) {
		super(props)

	}
	state = { visible: false, visibleModel: false };
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};
	onSelect = (selectedKeys: any, info: any) => {
		console.log('selected', selectedKeys, info);
	}

	onCheck = (checkedKeys: any, info: any) => {
		console.log('onCheck', checkedKeys, info);
	}
	showModal = () => {
		this.setState({
			visibleModel: true,
		});
	}

	handleOk = (e: any) => {
		console.log(e);
		this.setState({
			visibleModel: false,
		});
	}

	handleCancel = (e: any) => {
		console.log(e);
		this.setState({
			visibleModel: false,
		});
	}
	hrefGo() {
		window.location.href = 'https://www.baidu.com/'
	}
	render() {
		return (
			<div className="subordinates-approval">
				<div className="line-left">
					<Row gutter={16} className="subordinates-border">
						<Col span={12}>
							<Countdown title="Countdown" value={deadline} onFinish={onFinish} />
						</Col>
						<Col span={12}>
							<Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
						</Col>
						<Col span={24} style={{ marginTop: 32 }}>
							<Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
						</Col>
					</Row>
					<div className="line-second">
						<Tree
							checkable
							defaultExpandedKeys={['0-0-0', '0-0-1']}
							defaultSelectedKeys={['0-0-0', '0-0-1']}
							defaultCheckedKeys={['0-0-0', '0-0-1']}
							onSelect={this.onSelect}
							onCheck={this.onCheck}
						>
							<TreeNode title="parent 1" key="0-0">
								<TreeNode title="parent 1-0" key="0-0-0" disabled>
									<TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
									<TreeNode title="leaf" key="0-0-0-1" />
								</TreeNode>
								<TreeNode title="parent 1-1" key="0-0-1">
									<TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
								</TreeNode>
							</TreeNode>
						</Tree>
					</div>
					<div className="line-second">
						<Timeline>
							<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
							<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
							<Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
							<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
						</Timeline>
					</div>
					<div className="line-second">
						<h4 style={{ marginBottom: 16 }}>Presets:</h4>
						<div>
							<Tag color="magenta">magenta</Tag>
							<Tag color="red">red</Tag>
							<Tag color="volcano">volcano</Tag>
							<Tag color="orange">orange</Tag>
							<Tag color="gold">gold</Tag>
							<Tag color="lime">lime</Tag>
							<Tag color="green">green</Tag>
							<Tag color="cyan">cyan</Tag>
							<Tag color="blue">blue</Tag>
							<Tag color="geekblue">geekblue</Tag>
							<Tag color="purple">purple</Tag>
						</div>
						<h4 style={{ margin: '16px 0' }}>Custom:</h4>
						<div>
							<Tag color="#f50">#f50</Tag>
							<Tag color="#2db7f5">#2db7f5</Tag>
							<Tag color="#87d068">#87d068</Tag>
							<Tag color="#108ee9">#108ee9</Tag>
						</div>
					</div>
				</div>
				<div className="line-left">
					<Tabs defaultActiveKey="1" onChange={callback}>
						<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
						<TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
						<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
					</Tabs>
					<div className="line-second">
						<Alert message="Success Text" type="success" />
						<Alert message="Info Text" type="info" />
						<Alert message="Warning Text" type="warning" />
						<Alert message="Error Text" type="error" />
					</div>
					<div className="line-second">
						<Button type="primary" onClick={this.showDrawer}>
							Open
            </Button>
						<Drawer
							title="Basic Drawer"
							placement="right"
							closable={false}
							onClose={this.onClose}
							visible={this.state.visible}
						>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</Drawer>
					</div>
					<div className="line-second">
						<Button type="primary" onClick={this.showModal}>
							Open Modal
            </Button>
						<Modal
							title="Basic Modal"
							visible={this.state.visibleModel}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
						>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</Modal>
					</div>
					<div className="line-second">
						<Button type="primary" onClick={info}>Display normal message</Button>
					</div>
					<div className="line-second">
						<Button type="primary" onClick={openNotification}>Open the notification box</Button>
					</div>
					<div className="line-second">
						<Progress type="circle" percent={75} />
						<Progress type="circle" percent={70} status="exception" />
						<Progress type="circle" percent={100} />
					</div>
				</div>
				<div className="line-left">
					<div className="line-second">
						<Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
							<a href="#">Delete</a>
						</Popconfirm>
					</div>
					<div className="line-second">
						<Spin size="small" />
						<Spin />
						<Spin size="large" />
					</div>
					<div className="line-second">
						<Skeleton avatar paragraph={{ rows: 4 }} />
					</div>
					<div className="line-second">
						<Anchor>
							<Link href="#components-anchor-demo-basic" title="Basic demo" />
							<Link href="#components-anchor-demo-static" title="Static demo" />
							<Link href="#API" title="API">
								<Link href="#Anchor-Props" title="Anchor Props" />
								<Link href="#Link-Props" title="Link Props" />
							</Link>
						</Anchor>
					</div>
					<div className="line-second">
						<BackTop />
					</div>
					<div className="line-second">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
						<Divider />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
						<Divider>With Text</Divider>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
						<Divider dashed />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
					</div>
					<div className="line-second"></div>
					<div className="line-second"></div>
				</div>
				<div>
					<button onClick={() => { this.hrefGo() }}>跳转到百度</button>
				</div>
			</div>
		)
	}
}

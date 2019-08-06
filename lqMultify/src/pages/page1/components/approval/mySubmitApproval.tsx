import React, { Component } from 'react';
import { Button, Icon, Typography, Row, Col, Breadcrumb, Menu, Dropdown, message, Pagination, PageHeader, Steps, AutoComplete, Checkbox } from 'antd';
class MySubmitApproval extends Component {
	state = {
		dataSource: [],
	}
	constructor(props: any) {
		super(props)

	}
	handleButtonClick(e: any) {
		message.info('Click on left button.');
		console.log('click left button', e);
	}
	onChangeCheck(checkedValues: any) {
		console.log('checked = ', checkedValues);
	}
	handleSearch = (value: any) => {
		this.setState({
			dataSource: !value ? [] : [
				value,
				value + value,
				value + value + value,
			],
		});
	}
	handleMenuClick(e: any) {
		message.info('Click on menu item.');
		console.log('click', e);
	}
	onShowSizeChange(current: any, pageSize: number) {
		console.log(current, pageSize);
	}
	onChange(pageNumber: number) {
		console.log('Page: ', pageNumber);
	}
	onSelect(value: any) {
		console.log('onSelect', value);
	}
	render() {
		let IconFont: any = Icon.createFromIconfontCN({
			scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
		});
		const { Text } = Typography;
		const CheckboxGroup = Checkbox.Group;
		const menu = (
			<Menu>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
				</Menu.Item>
			</Menu>
		);
		const plainOptions = ['Apple', 'Pear', 'Orange'];
		const options = [
			{ label: 'Apple', value: 'Apple' },
			{ label: 'Pear', value: 'Pear' },
			{ label: 'Orange', value: 'Orange' },
		];
		const optionsWithDisabled = [
			{ label: 'Apple', value: 'Apple' },
			{ label: 'Pear', value: 'Pear' },
			{ label: 'Orange', value: 'Orange', disabled: false },
		];
		const menuList = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
				<Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
				<Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
			</Menu>
		);
		const Step = Steps.Step;
		return (
			<div className="submit-out">
				<div className="line-left">
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="danger">Danger</Button>
					<div className="icon-second icons-list">
						<Icon type="home" />
						<Icon type="setting" theme="filled" />
						<Icon type="smile" theme="outlined" />
						<Icon type="sync" spin />
						<Icon type="smile" rotate={180} />
						<Icon type="loading" />
					</div>
					<div className="icon-second icons-list">
						<Icon type="smile" theme="twoTone" />
						<Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
						<Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
					</div>
					<div className="icon-second icons-list">
						<IconFont type="icon-tuichu" />
						<IconFont type="icon-facebook" />
						<IconFont type="icon-twitter" />
					</div>
					<div className="icon-second">
						<Text>Ant Design</Text>
						<br />
						<Text type="secondary">Ant Design</Text>
						<br />
						<Text type="warning">Ant Design</Text>
						<br />
						<Text type="danger">Ant Design</Text>
						<br />
						<Text disabled>Ant Design</Text>
						<br />
						<Text mark>Ant Design</Text>
						<br />
						<Text code>Ant Design</Text>
						<br />
						<Text underline>Ant Design</Text>
						<br />
						<Text delete>Ant Design</Text>
						<br />
						<Text strong>Ant Design</Text>
					</div>
				</div>
				<div className="line-left">
					<Row gutter={16}>
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
						<Col className="gutter-row" span={6}>
							<div className="gutter-box">col-6</div>
						</Col>
					</Row>
				</div>
				<div className="line-left">
					<Breadcrumb>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
						<Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
						<Breadcrumb.Item>An Application</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className="line-left">
					<Dropdown overlay={menu}>
						<a className="ant-dropdown-link" href="#">
							Hover me <Icon type="down" />
						</a>
					</Dropdown>
					<div className="icon-second icons-list">
						<Dropdown.Button onClick={this.handleButtonClick} overlay={menuList}>
							Dropdown
            </Dropdown.Button>
					</div>
				</div>
				<div className="line-left">
					<Pagination defaultCurrent={1} total={50} />
				</div>
				<div className="line-left">
					<Pagination defaultCurrent={6} total={500} />
				</div>
				<div className="line-left">
					<Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
				</div>
				<div className="line-left">
					<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
				</div>
				<div className="line-left">
					<PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />
				</div>
				<div className="line-left width-ajust">
					<Steps>
						<Step status="finish" title="Login" icon={<Icon type="user" />} />
						<Step status="finish" title="Verification" icon={<Icon type="solution" />} />
						<Step status="process" title="Pay" icon={<Icon type="loading" />} />
						<Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
					</Steps>
				</div>
				<div className="line-left">
					<AutoComplete
						dataSource={this.state.dataSource}
						style={{ width: 200 }}
						onSelect={this.onSelect}
						onSearch={this.handleSearch}
						placeholder="input here"
					/>
				</div>
				<div className="line-left">
					<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onSelect} />
					<br /><br />
					<CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onSelect} />
					<br /><br />
					<CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onSelect} />
				</div>
			</div>
		);
	}
}
export default MySubmitApproval;
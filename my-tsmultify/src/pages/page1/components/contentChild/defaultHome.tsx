import React, { Component } from 'react';
import { DatePicker, Select, Transfer, Switch, Collapse, Table } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date: any, dateString: any) {
	console.log(date, dateString);
}
function onChange1(date: any, dateString: any) {
	console.log(date, dateString);
}
const Option = Select.Option;
function handleChange(value: any) {
	console.log(`selected ${value}`);
}
const mockData: any[] = [];
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
for (let i = 0; i < 20; i++) {
	mockData.push({
		key: i.toString(),
		title: `content${i + 1}`,
		description: `description of content${i + 1}`,
		disabled: i % 3 < 1,
	});
}

const oriTargetKeys = mockData
	.filter(item => +item.key % 3 > 1)
	.map(item => item.key);
const columns = [{
	title: 'Name',
	dataIndex: 'name',
	render: (text: any) => <a href="javascript:;">{text}</a>,
}, {
	title: 'Age',
	dataIndex: 'age',
}, {
	title: 'Address',
	dataIndex: 'address',
}];
const data = [{
	key: '1',
	name: 'John Brown',
	age: 32,
	address: 'New York No. 1 Lake Park',
}, {
	key: '2',
	name: 'Jim Green',
	age: 42,
	address: 'London No. 1 Lake Park',
}, {
	key: '3',
	name: 'Joe Black',
	age: 32,
	address: 'Sidney No. 1 Lake Park',
}, {
	key: '4',
	name: 'Disabled User',
	age: 99,
	address: 'Sidney No. 1 Lake Park',
}];
const rowSelection = {
	onChange: (selectedRowKeys: any, selectedRows: any) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record: any) => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};
class defaultHome extends Component {
	constructor(props: any) {
		super(props)
	}
	state = {
		targetKeys: oriTargetKeys,
		selectedKeys: [],
		disabled: false,
	}

	handleChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
		this.setState({ targetKeys: nextTargetKeys });
	}

	handleSelectChange = (sourceSelectedKeys: any, targetSelectedKeys: any) => {
		this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
	}

	handleScroll = (direction: any, e: any) => {
	}

	handleDisable = (disabled: any) => {
		this.setState({ disabled });
	};
	render() {
		const { targetKeys, selectedKeys, disabled } = this.state;
		return (
			<div className="default-home">
				默认主页面
            <div className="line-first">
					<div>
						请选择开始日期：
            <DatePicker onChange={onChange} />
					</div>
					<div className="second-date">
						请选择结束日期：
            <DatePicker onChange={onChange1} />
					</div>
				</div>
				<div className="line-first second-square">
					<Transfer
						dataSource={mockData}
						titles={['Source', 'Target']}
						targetKeys={targetKeys}
						selectedKeys={selectedKeys}
						onChange={this.handleChange}
						onSelectChange={this.handleSelectChange}
						onScroll={this.handleScroll}
						render={item => item.title}
						disabled={disabled}
					/>
					<Switch
						unCheckedChildren="disabled"
						checkedChildren="disabled"
						checked={disabled}
						onChange={this.handleDisable}
						style={{ marginTop: 16 }}
					/>
				</div>
				<div className="third-content">
					<Collapse accordion>
						<Panel header="This is panel header 1" key="1">
							<p>{text}</p>
						</Panel>
						<Panel header="This is panel header 2" key="2">
							<p>{text}</p>
						</Panel>
						<Panel header="This is panel header 3" key="3">
							<p>{text}</p>
						</Panel>
					</Collapse>
				</div>
				<div>
					<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
				</div>
			</div>
		);
	}
}

export default defaultHome;

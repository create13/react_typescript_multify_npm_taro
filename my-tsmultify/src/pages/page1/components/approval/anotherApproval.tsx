import React, { Component } from 'react'
import {
	Cascader, DatePicker, InputNumber, Mention, Rate, Radio, Switch, Slider, Select, TreeSelect, Upload,
	message, Button, Icon, Badge, Comment, Tooltip, Avatar, Card, Empty, List, Typography, Popover
} from 'antd';
import moment from 'moment';
const TreeNode = TreeSelect.TreeNode;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { toString, toContentState } = Mention;
const RadioGroup = Radio.Group;
const content = (
	<div>
		<p>Content</p>
		<p>Content</p>
	</div>
);
const props = {
	name: 'file',
	action: '//jsonplaceholder.typicode.com/posts/',
	headers: {
		authorization: 'authorization-text',
	},
	onChangeUpload(info: any) {
		if (info.file.status !== 'uploading') {
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};
const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
];
const residences = [{
	value: 'zhejiang',
	label: 'Zhejiang',
	children: [{
		value: 'hangzhou',
		label: 'Hangzhou',
		children: [{
			value: 'xihu',
			label: 'West Lake',
		}],
	}],
}, {
	value: 'jiangsu',
	label: 'Jiangsu',
	children: [{
		value: 'nanjing',
		label: 'Nanjing',
		children: [{
			value: 'zhonghuamen',
			label: 'Zhong Hua Men',
		}],
	}],
}];
const Option = Select.Option;

function handleChange(value: any) {
	console.log(`selected ${value}`);
}
function onChange(contentState: any) {
	console.log(toString(contentState));
}

function onSelect(suggestion: any) {
	console.log('onSelect', suggestion);
}
export default class anotherApproval extends Component<any, any> {
	constructor(props: any) {
		super(props)
	}
	state = {
		value: 1,
		disabled: false,
		value1: undefined,
		likes: 0,
		dislikes: 0,
		action: null
	}
	like = () => {
		this.setState({
			likes: 1,
			dislikes: 0,
			action: 'liked',
		});
	}

	dislike = () => {
		this.setState({
			likes: 0,
			dislikes: 1,
			action: 'disliked',
		});
	}
	onChange(value: any) {
		console.log(value);
	}
	onChangeTree = (value1: any) => {
		this.setState({ value1 });
	}

	handleDisabledChange = (disabled: any) => {
		this.setState({ disabled });
	}
	onChangeRadio = (e: any) => {
		this.setState({
			value: e.target.value,
		});
	}
	onChangeSwitch(checked: any) {
		console.log(`switch to ${checked}`);
	}
	onChangeDate(date: any, dateString: any) {
		console.log(date, dateString);
	}
	onChangeNumber(value: any) {
		console.log('chvaluenged', value);
	}
	shouldComponentUpdate (props: any, state: any):boolean {
		console.log('id', this.props.match.params.id);
		if (this.props.match.params.id) {
			return false;
		} else {
			return true;
		}
	}
	componentDidMount () {
	}
	render() {
		const { likes, dislikes, action } = this.state;
		const actions = [
			<span>
				<Tooltip title="Like">
					<Icon
						type="like"
						theme={action === 'liked' ? 'filled' : 'outlined'}
						onClick={this.like}
					/>
				</Tooltip>
				<span style={{ paddingLeft: 8, cursor: 'auto' }}>
					{likes}
				</span>
			</span>,
			<span>
				<Tooltip title="Dislike">
					<Icon
						type="dislike"
						theme={action === 'disliked' ? 'filled' : 'outlined'}
						onClick={this.dislike}
					/>
				</Tooltip>
				<span style={{ paddingLeft: 8, cursor: 'auto' }}>
					{dislikes}
				</span>
			</span>,
			<span>Reply to</span>,
		];

		const { disabled } = this.state;
		const options = [{
			value: '浙江省',
			label: '浙江省',
			children: [{
				value: '杭州市',
				label: '杭州市',
				children: [{
					value: '西湖风景区',
					label: '西湖风景区'
				}],
			}],
		}, {
			value: '江苏省',
			label: '江苏省',
			children: [{
				value: '南京市',
				label: '南京市',
				children: [{
					value: '中华门',
					label: '中华门'
				}],
			}],
		}];
		return (
			<div>
				<div className="another-approval">
					<div className="line-left">
						级联选择器：<Cascader options={options} onChange={this.onChange} placeholder="Please select" />
						<div className='line-second'>
							日期选择器：
          <DatePicker className='line-second' onChange={this.onChangeDate} />
							<MonthPicker className='line-second' onChange={this.onChangeDate} placeholder="Select month" />
							<RangePicker className='line-second' onChange={this.onChangeDate} />
							<WeekPicker className='line-second' onChange={this.onChangeDate} placeholder="Select week" />
						</div>
					</div>
					<div className="line-left">
						数字选择框：<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChangeNumber} />
						<div className='line-second'>
							提及组件：<Mention
								style={{ width: '100%' }}
								onChange={onChange}
								defaultValue={toContentState('@afc163')}
								defaultSuggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
								onSelect={onSelect}
							/>
						</div>
						<div className='line-second'>
							评分组件：<Rate />
						</div>
						<div>
							单选框：<RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
								<Radio value={1}>A</Radio>
								<Radio value={2}>B</Radio>
								<Radio value={3}>C</Radio>
								<Radio value={4}>D</Radio>
							</RadioGroup>
						</div>
						<div>
							switch切换：<Switch defaultChecked onChange={this.onChangeSwitch} />
						</div>
					</div>
					<div className="line-left">
						滑动输入条：<Slider defaultValue={30} disabled={disabled} />
						<Slider range defaultValue={[20, 50]} disabled={disabled} />
						Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
						<div className='line-second'>
							选择器：<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="disabled" disabled>Disabled</Option>
								<Option value="Yiminghe">yiminghe</Option>
							</Select>
						</div>
						<div className='line-second'>
							树选择：<TreeSelect
								showSearch
								style={{ width: 300 }}
								value={this.state.value1}
								dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
								placeholder="Please select"
								allowClear
								treeDefaultExpandAll
								onChange={this.onChangeTree}
							>
								<TreeNode value="parent 1" title="parent 1" key="0-1">
									<TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
										<TreeNode value="leaf1" title="my leaf" key="random" />
										<TreeNode value="leaf2" title="your leaf" key="random1" />
									</TreeNode>
									<TreeNode value="parent 1-1" title="parent 1-1" key="random2">
										<TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
									</TreeNode>
								</TreeNode>
							</TreeSelect>
						</div>
						<div>
							上传:<Upload {...props}>
								<Button>
									<Icon type="upload" /> Click to Upload
          						</Button>
							</Upload>
						</div>
						<div className='line-second'>
							徽标：<Badge count={5}>
								<a href="#" className="head-example" />
							</Badge>
							<Badge count={0} showZero>
								<a href="#" className="head-example" />
							</Badge>
							<Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
								<a href="#" className="head-example" />
							</Badge>
						</div>
					</div>
					<div className="line-left">
						<Comment
							actions={actions}
							author={<a>Han Solo</a>}
							avatar={(
								<Avatar
									src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
									alt="Han Solo"
								/>
							)}
							content={(
								<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
							)}
							datetime={(
								<Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
									<span>{moment().fromNow()}</span>
								</Tooltip>
							)}
						/>
					</div>
					<div className="line-left">
						<Card
							title="Default size card"
							extra={<a href="#">More</a>}
							style={{ width: 300 }}>
							<p>Card content</p>
							<p>Card content</p>
							<p>Card content</p>
						</Card>
						<div className='line-second'>
							<Empty />
						</div>
						<div className='line-second'>
							<h3 style={{ marginBottom: 16 }}>Default Size</h3>
							<List
								header={<div>Header</div>}
								footer={<div>Footer</div>}
								bordered
								dataSource={data}
								renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
							/>
						</div>
						<div className='line-second'>
							<Popover content={content} title="Title" trigger="hover">
								<Button>Hover me</Button>
							</Popover>
							<Popover content={content} title="Title" trigger="focus">
								<Button>Focus me</Button>
							</Popover>
							<Popover content={content} title="Title" trigger="click">
								<Button>Click me</Button>
							</Popover>
						</div>
					</div>


				</div>
			</div>
		)
	}
}




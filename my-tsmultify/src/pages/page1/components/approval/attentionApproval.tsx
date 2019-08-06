import React, { Component } from 'react'
import { Calendar, Badge } from 'antd';
import { addList } from '@/store/actionCreators'
import { connect } from 'react-redux'
function getListData(value: any) {
	let listData;
	switch (value.date()) {
		case 8:
			listData = [
				{ type: 'warning', content: 'This is warning event.' },
				{ type: 'success', content: 'This is usual event.' },
			]; break;
		case 10:
			listData = [
				{ type: 'warning', content: 'This is warning event.' },
				{ type: 'success', content: 'This is usual event.' },
				{ type: 'error', content: 'This is error event.' },
			]; break;
		case 15:
			listData = [
				{ type: 'warning', content: 'This is warning event' },
				{ type: 'success', content: 'This is very long usual event。。....' },
				{ type: 'error', content: 'This is error event 1.' },
				{ type: 'error', content: 'This is error event 2.' },
				{ type: 'error', content: 'This is error event 3.' },
				{ type: 'error', content: 'This is error event 4.' },
			]; break;
		default:
	}
	return listData || [];
}

function dateCellRender(value: any) {
	const listData = getListData(value);
	return (
		<ul className="events">
			{
				listData.map((item: any) => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))
			}
		</ul>
	);
}

function getMonthData(value: any) {
	if (value.month() === 8) {
		return 1394;
	}
}

function monthCellRender(value: any) {
	const num = getMonthData(value);
	return num ? (
		<div className="notes-month">
			<section>{num}</section>
			<span>Backlog number</span>
		</div>
	) : null;
}

class AttentionApproval extends Component<any, any> {
	constructor(props: any) {
		super(props)

		this.state = {
			listData: []
		}
	}
	addList() {
		const items = { title: 'www' }
		this.props.addListData(items);
	}
	render() {
		let { listData } = this.props;
		return (
			<div className="attention-approval">
				<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
				<button onClick={() => this.addList()}>点击增加一条数据</button>
				{listData.map((items: any, indexs: number) => {
					return (
						<div key={indexs}>{items.title}</div>
					)
				})}
			</div>
		)
	}
}
const mapStateToProps = (state: any) => {
	return {
		listData: state.operationList.listData
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		addListData(todo: any) {
			const action = addList(todo);
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AttentionApproval)

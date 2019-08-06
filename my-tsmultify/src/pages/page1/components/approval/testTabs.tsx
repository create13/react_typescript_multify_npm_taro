import React, { Component } from 'react'
import OuterContent from '@/baseComponent/outBox/outerContent'
export default class TestTabs extends Component<any, any> {
    [k: string]: any
    constructor(props:any) {
      super(props)
      this.state = {
		  inputValue: '',
		  listData: [
			{ name: '新闻详情1' },
			{ name: '新闻详情2' },
			{ name: '新闻详情3' }
		]
      };
	}
	changeInput (e: any) {
		this.setState({
			inputValue: e.target.value
		});
	}
    render() {
		let {listData} = this.state;
        return (
        <div>
          <OuterContent>
			<div>新闻详情1</div>
          </OuterContent>
        </div>
        )
    }
}

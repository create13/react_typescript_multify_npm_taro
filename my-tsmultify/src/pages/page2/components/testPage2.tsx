import React, { Component } from 'react'
export default class TestPage2 extends Component<any, any> {
    constructor(props: any) {
      super(props)
    
      this.state = {
      }
    }
  editLast () {
    	this.props.editLastData('test123');
  }
  render() {
    return (
      <div>
        testPage2
        <div>{this.props.editModule}</div>
            <div>
          <button onClick={() => this.editLast()}>点击修改最后一个标签内容</button>
        </div>
      </div>
    )
  }
}
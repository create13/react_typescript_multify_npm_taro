import React, { Component } from 'react'

export default class newsApproval extends Component<any, any> {
    constructor(props: any) {
      super(props)
      this.state = {
         
      }
    }
    
  render() {
    console.log(this.props.match.params.titleId)
    return (
      <div>
          新闻详情页
           {/* <Route path="/newsApproval" component={NewsApproval}></Route> */}
      </div>
    )
  }
}

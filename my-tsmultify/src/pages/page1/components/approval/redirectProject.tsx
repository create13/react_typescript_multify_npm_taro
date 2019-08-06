import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class redirectProject extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            
        }
    }
    
    componentDidMount () {
        this.props.history.push('/main/finishApproval');
    }
    render() {
    return (
        <div>
            <Redirect to='https://www.baidu.com/' />
        </div>
    )
    }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './loading'
import '@/static/css/loading.scss'
class Mask extends Component<any, any> {
    constructor(props: any) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        const maskElment = (
            <div className="mask-global">
                <Loading loadingShow={true} />
            </div>
        )
        const maskStatus = this.props.maskShow ? maskElment: null
        return (
            <div>
            { maskStatus }
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        maskShow: state.globalPromp.maskStatus
    }
}
export default connect(mapStateToProps, null)(Mask);

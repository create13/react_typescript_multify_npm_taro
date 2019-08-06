import React, { Component } from 'react'
import BoxHeader from '@/baseComponent/outBox/boxHeader'
import BoxSide from '@/baseComponent/outBox/boxSide'
import BoxContent from '@/baseComponent/outBox/boxContent'
import { connect } from 'react-redux'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
class Main extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
             
        }
    }
    render() {
        let { menuStatus } = this.props;
        return (
            <div className="main-content">
                <Layout>
                    <Header>
                        <BoxHeader />
                    </Header>
                    <Layout>
                        {menuStatus ? <Sider><BoxSide /></Sider>: ''}
                        <Content>
                            <BoxContent routes={this.props.routes} />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        menuStatus: state.globalPromp.menuStatus
    }
}
export default connect(mapStateToProps, null)(Main);
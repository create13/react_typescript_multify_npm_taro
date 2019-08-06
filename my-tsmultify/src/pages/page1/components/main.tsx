import React, { Component } from 'react'
import BoxHeader from '@/baseComponent/outBox/boxHeader'
import BoxSide from '@/baseComponent/outBox/boxSide'
import BoxContent from '@/baseComponent/outBox/boxContent'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
export default class Main extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
             
        }
    }
    render() {
        return (
            <div className="main-content">
                <Layout>
                    <Header>
                    <BoxHeader />
                    </Header>
                    <Layout>
                        <Sider>
                            <BoxSide />
                        </Sider>
                        <Content>
                            <BoxContent routes={this.props.routes} />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

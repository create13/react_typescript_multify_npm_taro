import React, { Component } from 'react'
import '@/static/css/login.scss'
import backgroundImg from '@/static/image/login/pic-bg.jpg'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import { Redirect, HashRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { changeLogin } from '@/store/actionCreators'
class Login extends Component<any, any> {
    constructor(props: any) {
      super(props)
      console.log('props', props);
    }
    state = {
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            if (values.username === 'admin' && values.password === 'admin') {
                // console.log('this.props', this.props);
                // this.props.goHome(false);
                this.props.history.push('/main');
            }
          }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="outer-login" style={{background:`url(../${backgroundImg})`}}>
                <div className="center-square">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                    </Form.Item>
                </Form> 
                </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         goHome (status: boolean) {
//             const action = changeLogin(status);
//             dispatch(action);
//         }
//     }
// }
export default WrappedNormalLoginForm;
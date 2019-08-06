
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
// import PropTypes from 'prop-types'; // 引入数据类型判断脚本
export default class Inputs extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            userPass: '',
            loginStatus: false
        }
    }
    submitLogin () {
        const {userName, userPass} = this.state;
        if (userName && userPass) {
            alert('登录成功 正在跳转');
            this.setState({
                loginStatus: true
            });
        } else {
            alert('请输入用户名或密码');
            return;
        }
    }
    userChange (e) {
        const userName = e.target.value;
        this.setState({
            userName
        });
    }
    passChange (e) {
        const userPass = e.target.value;
        this.setState({
            userPass
        });
    }
    render () {
        const {userName, userPass, loginStatus} = this.state;
        if (loginStatus) {
            return <Redirect to='/'/>
        }
        return (
        <div>
            <div>
                <span>用户名：</span>
                <input type="text" placeholder="请输入用户名" value={userName} onChange={(e) => this.userChange(e)} />
            </div>
            <div>
                <span>密码：</span>
                <input type="password" placeholder="请输入密码" value={userPass} onChange={(e) => this.passChange(e)} />
            </div>
            <input type="submit" onClick={() => this.submitLogin()} value="登录" />
        </div>
        )
    }

}
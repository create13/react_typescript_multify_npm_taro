import React, { Component } from 'react';
// import PropTypes from 'prop-types'; // 引入数据类型判断脚本
export default class Inputs extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        // 绑定ref
        this.refName = React.createRef();
        this.refAge = React.createRef();
        this.refSex = React.createRef();
        this.refTel = React.createRef();
    }
    addData () {
        let name = this.refName.current.value;
        let age = this.refAge.current.value;
        let sex = this.refSex.current.value;
        let tel = this.refTel.current.value;
        if (!name || !age || !sex || !tel) {
            alert('添加的数据不能为空');
            return;
        }
        this.props.addToArry({name, age, sex, tel})
        this.refName.current.value = '';
        this.refAge.current.value = '';
        this.refSex.current.value = '';
        this.refTel.current.value = '';
    }
    render () {
        return (
        <div>
            姓名:<input type="text" ref={this.refName} placeholder="请输入姓名" />
            年龄：<input type="text" ref={this.refAge} placeholder="请输入年龄" />
            性别：<select ref={this.refSex}>
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
            电话：<input type="text" ref={this.refTel} placeholder="请输入电话" />
            <button onClick={() => this.addData()}>添加</button>
        </div>
        )
    }

}
// Inputs.propsType = {

// }
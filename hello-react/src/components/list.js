import React, { Component } from 'react';
// import PropTypes from 'prop-types'; // 引入数据类型判断脚本
import Tables from './table';
import TableCopys from './tableCopy';
import TableSaga from './tableSaga';
import PretendTable from './pretendTable'
import Inputs from './input'
export default class List extends Component {
    constructor (props) {
        super(props)
        this.state = {
            subData: [
                {name: 'lee', age: 21, sex: 'girl', tel: 15165218171},
                {name: 'alice', age: 24, sex: 'girl', tel: 15515248964}
            ]
        }
        this.delArrayData = this.delArrayData.bind(this);
        this.addToArry = this.addToArry.bind(this);
    }
    delArrayData (index) {
        const {subData} = this.state;
        subData.splice(index, 1)
        this.setState({
            subData
        });
    }
    addToArry (data) {
        const {subData} = this.state;
        subData.unshift(data);
        this.setState({
            subData
        });
    }
    render () {
        return (
            <div>
                <Inputs addToArry={this.addToArry} />
                <Tables data = {this.state.subData} delData={this.delArrayData} />
                <TableCopys />
                <TableSaga />
                <PretendTable />
            </div>
        )
}
}
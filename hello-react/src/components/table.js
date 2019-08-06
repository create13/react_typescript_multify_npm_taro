import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 引入数据类型判断脚本
import '../static/css/list.css'
import store from '../store'
import { getAllList } from '../store/actionCreators'
import { shopList } from '../api/index'
export default class Tables extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.updateStore = this.updateStore.bind(this);
        store.subscribe(this.updateStore);
    }
    delData (index) {
        console.log(index);
      this.props.delData(index);
    }
    updateStore () {
        this.setState(store.getState());
    }
    render () {
        console.log('render打印数据', this.state.item);
        let {items} = this.state;
        return (
            <div>
                <table className="table-width">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>手机号</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.sex}</td>
                            <td>{item.tel}</td>
                            <td>
                                <button onClick = {() => {this.delData(index)}}>删除</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <ul className="del-dot">
                    {items.map((data, index) => {
                        return (
                            <li key={index}>{data.id}: {data.name}: {data.location}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    async reqShopList () {
        const result = await shopList();
        console.log('result', result);
        if (result.success_code === 200) {
            const action = getAllList(result.message);
            store.dispatch(action);
        }
    }
    componentDidMount () {
        this.reqShopList();
    }
}
Tables.propsType = {
    data: PropTypes.array.isRequired,
    delData: PropTypes.func.isRequired
}
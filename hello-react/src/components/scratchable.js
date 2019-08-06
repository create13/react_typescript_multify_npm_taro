import React, { Component } from 'react';
import '../static/css/scratchable.css'
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types'; // 引入数据类型判断脚本
export default class Scratchable extends Component {
    // 九宫格
    // 初始化阶段
    constructor (props) {
        super(props)
        this.state = {
            shopArray: []
        }
    }
    static defaultProps = {
        dataArray: [
            {
                icon: 'f1',
                title: 'apple'
            },
            {
                icon: 'f2',
                title: 'banana'
            },
            {
                icon: 'f3',
                title: 'orange'
            },
            {
                icon: 'f4',
                title: 'fruit'
            },
            {
                icon: 'f5',
                title: 'grapes'
            },
            {
                icon: 'f6',
                title: 'mango'
            },
            {
                icon: 'f7',
                title: 'pear'
            },
            {
                icon: 'f8',
                title: 'pitaya'
            },
            {
                icon: 'f9',
                title: 'pawpaw'
            }
        ]
    }
    addFruits () {
        console.log('add');
        let {shopArray} = this.state;
        let {dataArray} = this.props;
        let index = shopArray.length;
        if (index >= 9) {
            alert('购物车已满');
            return;
        }
        shopArray.push(dataArray[index])
        this.setState({
            shopArray
        })
    }
    removeFruits () {
        console.log('removeFruits');
        let {shopArray} = this.state;
        if(shopArray.length === 0) {
            alert('购物车已经空了');
        }
        shopArray.pop();
        this.setState({
            shopArray
        })

    }
    // 错误处理
    render () {
        let {shopArray} = this.state;
        return (
        <div>
            <div className="top">
            <button className="add-top" onClick={() => {this.addFruits()}}>Add</button>
            <button className="remove-top" onClick={() => {this.removeFruits()}}>remove</button>
            </div>
            <div className="bottom">
                {shopArray.map((item, index) => (
                    <div className="square" key={index}>
                    <img src={require('../static/image/'+ item.icon + '.jpg')} alt="" />
                    <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
        )
    }

}
// redux-saga结合例子
import React, { Component } from 'react';
import '../static/css/list.css'
import store from '../storeSaga'
import { getAllList } from '../storeSaga/actionCreators'
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
                <ul className="del-dot">
                <p>tableSaga</p>
                    {items.map((data, index) => {
                        return (
                            <li key={index}>{data.id}: {data.name}: {data.location}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    // async reqShopList () {
    //     const result = await shopList();
    //     console.log('result', result);
    //     if (result.success_code === 200) {
    //         const action = getAllList(result.message);
    //         store.dispatch(action);
    //     }
    // }
    componentDidMount () {
        const action = getAllList();
        store.dispatch(action);
    }
}
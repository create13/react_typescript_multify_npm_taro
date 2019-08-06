import React, { Component } from 'react';
import '../static/css/list.css'
import store from '../storeAddmiddleWare'
import { getAllList } from '../storeAddmiddleWare/actionCreators'
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
        console.log('render打印数据', this.state);
        let {items} = this.state;
        return (
            <div>
                <p>tableCopy</p>
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
    componentDidMount () {
        const action = getAllList();
        store.dispatch(action);
    }
}
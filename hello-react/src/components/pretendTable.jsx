import React, { Component } from 'react';
import '../static/css/list.css'
// import store from '../storeAddmiddleWare'
import { getAllList } from '../storeAddmiddleWare/actionCreators'
import { connect } from 'react-redux'
class PretendTable extends Component {
    constructor (props) {
        super(props)
        this.state = {}
        // this.state = store.getState()
        // this.updateStore = this.updateStore.bind(this);
        // store.subscribe(this.updateStore);
    }
    delData (index) {
        console.log(index);
      this.props.delData(index);
    }
    // updateStore () {
    //     this.setState(store.getState());
    // }
    render () {
        console.log('render打印数据', this.state);
        // let {items} = this.state;
        let {items} = this.props;
        return (
            <div>
                <p>PretendTable</p>
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
        // const action = getAllList();
        // store.dispatch(action);
    }
}
const mapStateToProps = (state) => {
  // console.log('table中的state', state);
  return {
    items: state.items
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllData () {
      const action = getAllList();
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PretendTable);
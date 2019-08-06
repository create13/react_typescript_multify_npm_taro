import React, { Component } from 'react';
import FormHeader from './addStoreFormHeader';
import FormDetail from './addStoreFormDetail';
import FormFooter from './addStoreFormFooter';
import '../static/css/formAbout.css'
export default class FormTotal extends Component {
    // 制约父组件传递数据的类型
  static propTypes = {
  };
  constructor (props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="total">
      <FormHeader />
      <FormDetail />
      <FormFooter />
      </div>
    );
  }
}

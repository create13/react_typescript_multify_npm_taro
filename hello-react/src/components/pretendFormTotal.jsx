import React, { Component } from 'react';
import PretendFormHeader from './pretendFormHeader';
import PretendFormDetail from './pretendFormDetail';
import PretendFormFooter from './pretendFormFooter';
import '../static/css/formAbout.css'
class PretendFormTotal extends Component {
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
      <h1>PretendForm</h1>
      <PretendFormHeader />
      <PretendFormDetail />
      <PretendFormFooter />
      </div>
    );
  }
}
export default PretendFormTotal;

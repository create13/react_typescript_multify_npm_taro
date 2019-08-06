import React, {Component} from 'react'; // 固定引入
import url from 'url'
// 组件写法1
export default class HotDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
      新闻详情
      </div>
    );
  }
  componentDidMount () {
      console.log(url);
    console.log('路由传值', this.props);
    console.log(url.parse(this.props.location.search, true).query.titleId);
  }
}
// Hot.propTypes = {
// }
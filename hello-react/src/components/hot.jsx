import React, {Component} from 'react'; // 固定引入
import { Link } from 'react-router-dom'
// import PropTypes from,'prop-types'
// 
export default class Hot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {id:'001', title: '蓝洁瑛墓碑被熏黑'},
        {id:'002', title: '复联4票房破5亿'},
        {id:'003', title: '大连 爆炸 辟谣'},
        {id:'004', title: '地球的经济中心'}
      ]
    }
  }
  render() {
    return (
      <div>
      热门模块
      {this.state.list.map((item, index) => {
        return (
          <p key={index}><Link to={`hotDetail?titleId=${item.id}`}>{item.title}</Link></p>
        )
      })}
      </div>
    );
  }
  componentDidMount () {
  console.log('路由传值', this.props.match.params.titleId);
}
}
// Hot.propTypes = {
// }
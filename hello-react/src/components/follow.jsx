import React, {Component} from 'react'; // 固定引入
import { Link } from 'react-router-dom'
// import PropTypes from,'prop-types'
// 
export default class Follow extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
          <button>
            <Link to="/login">关注</Link>
          </button>
      </div>
    );
  }
}
// Hot.propTypes = {
// }
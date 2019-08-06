// user.jsx student.jsx 以及student和user对应文件夹下的内容都是实现二级路由的例子
import React, {Component} from 'react'; // 固定引入
import { Route, Link } from 'react-router-dom'
// import PropTypes from,'prop-types'
// 
// import UserMain from './user/userMain';
// import UserInfo from './user/userInfo'
export default class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    console.log('user routes',this.props.routes);
    return (
      <div className="content">
          <div className="left">
          <Link to="/user">主面板</Link>
          <Link to="/user/userInfo">用户中心</Link>
          </div>
          <div className="right">
          {this.props.routes.map((route, index) => {
            return (
              <Route exact key={index} path={route.path} component={route.component}></Route>
            )
          })}
            {/* <Route exact path={`${this.props.match.url}/`} component={UserMain}></Route>
            <Route path={`${this.props.match.url}/userInfo`} component={UserInfo}></Route> */}
          </div>
      </div>
    );
  }
}
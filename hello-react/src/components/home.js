import React from 'react'; // 固定引入
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import Students from './students'
// import User from './user'
import routes from '../routes/index'
import '../static/css/home.css'
// 组件写法1 无状态组件
// 无状态组件：1、无需state,即不处理用户的输入，组件的所有的数据都是依赖props传入的 2、不需要用到生命周期函数.
// 无状态组件 写到某一天 想加入生命周期 需要高阶处理 return class xxx extends Component
// let routes = [
//   {path: '/', exact: true},
//   {path: '/students', component: Students},
//   {path: '/user', component: User},
// ]
const Home = (props) => {
  return (
    <BrowserRouter>
      <div className="home">
        Home {'我是home'} {props.homeLink}
      </div>
      <header className="title">
      <Link to="/">首页</Link>
        <Link to="/students">学生中心</Link>
        <Link to="/user">个人中心</Link>
      </header>
      {routes.map((route, index) => {
        if (route.exact) {
          return (
            //  <Route key={index} path={route.path} exact component={route.component}></Route>
            <Route key={index} path={route.path} exact render={props => (<route.component {...props} routes={route.routes}/>)} />
          )
        } else {
          return (
            // <Route key={index} path={route.path} component={route.component}></Route>
            <Route key={index} path={route.path} render={props => (<route.component {...props} routes={route.routes}/>)} />
          )
        }
      })}
    </BrowserRouter>
  );
}

export default Home
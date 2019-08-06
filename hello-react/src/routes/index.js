import Students from './../components/students'
import User from './../components/user'
import Home from './../components/home'
import UserMain from './../components/user/userMain';
import UserInfo from './../components/user/userInfo'
let routes = [
    {path: '/Home', component: Home, exact: true},
    {path: '/students', component: Students},
    {path: '/user', component: User,routes: [
        {path: '/user', component: UserMain},
        {path: '/user/userInfo', component: UserInfo}
    ]},
]
export default routes;
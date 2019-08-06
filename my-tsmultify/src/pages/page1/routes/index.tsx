import DefaultHome from '@/pages/page1/components/contentChild/defaultHome'
import MySubmitApproval from '@/pages/page1/components/approval/mySubmitApproval'
import AnotherApproval from '@/pages/page1/components/approval/anotherApproval'
import AttentionApproval from '@/pages/page1/components/approval/attentionApproval'
import SubordinatesApproval from '@/pages/page1/components/approval/subordinatesApproval'
import PageJump from '@/pages/page1/components/approval/pageJump'
import FinishApproval from '@/pages/page1/components/approval/finishApproval'
import NewsApproval from '@/pages/page1/components/approval/newsApproval'
import RedirectProject from '@/pages/page1/components/approval/redirectProject'
import TestTabs from '@/pages/page1/components/approval/testTabs'
import NoMatch from '@/baseComponent/redirect/noMatch'
import TestPage2 from '@/pages/page2/components/testPage2'
import Loading from '@/baseComponent/outBox/loading'
import Login from '../components/login'
import Main from '../components/main'
let routes = [
    {path: '/login', component: Login},
    {path: '/main', component: Main, children:[
        {path: '/main', component: DefaultHome, exact: true},
        {path: '/main/mySubmitApproval', component: MySubmitApproval},
        {path: '/main/anotherApproval', component: AnotherApproval},
        {path: '/main/attentionApproval', component: AttentionApproval},
        {path: '/main/subordinatesApproval', component: SubordinatesApproval},
        {path: '/main/pageJump', component: PageJump},
        {path: '/main/finishApproval', component: FinishApproval},
        {path: '/main/redirectProject', component: RedirectProject},
        {path: '/main/testTabs', component: TestTabs},
        {path: '/main/testPage2', component: TestPage2},
        {path: '/main/loading', component: Loading},
        {path: '/main/newsApproval/:titleId', component: NewsApproval},
    ]},
    {component: NoMatch}

]
export default routes;
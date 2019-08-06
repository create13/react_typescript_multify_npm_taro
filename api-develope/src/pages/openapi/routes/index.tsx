import DefaultHome from '@/pages/openapi/components/contentChild/defaultHome'
import DocumentCenter from '@/pages/openapi/components/approval/documentCenter'
import ErrorCode from '@/pages/openapi/components/approval/errorCode'
import TypeDetails from '@/pages/openapi/components/approval/typeDetails'
import NoMatch from '@/baseComponent/redirect/noMatch'
// import TypeDescription from '@/pages/openapi/components/approval/typeDescription'
import TypeFixed from '@/pages/openapi/components/approval/typeFixed'
import ClaimList from '@/pages/openapi/components/approval/claimList'
import TabsControl from '@/pages/openapi/components/approval/tabsControl'
import ApiTest from '@/pages/openapi/components/approval/apiTest'
import Loading from '@/baseComponent/outBox/loading'
import Main from '../components/main'
import ApiDocument from '@/pages/openapi/components/approval/apiDocument'
import CustomField from '@/pages/openapi/components/approval/customField'
import SdkDirections from '@/pages/openapi/components/approval/sdkDirections'
let routes = [
    {path: '/apiTest/:apiId/:projectId', component: ApiTest},
    {path: '/', component: Main, children:[
        {path: '/', component: DefaultHome, exact: true},
        {path: '/documentCenter', component: DocumentCenter},
        {path: '/sdkDirections', component: SdkDirections},
        {path: '/loading', component: Loading},
        {path: '/errorCode/:errorId', component: ErrorCode},
        // {path: '/typeDescription', component: TypeDescription},
        {path: '/apiDocument/:apiId', component: ApiDocument},
        {path: '/claimList', component: ClaimList},
        {path: '/tabsControl', component: TabsControl},
        {path: '/typeDetails/:typeId/:moduleId', component: TypeDetails},
        {path: '/typeFixed', component: TypeFixed},
        {path: '/customField/:customId/:customType/:customDes/:moduleName', component: CustomField}
    ]},
    {component: NoMatch}

]
export default routes;
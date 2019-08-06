import {language} from '@/utils/api/index'
import store from '@/store'
import { lanStorage } from '@/store/actionCreators'
const mulLanguage = (fileName: string) => {
    language({
        serviceName: 'wts',
        companyCode: 10001,
        lanType: fileName
    }).then((res: any) => {
        if (res.data.entityItems.length > 0) {
            const action = lanStorage(res.data.entityItems);
            store.dispatch(action);
        }
    }).catch((err: any) => {
        console.log('err', err)
    })
}
export default mulLanguage;
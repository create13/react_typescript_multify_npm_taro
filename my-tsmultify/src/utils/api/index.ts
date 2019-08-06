import myAxios from './axios'
// export const shopList = () => myAxios({url: 'api/shop', type: 'get', loading: true});
export const blueData = (params: any) => myAxios({url: 'http://mock-api.com/3Egd0XgM.mock/blueData.do', params, type:'put',loading: true})
export const addData = () => myAxios({url: 'http://mock-api.com/3Egd0XgM.mock/addBlue.do', type:'delete',loading: false})
export const language = (params: any) => myAxios({url: 'http://192.168.1.194:8080/api', type:'get',params,loading: false})

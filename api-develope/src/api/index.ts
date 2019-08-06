import myAxios from './axios'
// const apiName = 'http://106.12.78.166:12345/api/'
// const apiName = 'http://192.168.5.49:12345/api/'
const apiName = 'http://192.168.1.212:8200/api/'
export const getApiList = () => myAxios({url: `${apiName}project/getProjectModules`, type:'post',loading: true}) // 获取左侧模块
export const getModel = (params: any) => myAxios({url: `${apiName}module/GetApisAndModels`, type:'post',params, loading: true})
export const getErrCode = (params: any) => myAxios({url: `${apiName}ErrorCode/GetErrorCodes`, type:'post',params, loading: true})
export const getApiMenu = (params: any) => myAxios({url: `${apiName}info/GetApiInfo`, type:'post',params, loading: true})
export const getModelParams = (params: any) => myAxios({url: `${apiName}model/GetModelParams`, type:'post',params, loading: true})
export const getErrorCodesTree = () => myAxios({url: `${apiName}ErrorCode/GetErrorCodesTree`, type:'post', loading: true})
export const getApi = (params: any) => myAxios({url: `${apiName}module/GetApis`, params, type:'post', loading: true})
export const getApiTest = (params: any) => myAxios({url: `${apiName}sandbox/GetInitData`, params, type:'post', loading: true})
export const getApiParams = (params: any) => myAxios({url: `${apiName}sandbox/GetApiParams`, params, type:'post', loading: true})
export const getGiveData = (params: any) => myAxios({url: `${apiName}sandbox/ExcuteTest`, params, type:'post', loading: true})
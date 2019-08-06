import axios from 'axios'
interface axiosType {
    url: string,
    params?: any,
    type?: string
}
const myAxios = function (url: string = '', params: any = {}, type: string = 'GET') {
    let promise: any;
    return new Promise((resolve, reject) => {
        if (type.toUpperCase() === 'GET') {
            let paramsStr = '';
            Object.keys(params).forEach((key: any) => {
                paramsStr += `${key} = ${params[key]}&`
            })
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            url = `${url}?${paramsStr}`
            promise = axios.get(url);
        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url, params);
        }
        promise.then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err)
        })
    })
}
export default myAxios;
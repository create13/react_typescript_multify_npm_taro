import axios from 'axios'
export default function myaxios (url='', params = {}, type= 'GET') {
    let promise;
    return new Promise((resolve, reject) => {
        // 判断请求的方式
        if (type.toUpperCase() === 'GET') {
            // 拼接字符串
            let paramsStr = '';
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&'
            })
            // 过滤掉最后的&
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            url += '?' + paramsStr;
            console.log(url);
            promise = axios.get(url);
        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url, params)
        }
        // 返回结果
        promise.then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err)
        })
    })
}
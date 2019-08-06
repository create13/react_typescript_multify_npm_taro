import axios from 'axios'
import qs from 'qs'
import store from '@/store/index'
import { changeLoading } from '@/store/actionCreators'
const myAxios = function (options:ajaxOption) {
    let promise: any;
    if (options.loading) {
        const action = changeLoading(true);
        store.dispatch(action);
    }
    return new Promise((resolve, reject) => {
        if (options.type.toUpperCase() === 'GET') {
            let paramsStr = '';
            if (options.params && Object.keys(options.params).length > 0) {
                Object.keys(options.params).forEach((key: any) => {
                    paramsStr += `${key}=${options.params[key]}&`
                })
            } else {
                paramsStr = ''
            }
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
                options.url = `${options.url}?${paramsStr}`
                console.log('options.url', options.url)
            }
            promise = axios.get(options.url);
        } else if (options.type.toUpperCase() === 'POST') {
            promise = axios.post(options.url, options.params);
        } else if (options.type.toUpperCase() === 'PUT') {
            promise = axios.put(options.url, qs.stringify(options.params));
        } else if (options.type.toUpperCase() === 'DELETE') {
            promise = axios.delete(options.url, options.params);
        }
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
        promise.then((res: any) => {
            resolve(res);
            const action = changeLoading(false);
            store.dispatch(action);
        }).catch((err: any) => {
            reject(err)
        })
    })
}
export default myAxios;
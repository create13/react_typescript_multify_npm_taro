import myaxios from './axios'
// const BASE_URL = 'http://localhost:3200/api'
// const BASE_URL = '/api';
// console.log('BASE_URL', BASE_URL);
export const shopList = () => myaxios('api/shop');
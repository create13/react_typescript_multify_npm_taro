import md5 from 'md5';
import { Base64 } from 'js-base64';
import CryptoJS from 'crypto-js'
/**
 * @description: md5加密
 * @param {any} 任意类型的加密参数 包含空字符串
 * @return {string} md5加密后的字符串
 */
const md5Encode = (config ?:any) => {
    return md5(config);
}
/**
 * @description: base64加密
 * @param {any} 任意类型的加密参数 空字符串 不会执行加密
 * @return {string} base64加密后的字符串
 */
const base64Encode = (config ?:any) => {
    return Base64.encode(config);
}
/**
 * @description: base64解密
 * @param {string} 必填
 * @return {string} base64加密后的字符串
 */
const base64Decode = (config: any) => {
    return Base64.decode(config);
}
/**
 * @description: AES加密
 * @param {any} 必填
 * @return {string} AES加密
 */
const aesEncode = (config?: any) => {
        typeof config.params === 'string'? config.params = config.params: config.params = JSON.stringify(config.params);
        let encrypted = CryptoJS.AES.encrypt(config.params, CryptoJS.enc.Utf8.parse(config.key), {
            iv: CryptoJS.enc.Latin1.parse(config.iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
}
/**
 * @description: AES解密
 * @param {any} 必填
 * @return {string} AES加密
 */
const aesDecode = (config?: any) => {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(config.params);
    let encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypted = CryptoJS.AES.decrypt(encryptedBase64Str, CryptoJS.enc.Utf8.parse(config.key), {
        iv: CryptoJS.enc.Latin1.parse(config.iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('decrypted', decrypted)
    return decrypted.toString(CryptoJS.enc.Utf8);
}
export default {
    md5Encode,
    base64Encode,
    base64Decode,
    aesEncode,
    aesDecode
}
const md5 = require('md5');
const button = require('./button');
console.log('md5', md5);
const md5Encode = (config) => {
    return md5(config);
}
module.exports = {
    md5Encode,
    button
};
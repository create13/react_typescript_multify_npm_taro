const React = require('react');
let Button = 
    function (react$Component) {
    console.log('react$Component.prototype', react$Component.prototype);
    _inherit(Button, react$Component)
    function Button (props) {
        console.log('props', props);
    }
    return Button;
    }(React.Component)
    function _inherit (sub, sup) {
        console.log('sup.prototype', sup.prototype);
        console.log('sub.prototype', sub.prototype);
        if (typeof sup !== 'function' && sup !== null) {
            throw new TypeError('sup should be a function');
        }
        sub.prototype = Object.create(sup.prototype);
    }
module.exports = Button;
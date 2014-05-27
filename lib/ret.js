var curry = require('./curry');
var bind = require('./bind');
var id = require('./id');

var ret = curry(bind, 2)(id);

module.exports = ret;

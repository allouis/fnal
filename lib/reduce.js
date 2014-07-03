var curry = require('./curry');
var each = require('./each');

var reduce = function (val, fn, list) {
  each(function (item, i, list) {
    val = fn(val, item, i, list); 
  }, list);
  return val;
};

module.exports = curry(reduce);

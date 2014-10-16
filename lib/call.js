var curry = require('./curry');

var call = function (fn, val) {
  return fn(val);
};

module.exports = curry(call);

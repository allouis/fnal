var curry = require('./curry');

var iff = function (cond, fn) {
  var f = function (arg) {
    if(cond.apply(null, arguments)) {
      return fn.apply(null, arguments);
    }
    return arg;
  };
};

module.exports = curry(iff);

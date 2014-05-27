var curry = require('./curry');

var iff = function (cond, fn) {
  var f = function () {
    if(cond.apply(null, arguments)) {
      fn.apply(null, arguments);
    }
  };
};

module.exports = curry(iff);

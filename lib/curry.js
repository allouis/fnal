var bind = require('./bind');
var array = require('./array');

var curry = function (fn, argl) {
  argl = argl || fn.length;
  var f = function () {
    if (arguments.length >= argl) {
      return fn.apply(null, arguments);
    } else {
      var curried = bind.apply(null, [fn].concat(array(arguments)));
      return curry(curried, argl - arguments.length);
    }
  };
  return f;
};

module.exports = curry;

var rest = require('./rest');
var array = require('./array');

var bind = function (fn /* arguments */) {
  var args = rest(arguments);
  var f = function () {
    return fn.apply(null, args.concat(array(arguments)));
  };
  return f;
};

module.exports = bind;

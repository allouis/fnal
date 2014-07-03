var each = require('./each');
var push = require('./push');

var map = function (fn, list) {
  var mapped = [];
  each(function (item, i, list) {
    push(mapped, fn(item, i, list));
  }, list)
  return mapped;
};

module.exports = curry(map);

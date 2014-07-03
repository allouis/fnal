var curry = require('./curry');
var each = require('./each');
var iff = require('./iff');
var push = require('./push');


var filter = function (fn, list) {
  var filtered = [];
  each(iff(fn, push(filtered)), list);
  return filtered;
};

module.exports = curry(filter);

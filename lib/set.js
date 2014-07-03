var curry = require('./curry');

var set = function (key, obj, val) {
  return obj[key] = val, obj;
};

module.exports = curry(set);

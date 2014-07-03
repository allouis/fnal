var curry = require('./curry');

var each = function (fn, list) {
  for (var i = 0, l = list.length; i < l; i++) {
    fn(list[i], i, list);
  }
  return list;
};

module.exports = curry(each);

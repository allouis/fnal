var curry = require('./curry');

var push = function (list, item) {
  return list.push(item), list;
};

module.exports = curry(push);

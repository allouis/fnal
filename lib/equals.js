var curry = require('./curry');

var equals = function (a, b) {
  return a === b;
};

module.exports = curry(equals);

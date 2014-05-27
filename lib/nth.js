var curry = require('./curry');

var nth = function (n, arr) {
  if (n < 0 || n > arr.length) {
    return null;
  }
  return arr[n];
};

module.exports = curry(nth);

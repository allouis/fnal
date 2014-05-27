var rest = function (arr) {
  return Array.prototype.slice.call(arr, 1);
};

module.exports = rest;

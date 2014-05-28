var lib = require('./lib');

module.exports = exports = lib;

exports.global = function () {
  Object.keys(lib).forEach(function (key) {
    if (key !== 'global') {
      GLOBAL[key] = lib[key];
    }
  });
};

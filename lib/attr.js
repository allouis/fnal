var exists = require('./exists');
var curry = require('./curry');

var attr = function (attrs, obj) {
  var parts = attrs.split('.');
  var val = obj[parts.shift()];
  if (!exists(val)) {
    return null;
  }
  if (parts.length) {
    return attr(parts.join('.'), val);
  } else {
    return val;
  }
};

module.exports = curry(attr);

var compose = function (/* fns */) {
  var fns = arguments;
  var f = function () {
    var args = arguments;
    var length = fns.length;

    while (length--) {
      args = [fns[length].apply(null, args)];
    }

    return args[0];
  };
  return f;
};

module.exports = compose;

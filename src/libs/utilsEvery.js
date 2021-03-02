const utilsEveryModule = ((Array) => {
  Array.prototype.myEvery = function (cb) {
    var _arr = this;
    var _len = _arr.length;
    var _arg2 = arguments[1] || window;
    var _res = true;

    for (var i = 0; i < _len; i++) {
      if (!cb.apply(_arg2, [_arr[i], i, _arr])) {
        _res = false;
        break;
      }
    }

    return _res;
  };
})(Array);

export default utilsEveryModule;

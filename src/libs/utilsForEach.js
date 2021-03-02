const utilsForEachModule = ((Array) => {
  Array.prototype.myForEach = function (cb) {
    var _arr = this;
    var _len = _arr.length;
    var _arg2 = arguments[1] || window;

    for (var i = 0; i < _len; i++) {
      cb.apply(_arg2, [_arr[i], i, _arr]);
    }
  };
})(Array);

export default utilsForEachModule;

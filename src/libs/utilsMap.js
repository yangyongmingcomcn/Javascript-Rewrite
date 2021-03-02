const utilsMapModule = ((Array) => {
  function deepClone(origin, target) {
    var tar = target || {};
    var toStr = Object.prototype.toString;
    var arrayType = "[object Array]";

    for (var key in origin) {
      if (origin.hasOwnProperty(key)) {
        if (typeof origin[key] === "object" && origin[key] !== null) {
          tar[key] = toStr.call(origin[key]) === arrayType ? [] : {};
          deepClone(origin[key], tar[key]);
        } else {
          tar[key] = origin[key];
        }
      }
    }
    return tar;
  }

  Array.prototype.myMap = function (cb) {
    var _arr = this;
    var _len = _arr.length;
    var _arg2 = arguments[1] || window;
    var _newArr = [];
    var _item;
    var _res;

    for (var i = 0; i < _len; i++) {
      _item = deepClone(_arr[i]);
      _res = cb.apply(_arg2, [_item, i, _arr]);
      _res && _newArr.push(_res);
    }

    return _newArr;
  };
})(Array);

export default utilsMapModule;

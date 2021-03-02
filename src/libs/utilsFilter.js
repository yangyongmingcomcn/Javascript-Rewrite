const utilsFilterModule = (() => {
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

  Array.prototype.myFilter = function (cb) {
    var _arr = this;
    var _len = _arr.length;
    var _arg2 = arguments[1] || window;
    var _newArr = [];
    var _item;

    for (var i = 0; i < _len; i++) {
      _item = deepClone(_arr[i]);
      cb.apply(_arg2, [_item, i, _arr]) ? _newArr.push(_item) : "";
    }

    return _newArr;
  };
})();

export default utilsFilterModule;

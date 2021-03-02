const utilsBindModule = ((Function) => {
  Function.prototype.myCall = function (ctx) {
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this;

    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push(`arguments[${i}]`);
    }

    var rat = eval(`ctx.originFn(${args})`);
    delete ctx.originFn;
    return rat;
  };

  Function.prototype.myApply = function (ctx, args) {
    if (typeof args !== "object" && typeof args !== "function") {
      throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this;

    if (!args || typeOf(args) !== "Array") {
      return ctx.originFn();
    }

    var rat = eval(`ctx.originFn(${args})`);
    delete ctx.originFn;
    return rat;
  };

  Function.prototype.myBind = function (ctx) {
    var originFn = this;
    var args = [].slice.myCall(arguments, 1);
    var _tempFn = function () {};

    var newFn = function () {
      var newArgs = [].slice.myCall(arguments); // 类数组转换为数组

      return originFn.myApply(
        this instanceof newFn ? this : ctx,
        args.concat(newArgs)
      );
    };

    // newFn.prototype = this.prototype; 避免共用原型，圣杯模式
    _tempFn.prototype = this.prototype;
    newFn.prototype = new _tempFn();

    return newFn;
  };

  function myNew() {
    var constructor = [].shift.call(arguments);
    var _this = {};

    _this.__proto__ = constructor.prototype;
    var res = constructor.apply(_this, arguments);

    return typeOf(res) === "Object" ? res : _this;
  }

  function typeOf(value) {
    if (value === null) return "null";
    return typeof value === "object"
      ? {
          "[object Array]": "Array",
          "[object String]": "String",
          "[object Object]": "Object",
          "[object Number]": "Number",
          "[object Boolean]": "Boolean",
        }[{}.toString.call(value)]
      : typeof value;
  }

  /**
   * var arr = [];
   * arr instanceof Array -> true;
   * arr instanceof Object -> true;
   * arr.__proto__ === Array.prototype -> true;
   * arr.__proto__.__proto__ === Object.prototype -> true;
   */
  function instanceOf(target, type) {
    target = target.__proto__;
    type = type.prototype;

    while (true) {
      if (target === null) return false;
      if (target === type) return true;

      target = target.__proto__;
    }
  }

  return { myNew, typeOf, instanceOf };
})(Function);

export default utilsBindModule;

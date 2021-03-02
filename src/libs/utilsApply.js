const utilsApplyModule = ((Function) => {
  // context -> ctx 执行上下文
  Function.prototype.myApply = function (ctx, args) {
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this; // this -> test

    if (typeof args !== "object" && typeof args !== "function") {
      throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    if (!args || typeOf(args) !== "Array") {
      return ctx.originFn();
    }

    var rat = eval("ctx.originFn(" + args + ")");

    delete ctx.originFn;

    return rat;
  };
})(Function);

function typeOf(value) {
  if (value === null) {
    return "null";
  }

  return typeof value === "object"
    ? {
        "[object Object]": "Object",
        "[object Array]": "Array",
        "[object Number]": "Number",
        "[object String]": "String",
        "[object Boolean]": "Boolean",
      }[{}.toString.call(value)]
    : typeof value;
}

export default utilsApplyModule;

const utilsCallModule = ((Function) => {
  // context
  Function.prototype.myCall = function (ctx) {
    ctx = ctx ? Object(ctx) : window;
    ctx.originFn = this; // this -> test

    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push("arguments[" + i + "]");
    }

    // "" + args + "" -> arguments[1],arguments[2]

    var rat = eval("ctx.originFn(" + args + ")");

    delete ctx.originFn;

    return rat;
  };
})(Function);

// const utilsCallModule = ((Function) => {
//   Function.prototype.myCall = function (ctx) {
//     ctx = ctx ? Object(ctx) : window;
//     ctx.originFn = this;

//     var args = [];
//     for (var i = 1; i < arguments.length; i++) {
//       args.push(`arguments[${i}]`);
//     }

//     var rat = eval(`ctx.originFn(${args})`);
//     return rat;
//   };
// })(Function);

export default utilsCallModule;

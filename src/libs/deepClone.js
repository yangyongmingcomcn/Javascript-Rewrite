const utilsDeepCloneModule = ((Function) => {
  Function.prototype.deepClone = function (origin, target) {
    var tar = target || {};
    var toStr = Object.prototype.toString;
    var arrayType = "[object Array]";

    for (var key in origin) {
      if (origin.hasOwnProperty(key)) {
        if (typeof origin[key] === "object" && origin[key] !== null) {
          tar[key] = toStr.call(origin[key]) === arrayType ? [] : {};
          Function.prototype.deepClone(origin[key], tar[key]);
        } else {
          tar[key] = origin[key];
        }
      }
    }

    return tar;
  };
})(Function);

export default utilsDeepCloneModule;

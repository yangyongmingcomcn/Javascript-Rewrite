// import utilsCallModule from "./libs/utilsCall";
// import utilsApplyModule from "./libs/utilsApply";
import utilsMapModule from "./libs/utilsMap";
import utilsBindModule from "./libs/utilsBind";
import utilsEveryModule from "./libs/utilsEvery";
import utilsFilterModule from "./libs/utilsFilter";
import utilsDeepCloneModule from "./libs/deepClone";
import utilsForEachModule from "./libs/utilsForEach";

const { myNew, typeOf, instanceOf } = utilsBindModule;

// ES6模块中，自动使用严格模式，直接调用test，use strict, this -> undefined
// else this -> window

// function test() {
//   return `name: ${this.name}, age: ${arguments[0]}, size: ${arguments[1]}`;
// }

// test.prototype.phone = "18112345678";

// let obj = { name: "zhangsan" };

// call
// let message = test.myCall(obj, 4, 18);

// apply
// let message = test.myApply(obj, [4, 18]);

// bind
// let retText = test.myBind(obj, 4);
// let message = retText(5);

// new
// function Test(a, b) {
//   this.a = a;
//   this.b = b;

//   return {
//     c: 3,
//     d: 4,
//   };
// }

// Test.prototype.add = function () {
//   return this.a + this.b;
// };

// const newTest = new Test(1, 2);

// var newTest = myNew(Test, 1, 2);

// console.log(newTest);

// instanceof
// class Test {}

// var test = new Test();

// console.log(instanceOf(test, Test));

// deepClone

const obj = {
  name: "小明同学",
  age: 24,
  career: "CV工程师",
  info: {
    field: ["JS", "CSS", "HTML"],
    framework: ["React", "Vue", "Angular"],
    student: [
      { name: "张三", age: "20" },
      { name: "李四", age: "30" },
    ],
  },
  date: { travel: "2020-12-07", teach: "2020-12-08" },
};

// const message = Function.deepClone(obj, {});
// message.name = "小红同学";
// console.log(obj);

// forEach

const array = [
  { name: "张三", age: 20 },
  { name: "李四", age: 22 },
  { name: "王五", age: 19 },
];

// array.myForEach(function (item, index, array) {
//   console.log(this);
//   console.log(item, index, array);
// }, obj);

// map

// const message = array.myMap(function (item, index, array) {
//   console.log(this);
//   console.log(item, index, array);
//   return item.name
// }, obj);

// filter

// const message = array.myFilter(function (item, index, array) {
//   console.log(this);
//   console.log(item, index, array);
//   return item.age > 20;
// }, obj);

// every

const message = array.myEvery(function (item, index, array) {
  console.log(this);
  console.log(item, index, array);
  return item.age < 1;
}, obj);

console.log(message);

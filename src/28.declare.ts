// export { }
// import $ from 'jquery'
// 声明文件 .d.ts结尾（规范）
// 声明的都是全局的变量
// 使用declare 只是让我们的代码有提示功能
// 声明文件的作用： 使用声明文件，才能获得对应的代码补全、接口提示等功能

// 1. 普通的类型声明
// declare let a: string; // 声明变量
// declare function sum(...args: any[]): void //声明函数
// declare class Animal { }

// $('#app').height(199)

/**
 * node模块路径查找规则
 * 1. 相对路径的查找
 * import getName from './utils/index'
 * > 按照路径查找看是否有index.ts这个文件
 * > 如果相对目录下
 * 
 */

//扩展全局变量 (同名接口会进行合并的特性)

//1. 在全局下（没有export/import关键词）扩展
// 1>给String构造函数扩展一个double方法
// interface String {
//   double(): string;
// }

// String.prototype.double = function () {
//   return this + '+' + this;
// }
// console.log('hello'.double());

// // 2>. 给window扩展xxName属性
// interface Window {
//   xxName: string
// }
// window.xxName = 'xxName'
// console.log(window.xxName);


// 模块中扩展全局变量
// 文件中有export import关键字
export {}

declare global {
   // 给全局的String构造函数扩展了一个原型方法double
   interface String {
     double: ()=>string
   }
   // 给全局变量window扩展了myName属性
   interface Window{
     myName:string
   }
}
String.prototype.double = function ():string{
  return this + '' + this;
}
window.myName = 'zf'
console.log('hello'.double());
console.log(window.myName);


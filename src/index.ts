// 类型保护
// 就是通过一些表达式（js的，ts的）来判断类型，确保类型的正确性
// js的： typeof instanceof in

// 1. typeof
export {}
function getType(name:string | number){
  if(typeof name === 'string'){
    name
  }else{
    name
  }
}

// instanceof
class Cat {}
class Dog {}
type Clazz<T> = {
  new (): T
}
function getInstance<T>(clzz:Clazz<T>):T{
  return new clzz()
}
let instance = getInstance(Cat)
if(instance instanceof Cat){
  instance
}
if(instance instanceof Dog){
  instance
}

// in
// JavaScript的in操作符可以用来判断一个属性是否属于一个对象
interface Fish {
  swiming: string
}
interface Bird {
  fly: string
}
function getTypeByIn(value: Fish | Bird){
   // value是一个对象，有swiming属性或者fly
   // 有swiming属性就是Fish类型的，有fly属性就是Bird类型的
   if('swiming' in value){
     value // Fish
   }
   if('fly' in value){
     value // Bird
   }
}

// ---------------------ts特有的
// 1. 可辨识的联合类型
interface Button1{
  type: 'warning' // 'warning'是字面量类型，值必须也是'warning'，可以作为标识
  click:string
}
interface Button2 {
  type: 'success',
  change: string
}
// 联合类型，都有自己特有的标识，根据标识识别是哪个类型
type Button = Button1 | Button2;
function getButton(button: Button){
  // 这里的'success'是值，因为Button2中的type属性的类型是字面量类型'success'
  // 字面量类型的类型和值是一样的，可以作为判断的标识
  if(button.type === 'success'){ 
    button // Button2
  }
  if(button.type === 'warning'){
    button // Button1
  }
}
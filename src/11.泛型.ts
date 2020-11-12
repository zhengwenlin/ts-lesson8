export { }
// 泛型
// 泛型就是在声明的时候不给具体的类型，在使用的时候传入具体的类型

//1. 函数使用泛型
//希望传入什么类型数据，返回什么类型数据的数组
//函数名字后边 <T>是声明泛型，相当于let T = unknown，在参数返回值位置是使用泛型
// function createArray<T>(length: number, val: T): T[] {
//   let result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result.push(val)
//   }
//   return result;
// }
// 1. 调用函数的时候，传入具体的类型，比如string，那么
// val:T -> val:string, 那么第二个参数就必须是string类型
// let arr = createArray<string>(3, 'xx')
// 2. 调用函数时，不传入具体的类型，让ts自己推断，推断结果：number[]
// 因为函数的第二个参数使用了泛型T，传入的100是number类型，ts就推断
// T的类型是number
// let arr2 = createArray(3, 100)

// 函数表达式的写法
// interface IMycreateArray {
//   <T>(count: number, val: T): T[]
// }
// const createArray: IMycreateArray = function <T>(count: number, val: T): T[] {
//   let result: T[] = []
//   for (let i = 0; i < count; i++) {
//     result.push(val)
//   }
//   return result;
// }
// let arr = createArray<string>(6, 'hello')


//2. 接口使用泛型

// function swap<T, K>(val: [T, K]): [K, T] {
//   return [val[1], val[0]]
// }
// let r = swap(['hello', 100])

// 两种写法
//1.泛型定义写在接口上，那么在使用接口类型的时候传入具体类型
// interface Myswap<T, K> {
//   (val: [T, K]): [K, T]
// }
// // 在使用接口类型时传入具体类型
// const swap: Myswap<string, number> = <T, K>(val: [T, K]): [K, T] => {
//   return [val[1], val[0]]
// }
// // 调用函数的时候，就不能传入类型了
// let r = swap(['hello', 100])
//2.泛型定义写在里边的函数、类上，那么在调用函数或者类的时候传入具体类型
// interface Myswap {
//   <T, K>(val: [T, K]): [K, T]
// }
// const swap: Myswap = <T, K>(val: [T, K]): [K, T] => {
//   return [val[1], val[0]]
// }
// // 调用传入具体类型，可以让ts自己推断
// let r = swap<string,number>(['hello', 100])


// 3. 类使用泛型

class MyArray<T> {
  public arr: T[] = []
  add(val: T) {
    this.arr.push(val)
  }
  getMax(): T {
    let current: T = this.arr[0]
    for (let i = 1; i < this.arr.length; i++) {
      let item = this.arr[i]
      current = current > item ? current : item;
    }
    return current;
  }
}

let myarr: MyArray<number> = new MyArray();
myarr.add(1)
myarr.add(2)
myarr.add(3)
let max: number = myarr.getMax()
console.log(max);


// 其他用法
// 1. 泛型可以写多个

function getVal<T, K>(a: T, b: K): [K, T] {
  return [b, a]
}
let r2 = getVal<string, number>('zf', 11)

// 2. 默认泛型
// 就是给个默认值
function getStr<T=string>(val: T): T {
  return val;
}
getStr('hello')

//3.泛型约束 extends

// - 希望传入的数据的类型都有length属性
interface ILen {
  length: number;
}
function getType<T extends ILen>(val: T){
  console.log(val);
}
getType('hello') //字符串有length
getType([]) // 数组有length
getType({length:10}) //这个对象有length

// T + T 不能相加的问题
// 运算符“+”不能应用于类型“T”和“T”
function getSum<T extends number>(a:T, b:T):T{
  return (a + b) as T
}
let r3 = getSum(1,2)

// 约束属性， 第二个参数必须是第一个参数key中的一个
function getValue<T extends object, K extends keyof T>(a:T, b:K){

}
getValue({a:1,b:2}, 'a')


// 泛型类型别名
 type ArrayList<T> = {
   [index:number]: T
 }
let arrList: ArrayList<string> = ['a', 'b', 'c']
let arrList2: ArrayList<number> = [1,3,4,5]

// unknown类型

// 1. unknown类型和any类型对比

// 1. 都是ts中的顶级类型
// 2. unknown 是any的安全类型
// 3. unknown 会进行类型检查，any不会进行类型检查
// 4. any就相当于普通的js，放弃了类型检查

export { }
// 1. 任何类型都能赋值给unknown类型
let un1: unknown;
un1 = 100 // number类型赋值给unknown类型
un1 = 'hello' // string类型赋值给unknown类型
un1 = []
un1 = {}
// 2. unknown类型只能赋值给any类型和unknown类型
let un2: unknown;
let s1: any;
s1 = un2; // unknown赋值给any可以
let s2: unknown;
s2 = un2; // unknown赋值给unknown可以
let s3: string = ''
//不能将类型“unknown”分配给类型“string”
//s3 = un2 // 不行


// 3. 缩小unknown类型的范围
// - 为了更好的调用属性和方法
// 1. as 断言
let un6: unknown = [1, 2, 3];
(un6 as any[]).push(10)
// 2. typeof 类型保护
let un7: unknown = 'hello'
if (typeof un7 === 'string') {
  un7.toUpperCase()
}
// 3. instanceof 类型保护
class Person9 {
  say() { }
}
let un8: unknown = new Person9;
if (un8 instanceof Person9) {
  un8.say()
}
//4. 自定义类型保护
interface IMyType3 {
  name: string
}
let t1: IMyType3 = { name: 'zf' }
let un9: unknown = t1
function isIMyType3(val: IMyType3 | unknown): val is IMyType3 {
  return typeof (val as IMyType3).name === 'string'
}
if (isIMyType3(un9)) {
  un9 // IMyType3
}



// unknown类型的其他用法
// 1. 联合类型中使用unknown
type UnionType1 = string | number | unknown
let tt1: UnionType1  // unknown

// 2. 在交叉类型中使用unknown
type Intersecion1 = string  & unknown

// unknown类型的特性
// 1. never是unknown的子类型
type A1 = never extends unknown ? true : false // true

// 2. keyof unknown = never
type KyofUN = keyof unknown; // never

// 3. unknown 只能 === !== ,不能 + - *  /
let unA: unknown;
let unB: unknown;
let flag = unA === unB 
let flag2 = unA !== unB
//let operrator1 = unA + unB

// 4. 不能做任何操作
let unC: unknown;
unC.a
unC()
new unC()
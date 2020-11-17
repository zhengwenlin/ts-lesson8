export { }
// 交叉类型
// & 

// 接口的交叉类型
interface A1 {
  name: string,
  age: number
}
interface A2 {
  name: string,
  gender: number
}
type A3 = A1 & A2

// 联合类型
type B1 = string | number
type B2 = number | boolean;
type B3 = B1 & B2

// mixin

interface Anyobject {
  [key: string]: any
}
// 合并对象mixin
function mixin<T extends Anyobject, U extends Anyobject>(one: T, two: U): T & U {
  let result = {} as T & U
  // one是T类型，result是T&U类型，不能将T类型赋值给T&U类型，as强转成T类型
  for (let key in one) { 
    (result as T)[key] = one[key]
  }
  // 同理强转成U类型
  for (let key in two) {
    (result as U)[key] = two[key]
  }

  return result;
}

mixin({ name: 'zf' }, { age: 11 })
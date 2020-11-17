export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// verwrite  / Merge  / Mutable



// Intersection 交叉
// Intersection<A, B> 找到A,B两个对象中都有的属性，返回一个对象类型
type Extract<T, U> = T extends U ? T : never; // 提取，找出U中，T有的类型
let person1 = {
  name: 'zf',
  age: 11,
  address: '回龙观'
}
let person2 = {
  address: '回龙观',
  child: []
}
// 找出p2中，p1有的属性 address age 
// 找出p1中，p2有的属性 age address
// 
type Intersection<T extends object, U extends object> =  Pick<
  T,
  Extract<keyof T, keyof U>&
  Extract<keyof U, keyof T>
>
type InterPerson = Intersection<typeof person1, typeof person2>

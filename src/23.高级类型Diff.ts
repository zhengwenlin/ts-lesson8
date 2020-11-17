export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// verwrite  / Merge  / Mutable



// 3. Diff 差异
// Diff<A, B>， 从A对象中挑选出B对象中不存在的属性，返回一个对象
type SetDifference<T, K> = T extends K ? never : T; // 从T类型中排除K类型
//1.先找到T中，U没有的属性的key，然后pick挑选这些属性
type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>

interface Person1 {
  name: string
  age: number
  gender: number
}
interface Person2 {
  name: string
  age: number
}
type DiffPerson = Diff<Person1, Person2>
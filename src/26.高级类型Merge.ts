export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// Overwrite  / Merge  / Mutable

// 7. Merge 合并，合并两个对象的类型

// merge对象合并 
let t1 = { name: 'zf', a: 1 };
let t2 = { age: 11, a: 'string' };

type Merge<T, U> = Omit<T, keyof U> & U
type MergeT = Merge<typeof t1, typeof t2>
let mergeT: MergeT = {
  name: 'zf',
  a: 'hello',
  age: 11
}
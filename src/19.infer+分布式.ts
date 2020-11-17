// 条件类型核心在于拆分extends左边的联合类型
// T extends U ?  当T是联合类型 A|B 时，会拆分成： A extends U  /  B extends U

// 1. 元组类型转联合类型
// 其实就是获取元组中每个元素的类型组成的联合类型，可以使用infer推断元素的类型
export { }
type Tp = [string, number, boolean] // 元组类型

// 转成联合类型
type TupeToUni<T extends any[]> = T extends Array<infer E> ? E : never;
type Tu1 = TupeToUni<Tp>


// 2. 联合类型转交叉类型
namespace yr {
  type T1 = { name: string }
  type T2 = { age: number }

  type ToIntersection<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
  type T3 = ToIntersection<{ a: (x: T1) => void, b: (x: T2) => void }>
}
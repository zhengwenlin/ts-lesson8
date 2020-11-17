export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// Overwrite  / Merge  / Mutable

// 6. Overwrite  覆盖
// Overwrite<T, K, I> T是老对象，K是新对象， I是
// Diff<A, B>， 从A对象中挑选出B对象中不存在的属性，返回一个对象
// Intersection<A, B> 找到A,B两个对象中都有的属性，返回一个对象类型
type Intersection<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> &
  Extract<keyof U, keyof T>
>
type SetDifference<T, K> = T extends K ? never : T; // 从T类型中排除K类型
//1.先找到T中，U没有的属性的key，然后pick挑选这些属性
type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>
// 
/**
 * Overwrite
 * @description From `U` overwrite properties to `T`
 * @example
 *   type Props = { name: string; age: number; visible: boolean };
 *   type NewProps = { age: string; other: string };
 *
 *   // Expect: { name: string; age: string; visible: boolean; }
 *   type ReplacedProps = Overwrite<Props, NewProps>;
 */
// 新对象中和老对象同名的属性，会覆盖，老对象没有的，会被忽略
// export type Overwrite<
//   T extends object,
//   U extends object,
//   I = Diff<T, U> & Intersection<U, T>
// > = Pick<I, keyof I>
// 都有的属性以新的为主，老的没有的属性，新的属性会被忽略
// 1. 先找到新的中老的有的属性
// 2. 把老的对象中的这些属性删除了
// 3. 将新的对象中的这些对象放到老的对象中
type Overwrite<
  T extends object, 
  U extends object
> = Omit<T, keyof Intersection<U, T>> & {
  [key in keyof Intersection<U, T>]: U[key] // 取新对象中交叉的属性名，覆盖老的
}
type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };
type ReplacedProps = Overwrite<Props, NewProps>;
// Expect: { name: string; age: string; visible: boolean; }
let pp: ReplacedProps = {
  name: 'zf',
  age: 'hello',
  visible: true
}
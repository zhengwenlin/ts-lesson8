export { }

// 内置条件类型
// Exclude(排除) Extract(提取) NonNullable  ReturnType  Parameters  InstanceType
// infer+分布式

// 1. Exclude 排除
// Exclude<A, B> 从A中排除B
type Exclude<T, U> = T extends U ? never : T
type A = Exclude<string | number | boolean, number>

// 2. Extract 提取
// Extract<A, B> 从A中提取B
type Extract<T, B> = T extends B ? T : never;
type B = Extract<string | number | boolean, number | boolean>


//3. NonNullable 排除null 和 undefined
type NonNullable<T> = T extends null | undefined ? never : T
type C = NonNullable<string | null | number>

// 4. ReturnType 函数返回值的类型
// 从函数的类型中推断某一部分的类型，使用infer（推断）关键字
function getSum(a: number, b: number): number {
  return a + b;
}
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer U ? U : never;
type D = ReturnType<typeof getSum>

// Parameters 获取函数参数的类型 -> 得到一个元祖类型
// infer
// [a: number, b: number]
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never
type E = Parameters<typeof getSum>


// InstanceType 获取一个类的实例类型
class Animal { }
type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer U ? U : never
type F = InstanceType<typeof Animal>
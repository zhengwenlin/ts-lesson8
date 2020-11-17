export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// Overwrite  / Merge  / Mutable

// 8. Mutable 可变的
// Mutable<T> 将 T 的所有属性的 readonly 移除

type Mutable<T extends object> = {
  -readonly [K in keyof T]: T[K]
}
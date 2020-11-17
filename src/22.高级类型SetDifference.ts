export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// verwrite  / Merge  / Mutable



// 2. SetDifference 差集 和Exclude排除完全一样
type SetDifference<T, K> = T extends K ? never : T;
// string | number
type ResultSetMixed = SetDifference<string | number | (() => void), Function>;
// type SetDifference<A, B> = A extends B ? never : A;
// type Exclude<T, U> = T extends U ? never : T;
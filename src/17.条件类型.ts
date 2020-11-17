export { }

// 条件类型

// 在类型中使用三元运算符判断，根据条件返回对应的类型

interface Fish {
  name1: string
}
interface Water {
  name2: string
}
interface Bird {
  name3: string
}
interface Sky {
  name4: string
}
type ConditionType<T> = T extends Fish ? Water : Sky;
type Con1 = ConditionType<Fish> // Water

// 2. 条件类型的分发
// 1> 如果是条件类型，传入的是联合类型，会进行条件分发
// 2> 前提是类型是裸类型
type Con2 = ConditionType<Fish | Bird> // Water | Sky

type Diff<T, U> = T extends U ? never : T;
// "d"
type DiffType = Diff<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'>

type Filter<T, U> = T extends U ? T : never;
// "a" | "b" | "c"
type FilterType = Filter<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'>
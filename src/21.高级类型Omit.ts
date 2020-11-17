export { }

// 自定义高级类型
// Proxy / SetDifference / Omit / Diff  / Intersection  
// verwrite  / Merge  / Mutable



// 3. Omit  删除的意思
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// 先从keyof T中排除掉K类型，然后从T中挑选这些属性
// Omit<T, K>的作用是忽略T中的某些属性
// Omit<T, K>，从T类型中删除K属性，返回的还是一个对象类型
// 思路：怎么删除name和age，用Pick挑选自己想要的属性，挑选什么属性呢？
// 挑选gender属性，怎么获取到gender属性？从name age gender中排除name和age就剩下gender了
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type MM = Omit<{ name: string, age: number, gender: number }, 'name' | 'age'>

// 现在有一个接口，三个属性都是必填的，想让其中的一个变成选填的
interface IPerson {
  name: string,
  age: number,
  gender: number
}
// 想让gender变成选填的
type PartialGender<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P]
}
type PartialG = PartialGender<IPerson, 'gender'>
let partialG1: PartialG = {
  name: 'zf',
  age: 11
}
let partialG2: PartialG = {
  name: 'zf',
  age: 11,
  gender: 1
}
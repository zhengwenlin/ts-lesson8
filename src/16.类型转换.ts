export { }
//1. typeof 获取一个值的类型
let obj = { name: 'zf' }
// 获取obj的类型
type ObjType = typeof obj

// 2. 索引访问符
// 通过[]的方式取一个类型的子类型
type Tb1 = {
  name: string
  age: number
  children: {
    a: {
      name: string
      parent: unknown
    }
  }
}
// 通过类似取值一样的方式取类型
/**
 * {
      name: string;
      parent: unknown;
   }
 */
type SubTb1 = Tb1['children']['a']

// 3. keyof 关键字
// 获取一个类型的属性key组成的字面量联合类型
interface IKyofType {
  name: string
  school: string
}
// "name" | "school"
type KeyofIType = keyof IKyofType

// 4. 映射类型
interface IKyofType2 {
  name: string
  school: string
}
type IKyofType3 = {
  [key in keyof IKyofType2]?: IKyofType2[key]
}
// Partial 的实现
type Partial<T> = {
  [key in keyof T]?: T[key]
}
type MMM = Partial<IKyofType2>
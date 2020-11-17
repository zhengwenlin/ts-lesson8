export { }
// 内置工具类型
// Partial Required Readonly Pick Record

// 1. Partial 将属性变成可选
interface Person {
  name: string,
  age: number
}
// 操作的是属性，遍历属性用in操作符
type Partial<T> = {
  [key in keyof T]?: T[key]
}
type PartialPerson = Partial<Person>

// 递归Partial
namespace P1 {
  interface Compony {
    address: string
  }
  interface Person {
    name: string,
    age: number,
    compony: Compony
  }
  // 属性的类型可能是一个自定义类型
  type DeepPartial<T> = {
    [key in keyof T]: T[key] extends object ? DeepPartial<T[key]> : T[key]
  }
  type DeepParPerson = DeepPartial<Person>
}

// 2. Required 将类型所有属性变成必选
namespace P2 {
  interface Person {
    name: string,
    age?: number
  }
  type RequirePerson<T> = {
    [key in keyof T]-?: T[key]
  }
  type RePerson = RequirePerson<Person>
}

// 3. Readonly 将所有的属性变成只读
namespace P3 {
  interface Person {
    readonly name: string,
    age: number
  }
  type Require<T> = {
    readonly [key in keyof T]: T[key]
  }
  type Person2 = Require<Person>
}

// 4. Pick 精挑细选（选属性）
// Pick<A, B> 从A类型中挑选出B属性，返回值是一个有B属性的对象类型
namespace P4 {
  interface Person {
    name: string,
    age: number,
    gender: number
  }
  // type Pick<T, K extends keyof T> = {
  //   [key in K]: T[key] extends T ? T[key] : never
  // }
  type PickPerson = Pick<Person, 'age' | 'gender'>
}

// 5. Record 记录类型
// 将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
// Record<K, U> 得到一个 key是K类型，类型是U的任意属性对象类型
namespace P5 {
  interface Person {
    age: number,
    gender: number
  }
  type Record<K extends keyof any, T> = {
    [P in K]: T
  }
  type M1 = Record<keyof Person, Person>

  function mapObject<K extends keyof any, T, U>(obj: Record<K, T>, cb: (item: T) => U) {
    let result = {} as Record<K, U>
    for (let key in obj) {
      result[key] = cb(obj[key])
    }
    return result
  }
  let obj: Person = {
    age: 11,
    gender: 1
  }
  let map: (item: number) => string = (item: number) => item * 2 + ''
  let r = mapObject(obj, map)

  // Record<K, T> K是属性key的类型， T是值的类型，返回一个对象类型
  // 1. 如果K是字面量类型，返回的对象中key的值就是字面量的值（写死了），
  // key对应的类型就是T的类型
  /**
   * type M3 = {
        age: string;
        gender: string;
     }
   */
  type M3 = Record<"age" | "gender", string>
  //2. 如果K的类型是一般类型(非字面量类型)，得到的就是key为K类型，值为T类型的任意类型
  /**
   * type M4 = {
        [x: string]: string;
        [x: number]: string;
     }
   */
  type M4 = Record<string | number, string | any[]>
}


// interface Animal {
//   age: number
// }
// let glbalAnimal: Animal = {
//   name: 'zf',
//   age: 11
// }

export { }
// namespace 可扩展类、函数、枚举
//1.扩展类
class SetA {
  name: string = 'zf'
  age: number = SetA.age
}
namespace SetA {
  export const age = 11
}
let setA: SetA = new SetA;
setA.name
setA.age

//2.扩展函数
function getName(val: any): any {

}
namespace getName {
  export let xxx = 100
}
getName.xxx

// 3. 扩展枚举
enum Color {
  Red = 1,
  Pink = 2
}
namespace Color {
  export let Yellow = 3
}

console.log(Color.Yellow);

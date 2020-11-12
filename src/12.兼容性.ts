// 兼容性
export {}
// 1. 接口的兼容性
/**
 * 如果传入的变量和声明的类型不匹配，TS就会进行兼容性检查
   原理是Duck-Check,就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的
 */
interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  gender: number
}
// 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
function getName(animal: Animal): string {
  return animal.name;
}

let p:Person = {
  name: 'zhufeng',
  age: 10,
  gender: 0
}

getName(p);
//只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错
let a: Animal = {
  name: 'zhufeng',
  age: 10,
  gender: 0
}

// 对于接口，属性越多，范围越小
// 对于联合类型，联合的越多，范围越大
// 对于交叉类型，交叉的越多，范围越小

namespace MM {

  // 源： M1
  // 目标： M2
  // 目标类型(M2)中声明的属性变量在源类型(M1)中都存在就是兼容的
  interface M1 {
    name:string,
    age: number
  }
  interface M2{
    name:string,
    age:number,
    gender:number
  }
  let m1:M1 = {
    name:'zf',
    age:11
  }
  let m2: M2 = {
    name: 'zs',
    age: 11,
    gender: 0
  }
  m1 = m2
  // m2 = m1;
}
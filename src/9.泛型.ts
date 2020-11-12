// 泛型
export { }
// 使用<T>表示，书写的位置：函数名后，接口名后，类名后
// T相当于一个变量，占位符，具体的类型取决于调用的时候传入的类型
class Animal1 {
  name!: string
  constructor(name: string) {
    this.name = name;
  }
}

interface Iclass<T> {
  new(name: string): T; // 不关心返回值
}

function createInstance<T>(clazz: Iclass<T>, name: string) {
  return new clazz(name)
}
let p: Animal1 = createInstance<Animal1>(Animal1, 'zf')

// 写死了，只能传Animal类，只能返回Animal类
// 使用泛型 T
// 泛型T作用域只限于函数内部使用

// 泛型函数

// function getName<T>(name:T, age:number):T{
//   return name;
// }
// getName<string>('zf', 11)

// function createArray(length:number, value:any):any[]{
//   let result: any[] = []
//   for(let i =0; i< length; i++){
//     result.push(value)
//   }
//   return result;
// }
// console.log(createArray(3, 'x'));

// 使用泛型，希望传入的类型，和返回的类型一样
// 实现了传入字符串，得到字符串数组，传入其他类型，得到对应类型数组
// function createArray<T>(length:number, value:T): T[]{
//     let res:T[] = []
//     for(let i = 0; i< length; i++){
//       res.push(value)
//     }
//     return res;
// }
// // 调用传入具体类型string， value的类型就确定为string，所以第二个参数的类型必须为string
// createArray<string>(6, 'hello')


// 2. 类数组
// function sum<T>(a: T, b: T): T {
//   let args: IArguments = arguments;
//   return (a as any) + (b as any)
// }
// sum<number>(1, 2)

// 3. 泛型类
// class Animal<T>{
//   getMax(a:T, b:T):T{
//     return a;
//   }
// }
// let c:Animal<number> = new Animal<number>()
// console.log(c.getMax(10, 2));


// 4. 泛型于new
// function getInstance<T>(clzz: { new(): T }): T {
//   return new clzz()
// }
// class C1 { }
// let m:C1 = getInstance<C1>(C1)
// console.log(m);

// 5. 泛型接口
// 01. 泛型描述函数
// 可以将T放到函数的位置，因为泛型本来就可以约束函数
// interface ICaculate {
//   <T>(a:T, b:T):T
// }
// let cacutlate:ICaculate = <T>(a:T, b:T):T=>{
//   return a;
// }
// cacutlate<number>(1,2)

// 6. 多个泛型参数
// 可以传入多个泛型的类型
// function swap<A, B>(value: [A, B]): [B, A] {
//   return [value[1], value[0]]
// }
// let result = swap<string, number>(['a', 100])
// console.log(result);


// 7. 泛型默认值类型
function createArray<T = number>(a: T, b: T): T[] {
  return [a];
}
createArray<number>(1, 2)


// 8. 泛型约束 
// 使用extends关键字  这里不是继承的意思，表示是后者子类型的意思
// 由于泛型太宽泛了，不知道到底是哪种类型，所以没有办法调用对应类型的方法
// 可以约束泛型的类型，达到调用类型方法的目的

interface IWidths{
  width:number
}

function logger<T extends IWidths>(val:T){
  console.log(val.width);
}
type AA = {width:number, height:number}
logger<AA>({width:100, height:20})



export {}
// 对象数据类型  object

function create(obj:object):void{

}
// create(100) // 错误，100是基本类型
create([])
create({})
create(function(){})


// ts自带类型推论，会自己推断类型

// 1. 定义类型不赋值，默认是any类型
let str; // let str: any
// 后续赋值时，类型已经确定了，还是any
str = 'abc'
str = 100;

// 2. 定义变量赋值， 会根据赋的值去猜，推论类型

let s1 = 100 // let s1: number
//此时类型已经是number，不能将string赋值给number
//s1 = '113' // 不能将类型“string”分配给类型“number”
// 1.字符串 2.数字  3.布尔类型
let str: string = 'hello'
let num: number = 100
let boo: boolean = true;


// 4.元组  长度 类型 固定的数组
let arr1: [string, number, boolean] = ['zf', 11, true]
// 不能通过索引添加元素
// 不能将类型“100”分配给类型“undefined”。
// arr1[3] = 100 错误写法

// 添加元素可以通过方法 push
// push的元素的类型必须是 string | number | boolean 联合类型
arr1.push(false)

// 5.数组 一类类型，长度不固定
let arr2: string[] = ['a', 'b']


//6.枚举类型
// 通过enum关键字定义
// 两种： 普通枚举  常量枚举
// -列举的意思
// 首字母大写， 里边的值也大写
// 1. 普通枚举
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
console.log(Direction['UP']);

// 常量枚举
// - 通过前边加const定义常量枚举

const enum Sex {
    BOY,
    GIRL
}
console.log(Sex.BOY) // console.log(0 /* BOY */);


// 7.null 8.undefined
// - null和undefined是任何类型的子类型
// - 在严格模式下，null只能赋值给null， undefined只能赋值给undefined

// let x:number = 10
// x = undefined;

// let un:undefined;
// un = undefined;

// let nu:null;
// nu = null;


// 8. void 
// 空类型， 只接受null和undefined(非严格模式下)
// 一般用于表示函数没有返回值

// let a:void;
// a = null;
// a = undefined

// function say(value:string):void{
//     console.log(value);
// }


//9. never
// 从不，表示永远达不到的情况
// 3种：1）错误  2）死循环   3）类型判断时会出现never

function throwError(err: string): never {
    throw new Error("出错了");

}
function whileTrue(): never {
    while (true) {

    }
}
function byType(val: string | number) {
    if (typeof val === 'string') {
        val // val: string
    } else if (typeof val === 'number') {
        val // val: number
    } else {
        val // val: never
    }
}


// 10 symbol
let c: symbol = Symbol(10)
let b: symbol = Symbol(10)
console.log(c === b)


// 11. bigInt
let s1: bigint = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(2)
console.log(s1);



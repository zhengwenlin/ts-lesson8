export { }

// 函数
// 定义函数两种： 1. 函数声明语句 function(){}   2. 函数表达式 const fn = () => {}
// 函数想要表示类型 
// 考虑入参和返回值

// 1. 函数声明语句
function getSum(a: number, b: number): number {
    return a + b;
}


// 2. 函数表达式
// 因为可以自动推导类型，sum变量的类型可以不用给
type Sum = (a: string, b: string) => string;
const sum: Sum = (a: string, b: string): string => {
    return a + b;
}


// 函数的参数
// 1.默认参数 =   2. 可选参数 ?  3.剩余参数 ...
function fn(a: string = 'hello', b?: number, ...args: any[]): void {

}
fn('abc', 100, 1, 2, 3, 4)



// 函数的重载
// 多个函数定义，每个定义中可以参数不同，函数实现中根据不同的参数实现不同的功能

function toArray(a:string): void;
function toArray(b:number): void;
function toArray(val: string | number){
    if(typeof val === 'string'){

    }else{

    }
}
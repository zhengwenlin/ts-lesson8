export { }


// 1. 联合类型
// 使用 | 表示
let str!: string | number;

// 没有赋值的时候，只能调用这个三个方法（共同的方法）
str.toLocaleString()
str.toString()
str.valueOf()


// 赋值后，只能调用该类型自己的方法
str = 100;
str.toFixed() // 数值类型方法

str = 'abc';
str.trim() // 字符串的方法


// 2. 非空断言
// 自动推论的类型：HTMLElement | null
let ele: HTMLElement | null = document.getElementById('root');
// 当我们方法style属性的时候，ts默认给加上了?,说明ele可能没有值
// ele?.style
// 可以断言ele肯定有值
// ele!.style.color = 'red'

// 3. 类型断言
// - 使用  值 as 类型  来断言一个值的类型
(ele as HTMLElement).style.color = 'red'; // 断言 不能断言不存在的属性
(<HTMLElement>ele).style.color = 'pink'; // 这个和 jsx 语法有冲突 尽量不采用

// 双重断言 
// 可以将类型断言成不存在的类型 
((ele as any) as boolean) = true;
(<boolean>(<any>ele)) = true;
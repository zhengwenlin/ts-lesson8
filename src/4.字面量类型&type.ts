export {}

// 1. 类型别名type 很重要

type Sex = 'boy' | 'girl'
let zs:Sex;
zs = 'boy'
zs = 'girl'

// 2. 字面量类型  类型和值一一对应
let a: 'girl' = 'girl'
let b: 'boy' = 'boy'

// 3. 类型字面量 值是字面量中其中一种
let s: 'up' | 'down' | 'left' | 'right';
s = 'left'
//定义类型别名
type Direction = 'up' | 'down' | 'left' | 'right';
let c: Direction;
c = 'right'


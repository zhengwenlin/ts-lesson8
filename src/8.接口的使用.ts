// 接口
export { }

// 1. 描述对象的形状  2.描述行为的抽象（将多个方法抽象定义在接口中）
// 3. 描述函数  4. 描述类  5.描述类的构造函数new

// 通过interface定义接口 
// 接口和type类似，但是又有区别，都可以自定义类型

// 1. 描述对象的形状
// ()前边有名字，就是描述对象，对象有两个属性，speack，是一个函数，name是字符串
interface Sepackable {
    speack(): void,
    name: string
}

let speackMan: Sepackable = {
    speack() {
        console.log('speck');

    },
    name: 'tom'
}

// 2. 描述行为的抽象（使用接口描述方法， 一个类可以实现多个接口）
interface Eat {
    eat(): void;
}
interface Say {
    say(): void;
}
class P implements Eat, Say {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    say(): void {
        throw new Error("Method not implemented.");
    }

}
// 3. 描述函数 
// ()前边有名字，就是描述对象，对象有两个属性，speack，是一个函数，name是字符串
// ()前边没有名字，就是描述函数，函数有count属性
interface Getcount {
    (): void,
    count: number
}

const getCount: Getcount = () => {
    getCount.count++;
}
getCount.count = 1
getCount()


// 4. 描述类
// 和描述对象的写法一模一样
// 描述类的接口，接口中的方法表示的是类的原型方法，方法返回值void表示不关心返回值，
// 具体实现时，返回值可以是任意类型

interface Animal {
    say(): void  // 描述类的原型方法，void表示不关心返回值（特性）
    name: string
}

class Cat implements Animal {
    constructor(public name: string) {

    }
    // 具体实现say方法时，返回值是任意的，因为接口中say方法并不关心返回值
    say(): string {
        return 'hello'
    }
}


//5. 描述类的构造函数
// 前边加new是描述构造函数 
// 加名字是描述对象的方法或者类的原型方法  
// 啥也没有是描述函数
namespace XX {
    class Animal {
        constructor(public name: string) {

        }
    }
    interface IClass {
        new(name: string): Animal;
    }

    // 传入一个类，返回一个实例
    function createInstance(clzz: IClass, name: string) {
        return new clzz(name)
    }
    createInstance(Animal, 'zf')
}


// 接口的特性
namespace AA {
    // 1. 同名接口会合并
    interface Person {
        name: string
    }
    interface Person {
        age: number,
        //name:number // 同名接口，同名属性类型不一样会报错
    }
    let a: Person = {
        name: 'zf',
        age: 11
    }

    // 2. 接口能被另一个接口继承
    interface Speackable {
        speack(): void
    }
    interface SpeackChinese extends Speackable {
        name: string
    }
    let Tom: SpeackChinese = {
        speack() { },
        name: 'tom'
    }

    // 3. 一个类只能继承一个类，但是可以实现多个接口
    class Hunman {
        name: string;
        constructor(name: string) {
            this.name = name
        }
    }
    interface Eat {
        eat(): void // 不关心返回值
    }
    interface Say {
        say(): void
    }
    class People extends Hunman implements Eat, Say {
        constructor(name: string) {
            super(name)
        }
        eat(): void {
            throw new Error("Method not implemented.");
        }
        say(): void {
            throw new Error("Method not implemented.");
        }
    }
    let p: People = new People('tom')
}


// 接口的其他用法

// 1. 任意属性
interface Piqiu {
    name: string,
    age: number,
    [key: string]: any
}
let liwenxiu: Piqiu = {
    name: 'lwx',
    age: 16,
    bobby: ['chi', 'wan']
}

// 2. 可索引接口  key是number类型
interface IArray{
    [index:number]:any
}
let arr:IArray = [1,2,3, {}, 'hello']

// 3. readonly 只读的
interface IMy{
    readonly name:string,
    age: number
}
let tom1:IMy = {
    name:'zs',
    age: 11
}
// 无法分配到 "name" ，因为它是只读属性
// tom1.name = 'new name'
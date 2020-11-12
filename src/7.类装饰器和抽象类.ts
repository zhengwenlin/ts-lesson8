export { }
// 装饰器：主要就是给类拓展属性或者方法
// 1.类装饰器 2.属性装饰器 3.方法装饰器  4.参数装饰器
// 通过类装饰器，给类原型上添加一个say方法
function addSay(target: any) { // target是类的构造函数
    target.prototype.say = function () {
        console.log('say');

    }
}
// 2. 属性装饰器，装饰实例属性
// target:构造函数原型  key：属性名
function doubleAge(target: any, key: string) {
    // 这里的target并不是实例，是原型，原型上是没有这个属性的
    let value: number = 0;

    Object.defineProperty(target, key, {
        configurable: false,
        enumerable: false,
        get() {
            return value * 2
        },
        set(newVal: number) {
            value = newVal
        }
    })

}
// 2. 属性装饰器，装饰静态属性，target是构造函数，key是属性名
function upercaseStatic(target:any, key:string){
    target[key] = (target[key] as string).toUpperCase()
}
// 3.方法装饰器，装饰原型方法
// target 是原型 
function toLocal(target:any, methodName:string, descriptor:PropertyDescriptor){
    console.log(target, methodName, descriptor);
    
}
// 1. 类的装饰器
@addSay
class Person {
    name!: string
    // 属性装饰器，装饰私有属性
    @doubleAge
    age!: number;
    say!: Function;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // 2. 属性装饰器，装饰静态属性
    @upercaseStatic
    static myAddress = 'beijing'
    
    // 3. 方法装饰器，装饰原型方法
    @toLocal
    getLocal(){
        console.log('getLocal  run');
        
    }
}
let p: Person = new Person('zf', 11)
p.say()
console.log(p.age);
console.log(Person.myAddress);


// 抽象类
abstract class AA {
    // 抽象方法
    abstract say(msg:string):void;

    getName(){
        return 'zf'
    }
}
// 抽象类不能被实例化 不能new
// new AA() // 无法创建抽象类的实例


// 子类继承抽象类
// 必须实现抽象类中的抽象方法, 具体方法不用实现
class AAx extends AA {
    say(msg: string): void {
        throw new Error("Method not implemented.");
    }
}

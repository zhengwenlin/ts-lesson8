// 类  
// 3种属性  类调用的静态属性  私有的实例属性  共享的原型属性

// 修饰符： (public  protected  private)父子类之间的   readonly
// public 默认是public  父类内部，子类内部，类外边都可以访问
// protected 受保护的， 父类内部，子类内部可以访问， 类外边不能访问
// private 私有的，只有父类内部可以访问，子类内部，类外边都不能访问
// 类要先定义属性，不然会报错
class Pointer {
    private x!: number;
    protected y!: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static myName: string = 'zf';
    static getName() {
        console.log(this, 'static this:')
        return this.name; // 静态方法中的this是类的构造函数
    }
}
// 当new 一个类的时候，会得到两个类型
// 1. 类的构造函数的类型  2.类的实例的类型
// 类既是值，也是类型，作为值，有属于自己的类型 type Com = typeof Pointer,
// 作为类型，是类的实例的类型
let p: Pointer = new Pointer(10, 16)
// 实例属性 通过实例访问的属性（私有的，属于这个实例）
//p.x; // x是私有属性，只有父类内部可以访问
//p.y; // y是父类的受保护属性，类外边访问不了
// 静态属性
console.log(Pointer.getName());
console.log(Pointer.myName);



class Animal {
    name!: string
    age!: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    static getName(){
        return this.name
    }
    eat(){
        console.log('Animal 吃');
        
    }
}

class Cat extends Animal {
    // address!:string
    constructor(name: string, age: number, public address: string) {
        // 子类构造函数中的super指向父类的构造函数
        super(name, age)
    }

    static getName(){
        super.getName() // 子类静态方法内部的super指向父类的构造函数
        return this.name;
    }

    say(){
        // 子类原型方法中的super指向父类的原型
        super.eat()
        console.log('cat: hello');
        
    }
}
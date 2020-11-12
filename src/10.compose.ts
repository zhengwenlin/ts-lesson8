// 定义Func类型描述一个函数，定义两个泛型T,R, T是数组子类型;
// 函数参数是T类型，返回值是R类型 
type Func<T extends any[], R> = (...a: T) => R

// 函数的重载
// 0个参数，返回值是函数，参数a是R类型，返回值是R类型
export default function compose(): <R>(a: R) => R

// 1个参数 定义泛型F是函数类型，接收一个函数，返回一个函数
export default function compose<F extends Function>(f: F): F

// 2个参数 接收两个函数，第一个参数接收A类型，返回R类型
// 第二个
export default function compose<A, T extends any[], R>(
  f1: (a: A) => R,
  f2: Func<T, A>
): Func<T, R>

/* three functions */
export default function compose<A, B, T extends any[], R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func<T, A>
): Func<T, R>

/* four functions */
export default function compose<A, B, C, T extends any[], R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func<T, A>
): Func<T, R>

/* rest */
export default function compose<R>(
  f1: (a: any) => R,
  ...funcs: Function[]
): (...args: any[]) => R

export default function compose<R>(...funcs: Function[]): (...args: any[]) => R

export default function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}

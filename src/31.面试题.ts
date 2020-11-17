//EffectModule 定义如下:
interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: 'delay'
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}



/**
 *  connect函数的返回值符合这个要求
 *  type Connected = {
      delay(input: number): Action<string>;
      setMessage(action: Date): Action<number>;
    }
*/
// 思路： 是一个类型转换提
// 1.
// 1. 异步
type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>
// 2. 同步
type syncMethod<T, U> = (action: Action<T>) => Action<U>

type AsyncMethodEffect<T, U> = (input: Promise<T>) => Promise<Action<U>>  //变成了↓
type asyncMethodCon<T, U> = (input: T) => Action<U>

type syncMethodEffect<T, U> = (action: Action<T>) => Action<U>  //变成了↓
type syncMethodCon<T, U> = (action: T) => Action<U>

type UniMthodTypes<T, U> = AsyncMethodEffect<T, U> | syncMethodEffect<T, U>;
// 1. 先将普通的属性排除掉
type PickMethod<T> = {
  [key in keyof T]: T[key] extends Function ? key : never
}[keyof T]

let effectModule: EffectModule = new EffectModule;

type MethodUniType = PickMethod<EffectModule>


// 转换方法
type TansionType<T> = T extends AsyncMethodEffect<infer K, infer U> ? asyncMethodCon<K, U> :
  T extends syncMethodEffect<infer K, infer U> ? syncMethodCon<K, U> : never;

type Connect = (module: EffectModule) => {
  [key in MethodUniType]: TansionType<EffectModule[key]>
}


const connect: Connect = m => ({
  delay: (input: number) => ({
    type: 'delay',
    payload: `hello 2`
  }),
  setMessage: (input: Date) => ({
    type: "set-message",
    payload: input.getMilliseconds()
  })
});
type Connected = {
  [key in MethodUniType]: TansionType<EffectModule[key]>
}
export const connected: Connected = connect(new EffectModule());
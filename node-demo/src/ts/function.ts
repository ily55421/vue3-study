// 注意：这是 TypeScript 代码

// 写法一：函数声明
function sum5(x: number, y: number): number {
    return x + y
}

// 写法二：函数表达式
const sum6 = function (x: number, y: number): number {
    return x + y
}

// 写法三：箭头函数  x: number, y: number 入参  : number 返回类型
const sum7 = (x: number, y: number): number => x + y

// 写法四：对象上的方法
const obj2 = {
    sum8(x: number, y: number): number {
        return x + y
    }
}

// 还有很多……


// 注意 isDouble 这个入参后面有个 ? 号，表示可选 isDouble?: boolean
function sum(x: number, y: number, isDouble?: boolean): number {
    return isDouble ? (x + y) * 2 : x + y
}

// 这样传参都不会报错，因为第三个参数是可选的
sum(1, 2) // 3
sum(1, 2, true) // 6


// 注意这里的返回值类型  void方法
function sayHi(name: string): void {
    console.log(`Hi, ${name}!`)
}

sayHi('Petter') // Hi, Petter!



// 只有返回 null 值才能定义返回类型为 null  有返回值
function sayHi1(name: string): null {
    console.log(`Hi, ${name}!`)
    return null
}



// 这里的 sum ，我们确实是没有指定类型
const sum9 = (x: number, y: number): number => x + y

// 实际自动推断  注意第一个箭头是 TypeScript 的，第二个箭头是 JavaScript ES6 的。
const sum10: (x: number, y: number) => number = (x: number, y: number): number => x + y
/**
 *  1. `const sum: (x: number, y: number) => number` 是这个函数的名称和类型
    2. `= (x: number, y: number)` 这里是指明了函数的入参和类型
    3. `: number => x + y` 这里是函数的返回值和类型
 */


// 对象的接口
interface Obj11 {
    // 上面的方法就需要你显式的定义出来
    sum: (x: number, y: number) => number
}

// 声明一个对象
const obj11: Obj11 = {
    sum(x: number, y: number): number {
        return x + y
    }
}



// 对单人或者多人打招呼   函数重载
function greet(name: string | string[]): string | string[] {
    if (Array.isArray(name)) {
      return name.map((n) => `Welcome, ${n}!`)
    }
    return `Welcome, ${name}!`
  }
  
  // 单个问候语
  const greeting = greet('Petter')
  console.log(greeting) // Welcome, Petter!
  
  // 多个问候语
  const greetings11 = greet(['Petter', 'Tom', 'Jimmy'])
  console.log(greetings11)  // [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]



  // 此时这个变量依然可能有多个类型
// const greeting: string | string[]

// TS 的 [类型断言](https://vue3.chengpeiquan.com/guide.html#类型断言) （留意后面的 `as` 关键字）：
const greeting12 = greet('Petter') as string
const greetings12 = greet(['Petter', 'Tom', 'Jimmy']) as string[]




// 这一次用了函数重载   函数重载
function greet1(name: string): string  // TS 类型
function greet1(name: string[]): string[]  // TS 类型
function greet1(name: string | string[]) {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`)
  }
  return `Welcome, ${name}!`
}

// 单个问候语
const greeting2 = greet1('Petter')  // 此时只有一个类型 string
console.log(greeting2) // Welcome, Petter!

// 多个问候语
const greetings2 = greet1(['Petter', 'Tom', 'Jimmy'])  // 此时只有一个类型 string[]
console.log(greetings2)  // [ 'Welcome, Petter!', 'Welcome, Tom!', 'Welcome, Jimmy!' ]




// 这里的入参显式指定了 any   既然报错是 “隐式” ，那我们 “显式” 的指定就可以了，当然，为了程序能够正常运行，我们还提高一下函数体内的代码健壮性：
function getFirstWord12(msg: any) {
    // 这里使用了 String 来避免程序报错
    console.log(String(msg).split(' ')[0])
  }
  
  getFirstWord12('Hello World')
  
  getFirstWord12(123)


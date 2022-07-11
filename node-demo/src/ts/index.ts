// src/ts/index.ts
function getFirstWord(msg) {
    console.log(msg.split(' ')[0])
  }

  getFirstWord('Hello World')

//   getFirstWord(123)

/**  
 * D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:843
  return new TSError(diagnosticText, diagnosticCodes, diagnostics);
         ^
TSError: ⨯ Unable to compile TypeScript:
src/ts/index.ts:2:23 - error TS7006: Parameter 'msg' implicitly has an 'any' type.  告知 `getFirstWord` 的入参 `msg` 带有隐式 any 类型

2 function getFirstWord(msg) {
                      ~~~

  at createTSError (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:843:12)
  at reportTSError (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:847:19)
  at getOutput (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1057:36)
  at Object.compile (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1411:41)
  at Module.m._compile (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1596:30)
  at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
  at Object.require.extensions.<computed> [as .ts] (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1600:12)
  at Module.load (node:internal/modules/cjs/loader:981:32)
  at Function.Module._load (node:internal/modules/cjs/loader:822:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
diagnosticCodes: [ 7006 ]
}
 */


// 声明类型
// function getFirstWord111(msg: string) {
//     console.log(msg.split(' ')[0])
// }

// getFirstWord111('Hello World')

//   getFirstWord(123) // eslint 编译检查报错   移除后正常运行

/**
 * D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:843
  return new TSError(diagnosticText, diagnosticCodes, diagnostics);
         ^
TSError: ⨯ Unable to compile TypeScript:
src/ts/index.ts:42:16 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.  类型为“number”的参数不能分配给类型为“string”的参数

42   getFirstWord(123) // eslint 编译检查报错
                ~~~

  at createTSError (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:843:12)
  at reportTSError (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:847:19)
  at getOutput (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1057:36)
  at Object.compile (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1411:41)
  at Module.m._compile (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1596:30)
  at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
  at Object.require.extensions.<computed> [as .ts] (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1600:12)
  at Module.load (node:internal/modules/cjs/loader:981:32)
  at Function.Module._load (node:internal/modules/cjs/loader:822:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
diagnosticCodes: [ 2345 ]
}
 */



// 字符串
const str11111111: string = 'Hello World'

// 数值
const num111: number = 1

// 布尔值
const bool1111: boolean = true



// 这样也不会报错，因为 TS 会帮你推导它们的类型
const str1 = 'Hello World'
const num1 = 1
const bool1 = true



// 字符串数组
const strs: string[] = ['Hello World', 'Hi World']

// 数值数组
const nums: number[] = [1, 2, 3]

// 布尔值数组
const bools: boolean[] = [true, true, false]


// 这种有初始项目的数组， TS 也会帮你推导它们的类型
const strs1 = ['Hello World', 'Hi World']
const nums1 = [1, 2, 3]
const bools1 = [true, true, false]


// 这个时候会认为是 any[] 或者 never[] 类型
// const nums2 = []
const nums2: number[] = []

// 这个时候再 push 一个 number 数据进去，也不会使其成为 number[]
nums2.push(1)


// 类型定义
type UserItem = {
    // ...
}

// 接口定义
interface IUserItem {
    // ...
}


// 定义用户对象的类型
interface UserItem1 {
    name: string
    age: number
}

// 在声明变量的时候将其关联到类型上
const petter: UserItem1 = {
    name: 'Petter',
    age: 20,
}

console.log(petter) //{ name: 'Petter', age: 20 }



// 注意！这是一段会报错的代码

interface UserItem2 {
    name: string
    age: number
}

//   const petter1: UserItem2= {  
//     name: 'Petter',
//   }

/**
 * 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "UserItem2" 中需要该属性。ts(2741)
index.ts(143, 5): 在此处声明了 "age"。
 */


interface UserItem3 {
    name: string
    // 这个属性变成了可选
    age?: number
}

const petter3: UserItem3 = {
    name: 'Petter',
}

console.log(petter3)  //{ name: 'Petter' }



interface UserItem4 {
    name: string
    age: number
    enjoyFoods: string[]
    // 这个属性引用了本身的类型
    friendList: UserItem4[]
}

const petter4: UserItem4 = {
    name: 'Petter',
    age: 18,
    enjoyFoods: ['rice', 'noodle', 'pizza'],
    friendList: [
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
}

console.log(petter4)
/**
{
name: 'Petter',
age: 18,
enjoyFoods: [ 'rice', 'noodle', 'pizza' ],
friendList: [
  { name: 'Marry', age: 16, enjoyFoods: [Array], friendList: [] },
  { name: 'Tom', age: 20, enjoyFoods: [Array], friendList: [] }
]
} */
console.log(petter4.friendList)
/**
[
  {
    name: 'Marry',
    age: 16,
    enjoyFoods: [ 'pizza', 'ice cream' ],
    friendList: []
  },
  {
    name: 'Tom',
    age: 20,
    enjoyFoods: [ 'chicken', 'cake' ],
    friendList: []
  }
] */


// 接口继承
interface UserItem5 {
    name: string
    age: number
    enjoyFoods: string[]
    friendList: UserItem5[]
}

// 这里继承了 UserItem 的所有属性类型，并追加了一个权限等级属性
interface Admin extends UserItem5 {
    permissionLevel: number
}

const admin: Admin = {
    name: 'Petter',
    age: 18,
    enjoyFoods: ['rice', 'noodle', 'pizza'],
    friendList: [
        {
            name: 'Marry',
            age: 16,
            enjoyFoods: ['pizza', 'ice cream'],
            friendList: [],
        },
        {
            name: 'Tom',
            age: 20,
            enjoyFoods: ['chicken', 'cake'],
            friendList: [],
        }
    ],
    permissionLevel: 1,
}

//如果你觉得这个 `Admin` 类型不需要记录这么多属性，也可以在继承的过程中舍弃某些属性，通过 `Omit` 帮助类型来实现，`Omit` 的类型如下：
//   type Omit<T, K extends string | number | symbol>

interface UserItem6 {
    name: string
    age: number
    enjoyFoods: string[]
    // 可选填写
    friendList?: UserItem6[]
}

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
interface Admin2 extends Omit<UserItem6, 'enjoyFoods' | 'friendList'> {
    permissionLevel: number
}

// 现在的 admin 就非常精简了
const admin2: Admin2 = {
    name: 'Petter',
    age: 18,
    permissionLevel: 1,
}





// 定义一个类
class User {
    // constructor 上的数据需要先这样定好类型
    name: string

    // 入参也要定义类型
    constructor(userName: string) {
        this.name = userName
    }

    getName() {
        console.log(this.name)
    }
}

// 通过 new 这个类得到的变量，它的类型就是这个类
const petter11: User = new User('Petter')
petter11.getName()  // Petter






// 这是一个基础类
class UserBase {
    name: string
    constructor(userName: string) {
        this.name = userName
    }
}

// 这是另外一个类，继承自基础类
class User12 extends UserBase {
    // 增加方法
    getName() {
        console.log(this.name)
    }
}

// 这个变量拥有上面两个类的所有属性和方法
const petter12: User12 = new User12('Petter')
petter12.getName()




// 这是一个类
class UserBase13 {
    name: string
    constructor(userName: string) {
        this.name = userName
    }
}

// 这是一个接口，可以继承自类
interface User13 extends UserBase13 {
    age: number
}

// 这样这个变量就必须同时存在两个属性
const petter13: User13 = {
    name: 'Petter',
    age: 18,
}



//如果类上面本身有方法存在，接口在继承的时候也要相应的实现，当然也可以借助在 [对象（接口）](https://vue3.chengpeiquan.com/guide.html#对象-接口) 提到的 `Omit` 帮助类型来去掉这些方法。
class UserBase14 {
    name: string
    constructor(userName: string) {
        this.name = userName
    }
    // 这是一个方法
    getName() {
        console.log(this.name)
    }
}

// 接口继承类的时候也可以去掉类上面的方法
interface User14 extends Omit<UserBase14, 'getName'> {
    age: number
}

// 最终只保留数据属性，不带有方法
const petter14: User14 = {
    name: 'Petter',
    age: 18,
}



// // 你可以在 demo 里运行这段代码
// function counter111(count: number | string) {
//     console.log(`The current count is: ${count}.`)
// }

// // 不论传数值还是字符串，都可以达到我们的目的
// counter111(1)  // The current count is: 1.
// counter111('2')  // The current count is: 2.


// // 注意：这不是完整的代码，只是一个使用场景示例   “反引号” （ Backquote ） ，你可以使用标准键盘的 `ESC` 键下方、也就是 `1` 左边的那个按键打出来。
// import type { RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router'

// function isArticle(
//   route: RouteRecordRaw | RouteLocationNormalizedLoaded
// ): boolean {
//     return true;
//   // ...
// }



// querySelector 拿不到 DOM 的时候返回 null   HTMLElement | null 类三元表达式   如果document.querySelector('.main')不为空 则返回元素
// const ele: HTMLElement | null = document.querySelector('.main')





// src/ts/index.ts    ts中不支持的包   我们根据命令行的提示，安装 `@types/md5` 这个包。
// import md5 from 'md5'
// console.log(md5('Hello World'))   // 正确引入 b10a8db164e0754105b7a99be72e3fe5
/**
 * src/ts/index.ts:411:19 - error TS7016: Could not find a declaration file for module 'md5'. 'D:/lin/github/vue3-study/node-demo/node_modules/md5/md5.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/md5` if it exists or add a new declaration (.d.ts) file containing `declare module 'md5';`

411   import md5 from 'md5'
                      ~~~~~

    at createTSError (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:843:12)
    at reportTSError (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:847:19)
    at getOutput (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1057:36)
    at Object.compile (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1411:41)
    at Module.m._compile (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1596:30)
    at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Object.require.extensions.<computed> [as .ts] (D:\lin\github\vue3-study\node-demo\node_modules\ts-node\src\index.ts:1600:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12) {
  diagnosticCodes: [ 2304, 2584, 7016 ]
}

 */



// // 对单人或者多人打招呼
// function greet115(name: string | string[]): string | string[] {
//     if (Array.isArray(name)) {
//         return name.map((n) => `Welcome, ${n}!`)
//     }
//     return `Welcome, ${name}!`
// }

// // 虽然你知道此时应该是 string[] ，但 TypeScript 还是会认为这是 string | string[]
// const greetings = greet115(['Petter', 'Tom', 'Jimmy'])

// 会导致无法使用 join 方法 join报错
//   const greetingSentence = greetings.join(' ')  // 类型隐式指定 any
//   console.log(greetingSentence)



// // 对单人或者多人打招呼  此时利用类型断言就可以达到目的：
// function greet113(name: string | string[]): string | string[] {
//     if (Array.isArray(name)) {
//         return name.map((n) => `Welcome, ${n}!`)
//     }
//     return `Welcome, ${name}!`
// }

// // 你知道此时应该是 string[] ，所以用类型断言将其指定为 string[]   
// const greetings1 = greet113(['Petter', 'Tom', 'Jimmy']) as string[]

// // 现在可以正常使用 join 方法  
// const greetingSentence1 = greetings1.join(' ')
// console.log(greetingSentence1)



// 原本要求 age 也是必须的属性之一
interface User {
    name: string
    age: number
}

// 但是类型断言过程中，你遗漏了age   使用类型断言可以让 TypeScript 不检查你的代码，它会认为你是对的。
const petter15 = {} as User
petter15.name = 'Petter'

// TypeScript 依然可以运行下去，但实际上你的数据是不完整的
console.log(petter15) // { name: 'Petter' }


// 相当于 msg: string  TypeScript 会帮你推导 `msg` 是 `string` 类型。
let msg1 = 'Hello World'

// 所以要赋值为 number 类型时会报错
// msg1 = 3 // Type 'number' is not assignable to type 'string'  不能将类型“number”分配给类型“string”。




// // 相当于 getRandomNumber(): number  TypeScript 会根据 `return` 的结果推导
// function getRandomNumber111() {
//     return Math.round(Math.random() * 10)
// }

// // 相当于 num: number
// const num16 = getRandomNumber111()


// 此时相当于 foo: any  不指定具体类型
let foo

// 所以可以任意改变类型
foo = 1 // 1
foo = true  // true


// src/ts/index.ts
import greetTest from './greetTest'

// 单个问候语
const greeting = greetTest('Petter')
console.log(greeting)

// 多个问候语
const greetings = greetTest(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)


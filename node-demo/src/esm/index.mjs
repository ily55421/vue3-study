// src/esm/index.mjs  导入属性
// import m from './module.mjs'
// console.log(m) //Hello World


// import m from './module.mjs'
// m() //Hello World

// CJS 支持导入的时候直接解构
// const { foo } = require('./module.cjs')


// ESM 无法通过这种方式对默认导出的数据进行 “解构”
// import { foo } from './module.mjs'

/*
会报错
D:\lin\github\vue3-study\node-demo(main -> origin) (demo@1.0.0)
λ npm run dev:esm

> demo@1.0.0 dev:esm
> node src/esm/index.mjs

file:///D:/lin/github/vue3-study/node-demo/src/esm/index.mjs:14
import { foo } from './module.mjs'
         ^^^
SyntaxError: The requested module './module.mjs' does not provide an export named 'foo'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:128:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:194:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
*/ 


 
// src/esm/index.mjs   命名导入   TODO 切记，和 CJS 不同， ESM 模块不是对象，命名导出之后只能使用花括号 `{}` 来导入名称。
// import { foo, bar } from './module.mjs'
// foo()
// console.log(bar)
/**D:\lin\github\vue3-study\node-demo(main -> origin) (demo@1.0.0)
λ npm run dev:esm

> demo@1.0.0 dev:esm
> node src/esm/index.mjs

Hello World from foo.
Hello World from bar. */


// src/esm/index.mjs  导入时重命名
// import {
//     foo as foo2,  // 这里进行了重命名
//     bar
//   } from './module.mjs'
  
//   // 就不会造成变量冲突
//   const foo = 1
//   console.log(foo)
  
//   // 用新的命名来调用模块里的方法
//   foo2()
  
//   // 这个不冲突就可以不必处理
//   console.log(bar)
  /**
   * D:\lin\github\vue3-study\node-demo(main -> origin) (demo@1.0.0)
        λ npm run dev:esm

        > demo@1.0.0 dev:esm
        > node src/esm/index.mjs

        1
        Hello World from foo.
        Hello World from bar.
   */




// src/esm/index.mjs 导包
import md5 from 'md5'

const before = 'Hello World'
// 使用md5加密
const after = md5(before)
console.log({ before, after })
/**
 * D:\lin\github\vue3-study\node-demo(main -> origin) (demo@1.0.0)
λ npm run dev:esm

> demo@1.0.0 dev:esm
> node src/esm/index.mjs

{ before: 'Hello World', after: 'b10a8db164e0754105b7a99be72e3fe5' }
 */



function getFirstWord(msg) {
    console.log(msg.split(' ')[0])
  }
  
  getFirstWord('Hello World')  // 输出 Hello
  
  getFirstWord(123) // TypeError: msg.split is not a function    解决：使用typescript
  /**
   * Hello
file:///D:/lin/github/vue3-study/node-demo/src/esm/index.mjs:102
    console.log(msg.split(' ')[0])
                    ^

TypeError: msg.split is not a function
    at getFirstWord (file:///D:/lin/github/vue3-study/node-demo/src/esm/index.mjs:102:21)
    at file:///D:/lin/github/vue3-study/node-demo/src/esm/index.mjs:107:3
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
   */

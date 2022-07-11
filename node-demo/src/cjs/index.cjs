// src/cjs/index.cjs  导入cjs  npm run dev:cjs 运行

// const m = require('./module.cjs')
// console.log(m)

// 输出 Hello World

// src/cjs/index.cjs 导入方法

// const m = require('./module.cjs')
// m()

// 输出 Hello World

// src/cjs/index.cjs 默认导入

// const m = require('./module.cjs')
// console.log(m)

// 输出 { foo: [Function: foo], bar: 'Hello World from bar.' }


// src/cjs/index.cjs  es6 解构的方式导入

// const { foo, bar } = require('./module.cjs')
// foo()
// console.log(bar)

// 输出
// Hello World from foo.
// Hello World from bar.


// src/cjs/index.cjs  导入时重命名
const {
    foo: foo2,  // 这里进行了重命名
    bar,
  } = require('./module.cjs')
  
  // 就不会造成变量冲突
  const foo = 1
  console.log(foo)
  
  // 用新的命名来调用模块里的方法
  foo2()
  
  // 这个不冲突就可以不必处理
  console.log(bar)
  
// 输出
// 1
// Hello World from foo.
// Hello World from bar.
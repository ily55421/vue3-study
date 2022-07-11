// src/cjs/module.cjs  文件路径 导出属性  使用 npm run dev:cjs 方式运行
// module.exports = 'Hello World'

// src/cjs/module.cjs  导出单个方法
// module.exports = function foo() {
//     console.log('Hello World')
//   }




// src/cjs/module.cjs  命名导出
function foo() {
    console.log('Hello World from foo.')
  }
  
  const bar = 'Hello World from bar.'
  
  module.exports = {
    foo,
    bar,
  }  
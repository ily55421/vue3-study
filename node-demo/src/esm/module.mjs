// src/esm/module.mjs 导出属性
// export default 'Hello World'

// src/esm/module.mjs 导出函数
// export default function foo() {
//     console.log('Hello World')
//   }


// 在 ESM ，通过这样导出的数据也是属于默认导出
// export default {
//     foo: 1,
//   }




  // src/esm/module.mjs 正确的方式应该是通过 `export` 来对数据进行命名导出，我们修改一下 `src/esm/module.mjs` 文件：
export function foo() {
    console.log('Hello World from foo.')
  }
  
  export const bar = 'Hello World from bar.'
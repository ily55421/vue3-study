// src/ts/greet.ts
function greetTest(name: string): string
function greetTest(name: string[]): string[]
function greetTest(name: string | string[]) {
  if (Array.isArray(name)) {
    return name.map((n) => `Welcome, ${n}!`)
  }
  return `Welcome, ${name}!`
}

export default greetTest
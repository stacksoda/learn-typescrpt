// 泛型
function generic<T>(arg: T): T {
    return arg;
}

let output = generic("hello TypeScript");
console.log('output', output)

console.log('hello<number>(100)', generic<number>(100))

// 类型推断
let value =  generic(100);


// 实现了 Symbol.iterator的对象是可迭代的 如 array map set string
const array = [233, "hello", true];

for (const value of array) {
    console.log('value', value)
}
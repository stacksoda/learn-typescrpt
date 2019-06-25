const symbol = Symbol();

const obj = {
    [symbol]: "value"
}

console.log('obj[symbol]', obj[symbol])
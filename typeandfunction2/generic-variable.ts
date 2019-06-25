// 泛型变量
// function hello<T>(arg: T): T {
//     console.log(arg.length); //Property 'length' does not exist on type 'T'.
//     return arg;
// }

// 而泛型数组一定会有.length属性
function genericArray1<T>(args: T[]): T[] {
    console.log(args.length);
    return args;
}

function genericArray2<T>(args: Array<T>): Array<T> {
    console.log(args.length);
    return args;
}
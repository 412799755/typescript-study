function identity(arg: number): number {
    return arg;
}
function identity1(arg: any): any {
    return arg;
}
function identity2<T>(arg: T): T {
    return arg;
}
let output = identity2("myString");

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
// 下面的写法也可以
function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
// Named function
function add(x: number, y: number): number {
    return x + y;
}
// Anonymous function
let myAdd = function(x: number, y: number): number { return x + y; };

let myAdd1: (x: number, y: number ) => number = function(x: number, y: number): number { return x + y; }
//参数名可以不一样
let myAdd2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
//按上下文归类,自动类型推论
// The parameters `x` and `y` have the type number
let myAdd3: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

// ？表示参数可传可不传
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// 有默认初始化值的参数
function buildName1(firstName: string, lastName = "Smith"){
    return firstName + " " + lastName;
}
//剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
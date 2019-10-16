//布尔值
var isDone = false;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var name = "bob";
name = "smith";
// 模板字符串
var name = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name + ".\nI'll be " + (age + 1) + " years old next month.";
// 数组
var list = [1, 2, 3];
// 数组泛型
var list = [1, 2, 3];
// 元组 Tuple
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

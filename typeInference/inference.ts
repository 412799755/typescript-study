// 最佳通用类型
let x = 3;
let x1 = [0, 1, null];
// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
// 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]
"use strict";
exports.__esModule = true;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var list = [1, true, "free"];
list[1] = 100;

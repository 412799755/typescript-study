"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

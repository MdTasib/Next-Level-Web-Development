"use strict";
// Arrow function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const result = createArray("Tasib");
const result1 = createArray1("Tasib");
const result2 = createArray1(false);
const result3 = createArray1({ name: "Tasib" });
// Tuple Arrow function
const createTupleArray = (param1, param2) => {
    return [param1, param2];
};
const array1 = createTupleArray("Tasib", 21);

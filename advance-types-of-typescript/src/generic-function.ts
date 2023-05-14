// Arrow function
const createArray = (param: string): string[] => {
    return [param]
}
const createArray1 = <T>(param: T): T[] => {
    return[param]
}

const result = createArray("Tasib");
const result1 = createArray1<string>("Tasib");
const result2 = createArray1<boolean>(false);
const result3 = createArray1<{name: string}>({name:"Tasib"});

// Tuple Arrow function
const createTupleArray = <X, Y>(param1:X, param2:Y): [X,Y] => {
    return [param1, param2];
}

const array1 = createTupleArray<string, number>("Tasib", 21);
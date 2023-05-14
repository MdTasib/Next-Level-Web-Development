type StudentType = {
    name: string,
    age?: number,
    city: string,
}

const student1: StudentType = {
    name: "Rakib",
    age: 20,
    city: "Chittagong"
}

const student2: StudentType = {
    name: "Rafi",
    city: "Chittagong"
}

// string | number | boolean | blah blah.... type
type StudentNameType = string;
const studentName: StudentNameType = 'Tasib';


type OperationType = (x:number, y:number) => number;

const calc = (num1: number, num2: number, operation:OperationType) => {
    return operation(num1, num2);
}

console.log(calc(20, 30, (x, y) => x - y));
console.log(calc(20, 30, (x, y) => x * y));
console.log(calc(20, 30, (x, y) => x + y));
class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age:number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours:number): string{
        return `This ${this.name} will sleep for ${hours}`;
    }
}

class Student extends Person{
    constructor(name:string, age: number, address:string){
        super(name, age, address)
    }
}

class Teacher extends Person{
    designation: string;

    constructor(name:string, age:number,address:string,designation:string){
        super( name, age, address);
        this.designation = designation;
    }
    takeClass(numOfClass:number):string{
        return `This ${this.name} will take ${numOfClass} classes`;
    }
}

const student1 = new Student("Student", 21, "Chittagong");
console.log(student1.makeSleep(8));

const teacher1 = new Teacher("Teacher", 30, "Dhaka", "head teacher");
console.log(teacher1.makeSleep(6));
console.log(teacher1.takeClass(3));


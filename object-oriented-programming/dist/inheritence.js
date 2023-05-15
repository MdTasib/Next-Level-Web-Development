"use strict";
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numOfClass) {
        return `This ${this.name} will take ${numOfClass} classes`;
    }
}
const student1 = new Student("Student", 21, "Chittagong");
student1.makeSleep(8);
const teacher1 = new Teacher("Teacher", 30, "Dhaka", "head teacher");
teacher1.makeSleep(6);
teacher1.takeClass(3);

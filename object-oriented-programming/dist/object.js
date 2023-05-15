"use strict";
/**
 * First way
 *
 * class Animal  {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
 *
 */
/**
 *
 * Another way
 *
 */
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Tony", "DOG", "Geo Geo");
const cat = new Animal("Minto", "Cat", "MIO MIO");
dog.makeSound();
cat.makeSound();

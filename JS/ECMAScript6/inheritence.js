"use strict";

class Person {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName() {
        console.log(this.name);
    }

    displayAge() {
        console.log(this.age);
    }

    displayWeight() {
        console.log(this.weight);
        //this is a method
    }

    //base class


}

class Programmer extends Person {
    constructor(name, age, weight, language) {   //constructor of child class
        super(name, age, weight);              //this is in reference of parent class
        this.language = language;
    }

    displayLanguage(){
        console.log(this.language);
    }


} //child class


let shubham = new Programmer("Shubham", 24, 78,"Marathi");
//let muskan = new Person("Muskan", 18, 60);

shubham.displayWeight();
shubham.displayLanguage();
// the Programmer class has access to the methods declared in the Person class since Programmer class is child of the Person class

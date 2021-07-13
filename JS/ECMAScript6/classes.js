"use strict";

class Person {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    displayWeight(){
        console.log(this.weight);
        //this is a methid
    }

}


let shubham =  new Person("Shubham",24,78);
let muskan =  new Person("Muskan",18,60);
shubham.displayWeight();
muskan.displayWeight();
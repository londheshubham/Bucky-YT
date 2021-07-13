"use strict";

function circleAreaOne(r){
    var PI = 3.14;
    return PI*r*r;
}

console.log(circleAreaOne(7));

//arrow function is the way to make functions scripting easier

let circleAreaTwo = (r) =>{
    const PI = 3.14;
    return PI * r* r;

}

let circleAreaThree = r => 3.14 * r * r;

console.log(circleAreaTwo(7));



console.log(circleAreaThree(7));


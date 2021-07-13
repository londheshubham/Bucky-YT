"use strict";

//var has a lot of scoping issues
// let makes sure that the variable is accessible from the
// block in which it was declared

function theNotebook(){
    let movie = "The Notebook";
    return movie;
}

console.log(theNotebook());
//console.log(movie);
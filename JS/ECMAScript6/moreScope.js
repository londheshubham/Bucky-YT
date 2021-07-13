"use strict";
let movie = "Good Will Hunting";
function theNoteBook(){
    return movie;
    //since no variable movie in this scope it will try and find it will find in the outer scope and provide that is the hierarchy

}

console.log(theNoteBook());
//generator is like checkpoints

function* simpleGenerators() {
    yield 'apples';
    yield 'bacon';
    console.log('ok,this is the line after bacon....');
    yield 'corn';
}

// function* is the way to define generator function
// generator function is stepwise execution

let simple = simpleGenerators();
// this will be reference to simpleGenerators function

console.log(simple.next());
//this will make sure the stepwise exection
console.log(simple.next());
console.log(simple.next()); // start execution from where last breakpoint was and execute till next breakpoint
console.log(simple.next()); // this will show defined which means no more breakpoints
console.log(simple.next().value);
console.log("_________________________")

function* getNextId() {
    let id = 0;
    while (id < 3)
        yield id++;

}

let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value)
console.log("Two IDs created");
console.log(createUser.next().value);
console.log(createUser.next().value);

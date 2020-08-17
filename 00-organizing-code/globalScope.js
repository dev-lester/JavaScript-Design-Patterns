// What's with the Global scope anyway?

/*When you declare a variable outside of a statement or function, it is called gobal. Meaning to say
you can access those variable anyware in your program.*/ 

var a = 'this is something';
var b = 'yet another';

// example 1
function demo(){
    console.log(a);
}
demo(); // logs variable a 

// example 2
if (true) {
    console.log(a); // logs variable a
}

/*When using var in your intire program might not be a good idea. There might be a scenario 
when you use the previous variable it causes it break your program.*/

// [tips: always use the let keyword when declaring variables]
// let function has a blocked scope,

// example 01
// In this example you will encounter some reference error that says: c is not defined.
// it is because the let variable is only accessible to i'ts local scope.
function test() {
    let c = 'other stuff';
}
test();
console.log(c) // ReferenceError: c is not defined

var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
.reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);


////////////////////////////////////////////////////////////////////////////////////////////////////
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);

console.log(`MAX: ${max}`);


////////////////////////////////////////////////////////////////////////////////////////////////////

function sum(...args) {
    var result = 0;
    args.forEach(function (value) {
        result += value;
    });

    return result;
}

console.log(`SUM: ${sum(1, 2, 3)}`);


////////////////////////////////////////////////////////////////////////////////////////////////////

function sayHello(greeting = "Hello", name = "CampJS") {
    console.log(`${greeting} ${name}!`);
}

sayHello();            // "Hello CampJS!"
sayHello("Hi there");  // "Hi there CampJS!"

////////////////////////////////////////////////////////////////////////////////////////////////////
function log(arg, transform = x => x) {
    console.log(transform(arg));
}

log("Hello");                       // "Hello"
log("Hello", y => y.toUpperCase()); // "HELLO"

////////////////////////////////////////////////////////////////////////////////////////////////////

function assertEquals5(val, error = `${val}(${typeof val}) does not equal 5!`) {
    if(val !== 5) console.log(error);
}

assertEquals5(3);
assertEquals5(5);
assertEquals5('5');


////////////////////////////////////////////////////////////////////////////////////////////////////

exports.bangs =
    (string, bangs = string.length) => string + "!".repeat(bangs);

console.log(exports.bangs('HELLO'));
console.log(exports.bangs('HELLO', 5));
console.log(exports.bangs('HELLO', 7));


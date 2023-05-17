var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog('Hello')

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20);

console.log(doubleIt(10).toString());

console.log(objectMaker(doubleIt(100)));

let counter = 3;
function example() {
    console.log(counter);
    counter--;
    if (counter === 0) return;
    example();
}

example()


var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);

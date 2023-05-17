var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (value of Object.values(dairy)) {
        console.log(value)
    }
}

logDairy()

const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

function birdCan() {
    for (can of Object.entries(bird)) {
        console.log(can)
    }
}

birdCan()

function animalCam() {
    for (cam of Object.entries(animal)) {
        console.log(cam)
    }
}

animalCam()

const nums = [1,2,3,10,30]

function showNumber(number) {
    console.log(number)
}
nums.forEach(showNumber)
console.log('')


nums.filter( function(nums) {
    return nums > 20;
})

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers)

console.log(bestBoxers.get(1));
console.log('')

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'apple', 'pear', 'orange'];
const uniqueFruits = new Set(repetitiveFruits)
console.log(uniqueFruits)

function show() {
    console.log(repetitiveFruits)
}

show(...repetitiveFruits)

const string = 'hello'
const arrayofChars = [...string]
console.log(arrayofChars)

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);
let food = "Chocolate";
console.log(`My favourite food is ${food}`);
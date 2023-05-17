var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}
purchase2.totalPrice();

class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log('Turbo is ON')
    }
}

class Animal {}
class Bird extends Animal {}
class Eagle extends Bird {}

console.log('abc'.concat('def'));
console.log(["abc"].concat(["def"]));

console.log(new Date());

let apple = new String("apple");
console.log(apple); // --> String {'apple'}

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log('eagle1 has wings:', eagle1.hasWings);
console.log('eagle1 can fly:', eagle1.canFly);
console.log('eagle1 has feathers:', eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings)

var penquin1 = Object.create(bird);
penquin1.canFly = false;
console.log("penquin1: ", penquin1)
console.log("bird: ", bird)

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
console.log('')

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym('7-22', 'right corner', 'left corner')

console.log(boxingGym.openHrs)
console.log(boxingGym.stationaryBike)
console.log(boxingGym.treadmill)
console.log('')


function noDefaultParams(number) {
    console.log('Result', number * number);
}

noDefaultParams()

function withDefaultParams(number = 10) {
    console.log('Result', number * number)
}

console.log('')

class Animal {
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }
}
    

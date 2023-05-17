var train = ['wheat', 'salt', 'sugar']
console.log(train[0])
console.log(train[1])

function arrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

colors = ['red', 'green', 'blue']
arrayItems(colors)

function letterFinder(word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder('test', 't');

var house = {
    table: 'wood',
    walls: 'blue',
    bathrooms: 3
}

console.log(house.table)
console.log(house.walls)
console.log(house.bathrooms)

house.windows = 8
console.log(house.windows)
console.log(house)

house.windows = 6
console.log(house.windows)

var boat = {};
boat['number of doors'] = 6;
boat['color of walls'] = 'yellow'

console.log(boat)
console.log(boat["number of doors"])

house['tvs'] = 7
console.log(house)

var cars = ['mustang', 'porsche', 'camaro']
cars.push('ferrari')
console.log(cars)
cars.pop()
console.log(cars)

var greet = 'Hello'
console.log(greet.charAt(0))
console.log('wo'.concat('rl').concat('d'))

console.log('ho-ho-ho'.split('-'))

var clothes = []
clothes.push('shirts')
clothes.push('shoes')
clothes.push('pants')
clothes.push('shorts')
clothes.push('hats')
clothes.pop()
clothes.push('ties')
console.log(clothes[2])

var favCar = {
    color: 'red',
    convertible: true
}

console.log(favCar)

favCar.hp = 1000
console.log(favCar)
console.log(favCar.hp)


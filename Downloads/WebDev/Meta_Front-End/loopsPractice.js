for (i = 1; i <= 5; i++) {
    console.log(i)
}

for (i = 5; i > 1; i--) {
    console.log(i)
}

var i = 1
while (i < 6) {
    console.log(i);
    i++;
}

var i = 5
while (i > 0) {
    console.log(i);
    i--;
}

i = 2018
while (i <= 2022) {
    console.log(i);
    i++;
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

for (i = 1; i <= 10; i++) {
     if (i == 1) {
    console.log('Gold Medal')
} else if (i == 2) {
    console.log('Silver Medal')
} else if (i == 3) {
    console.log('Bronze Medal') 
} else {
    console.log(i)
}}

for (i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log('Gold Medal');
            break;
        case 2:
            console.log('Silver Medal');
            break;
        case 3:
            console.log('Bronze Medal');
            break;
        default:
            console.log(i);
            break;
    }}
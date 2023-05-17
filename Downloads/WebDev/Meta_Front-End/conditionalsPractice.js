var result = 50;

if (result > 40)    {
    console.log('You passed the test')
}   else {
    console.log('You did not pass the test')
}

var age = 20
if (age >= 65) {
    console.log('You get income from your pension.')
} else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary')
} else if (age < 18) {
    console.log('You get allowance')
} else {
    console.log('The value of the age variable is not numerical')
}

var day = 'Sunday'
switch (day) {
    case 'Monday':
        console.log('do');
        break;
    case 'Tuesday':
        console.log('do');
        break;
    case 'Wednesday':
        console.log('do');
        break;
    case 'Thursday':
        console.log('do');
        break;
    case 'Friday':
        console.log('do');
        break;
    case 'Saturday':
        console.log('do');
        break;
    case 'Sunday':
        console.log('Correct day');
        break;
    default:
        console.log('This is not a valid day');
        break;
}


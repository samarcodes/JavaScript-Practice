//if else if else statement
if(7>5) {
    console.log(true)
}

if(5>7) {
    console.log(true)
} else {
    console.log(false)
}

if(5>7) {
    console.log('5 > 7')
} else if(7 > 8) {
    console.log('7 > 8')
} else {
    console.log('Nothing')
}

//switch statement
var currentDay = 'Mon'
switch(currentDay) {
    case 'Mon':
    console.log('Monday')
    break;
    case 'Tue':
    console.log('Tuesday')
    break;
    case 'Wed':
    console.log('Wednesday')
    break;
    case 'Thu':
    console.log('Thursday')
    break;
    case 'Fri':
    console.log('Fridat')
    break;
    case 'Sat':
    console.log('Saturday')
    break;
    case 'Sun':
    console.log('Sunday')
    break;
    default:
    console.log("Invalid")
    break
}
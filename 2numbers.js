var num1 = 10    //Integer
var num2 = 20.9  //Decimal

console.log(num1)
console.log(num2)

//Addition
var sum = num1 + num2
//Subtraction
var sub = num1 - num2
//multiplication
var mul = num1 * num2
//division
var div = num1 / num2

var divByZero = num1 / 0;
console.log(divByZero)          //Infinity
console.log(typeof(divByZero))  //number

var mulByString = num1 * 'A'
console.log(mulByString)        //NaN (Not a Number)
console.log(typeof(mulByString))//number
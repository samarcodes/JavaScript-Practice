var num1 = 10;
var num2 = 20.3;
// toString() nuber as input and returns a string
console.log(num1.toString())
console.log(num2.toString())

var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC";
//parseInt() string numeral as input and returns corresponding integer value
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3)); //NaN coz of ABC

//paseFloat() string numeral as input and returns corresponding floating value
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

//toFixed() takes floating number and ronds it off to given position
var floatNo = 87.987653;
console.log(floatNo.toFixed())
console.log(floatNo.toFixed(2))
console.log(floatNo.toFixed(5))
// //to check whether a given string is a 10 digit number or not
// var str = "9988776655"
// var pattern = /^(\+91)?[\d]{10}$/g
// console.log(str.match(pattern))

var str = "www.edyoda.com"
var pattern = /^www\.[\w]+\.(com|co|in|org)$/g
console.log(str.match(pattern))
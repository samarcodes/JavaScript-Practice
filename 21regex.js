var str = "This is a black ball pen. This pen is really smooth"

// var pattern = /pen/gi
// var pattern = /./gi
var pattern = new RegExp('pen', 'gi')

console.log(str.search(pattern))
console.log(pattern.test(str))
console.log(str.match(pattern))
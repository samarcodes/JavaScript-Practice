var myString = "This is a string for JavaScript string functions JavaScript"


//return s the length of the string
console.log(myString.length)

// find location of a string inside another string
console.log(myString.indexOf('JavaScript'))
console.log(myString.indexOf('This'))

// find last index of a string inside another string
console.log(myString.lastIndexOf('JavaScript'))
console.log(myString.lastIndexOf('This'))

// get part of a string - slice(start, end)
console.log(myString.slice(0, 4))
console.log(myString.slice(21, 31))
console.log(myString.slice(-10))
console.log(myString.slice(5))

// get substring - substr(startPos, length)
console.log(myString.substr(0, 4))
console.log(myString.substr(21, 10))
console.log(myString.substr(21))

// Part-2
var exampleString = "This is JavaScript tutorial"

//toUpperCase() - it conserts string to uppercase
console.log(exampleString.toUpperCase())

//toLowerCase() - it conserts string to lowercase
console.log(exampleString.toLowerCase())

//concat() - it merges two or more string
var firstname = "JavaScript"
var lastname = "Playground"
console.log(firstname.concat(lastname))
console.log(exampleString.concat(' ',firstname,' ',lastname))
//we can also use '+' to concat two or more strings
console.log(exampleString + ' ' + firstname + ' ' + lastname)

//trim() - it removes leading and trailing spaces
var extraSpaceString = '        my            String        '
console.log(extraSpaceString.trim())

//charAt() - this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(11))

//split() - splits out string on the basis of the delimiter given to it as arg and returns array of strings
var sampleString = "This is my sample string"
console.log(sampleString.split(' '))
console.log(sampleString.split()) //gives string as same
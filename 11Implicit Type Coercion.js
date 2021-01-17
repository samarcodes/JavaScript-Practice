// Type Coersion is conversion of a value from one type to another datatype
// this can be done by us programatically or Automatically by JavaScript

//Implicit Type Coersion : Automatic
//Explicit Type Coersion : done by programmer

//Implicit Type Coersion
//adding string and number results in string
var mStr = 'Hello'
var mNum = 5
var mSum = mStr + mNum
console.log(mSum)
console.log(typeof(mSum))

//adding string and boolean results in string
console.log('hola' + true)
console.log(typeof('hola' + true))

//converting a string into numbers
console.log(+'2')
console.log(typeof(+'2'))

//
var mValue = 2 >= '2'
console.log(mValue)
console.log(typeof(mValue))

// 0, null, undefined, '' are treated as  
if(0) {
    console.log('True')
} else {
    console.log('False')
}

// practice questions
console.log(true + false)
console.log(12 / "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log(1 > null)
console.log("foo" + + "bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")
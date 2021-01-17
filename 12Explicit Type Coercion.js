// to string
var mNum = 15
console.log(String(mNum))      // '15'
console.log(String(true))      // 'true'
console.log(String(-98.10))    // '-98.10'
console.log(String(null))      // 'null' 
console.log(String(undefined)) // 'undefined

// to number
console.log(Number('2'))       // 2
console.log(Number(true))      // 1
console.log(Number(false))     // 0
console.log(Number('-98.10'))  //-98.10
console.log(Number('apple'))   //NaN

// to boolean
console.log(Boolean(1))        // true
console.log(Boolean(0))        // false
console.log(Boolean('apple'))  // true
console.log(Boolean(null))     // false
console.log(Boolean(undefined))// false
console.log(Boolean(NaN))      // false
console.log(Boolean(''))       // false
console.log(Boolean(-0))       // false
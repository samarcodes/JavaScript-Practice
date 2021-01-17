var mObj = {
    "name": 'John',
    "age": 28
}
console.log(mObj.name)
console.log(mObj.age)

//to conver JSON to string
var strJSON = JSON.stringify(mObj) 
//to conver string to JSON 
console.log(JSON.parse(strJSON))

//Array of JSON objects
var mArr = [
    {
        "name": 'John',
        "age": 28
    },
    {
        "name": 'Claire',
        "age": 24
    },
    {
        "name": 'Smith',
        "age": 32
    }   
 ]
 console.log(mArr[0])
 console.log(mArr[0].name)
 console.log(mArr[0].age)


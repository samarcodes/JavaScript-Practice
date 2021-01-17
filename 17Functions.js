//function declaration and defination
function sum() {
    var num1 = 10
    var num2 = 20
    var sum = num1 + num2
    return sum   
}

var ans = sum()  //function call
console.log(ans)


//function with arguments
//1
function greetings(name) {
    console.log('Welcome ' + name)
}
greetings('Samar')
greetings('Rahul')
greetings('Vishal')

//2 arguments with default value
function add(num1, num2, num3 = 40) {
    return num1 + num2 + num3
}
console.log(add(10,20))

// Note : if we pass more than required values in func. call then there will be no error
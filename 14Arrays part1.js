var fruits = ["apple", "banana", "kiwi", "grapes"]
console.log(fruits)
console.log(typeof(fruits))

// can access elements using index
console.log(fruits[2])
console.log(fruits[0])

// update values
fruits[3] = "black grapes"
console.log(fruits)

// add more items
//fruits[7] = "orange"  //but if we add element at 10 index the it wil add undefined at indexes 7,8,9
//console.log(fruits)

//we can do this to get last position
fruits[fruits.length] = "orange"
console.log(fruits)

// push() - add element at last
fruits.push("pear")
console.log(fruits)

// pop() - delete element from last and return it
var lastName = fruits.pop()
console.log(fruits)
console.log(lastName)
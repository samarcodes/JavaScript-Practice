//
var fruits = ["apple", "banana", "kiwi", "grapes"]
fruits.splice(3, 0, 'peach', 'mango')
// 1st tells where to start
// 2nd tells how many times to be deleted
// 3rd and son on tells what items to be added
console.log(fruits)

fruits.splice(0, 0, 'guava')
console.log(fruits)

// Delete item at specific position
fruits.splice(2, 1)
console.log(fruits)

fruits.splice(0, 2)
console.log(fruits)

// Concatenation
var otherFruits = ['lichi', 'papaya', 'pomegranate']
var allFruits = fruits.concat(otherFruits)
console.log(allFruits)

// Sorting Ascending and Descending
allFruits.sort()
console.log(allFruits)

allFruits.reverse()
console.log(allFruits)
var btn = document.getElementById('top-btn')

btn.addEventListener('mousedown', function() {
    console.log('Mouse Down')
})

btn.addEventListener('mouseup', function() {
    console.log('Mouse Up')
})

btn.addEventListener('click', function() {
    console.log('Click')
})

btn.addEventListener('dblclick', function() {
    console.log('Double Click')
})

var overCount = 0
var over = document.getElementById('over')
over.addEventListener('mouseover', function() {
    var countElement = document.querySelector('#over > p')
    overCount += 1
    countElement.innerHTML = overCount
})

var enterCount = 0
var enter = document.getElementById('enter')
enter.addEventListener('mouseenter', function() {
    var countElement = document.querySelector('#enter > p')
    enterCount += 1
    countElement.innerHTML = enterCount
})

var moveCount = 0
var move = document.getElementById('move')
move.addEventListener('mousemove', function() {
    var countElement = document.querySelector('#move > p')
    moveCount += 1
    countElement.innerHTML = moveCount
})
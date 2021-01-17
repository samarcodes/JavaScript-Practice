var mainHeading = document.getElementById('main-heading')
var btnIncreaseFont = document.getElementById('btn-increase')
var btnDecreaseFont = document.getElementById('btn-decrease')

var initialFontSize = window.getComputedStyle(mainHeading).fontSize //gives "24px"
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2))) //getting "24" and converting it to integer 24

btnIncreaseFont.addEventListener('click', function() {
    initialFontSize += 10
    mainHeading.style.fontSize = initialFontSize + 'px' // 34 => "34px"
})
btnDecreaseFont.addEventListener('click', function() {
    initialFontSize -= 10
    mainHeading.style.fontSize = initialFontSize + 'px' // 14 => "14px"
})

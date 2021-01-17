var countdownElement = document.getElementById("countdown")
var bgImageElemet = document.getElementById("bg-image")

var initialCountdownVal = countdownElement.innerHTML

var interval = setInterval(function() {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal -= 1 : 0
    countdownElement.innerHTML = initialCountdownVal
    var backImgPath = initialCountdownVal % 2 === 0 ? "/images/bg-1.png" : "/images/bg-2.jpg"
    bgImageElemet.src = backImgPath

    if(initialCountdownVal <= 0) { //to stop the interval
        clearInterval(interval)
    }
}, 1000)
var btn = document.getElementById("btn-click")
var mainDiv = document.querySelector("header div")

function onBtnClick() {
    //generating random numbers and converting it to string "rgb(10,10,10)"
    var colorValue = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"

    mainDiv.style.backgroundColor = colorValue
}
//Method 1 : using Event Properties
// btn.onclick = onBtnClick

//Method 2 : using addEventListener
btn.addEventListener('click', onBtnClick)
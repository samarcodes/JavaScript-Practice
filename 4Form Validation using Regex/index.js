var username = document.getElementById('username')
var loginForm = document.getElementById('login-form')
var usernameErrPara = document.getElementById('username-err')

username.addEventListener('input', function(e) {
    var currentValue = e.target.value
    var pattern = /^[\w]{6,8}$/

    if(pattern.test(currentValue)) {
        usernameErrPara.style.display = "none"
    } else {
        usernameErrPara.style.display = "block"
    }
})
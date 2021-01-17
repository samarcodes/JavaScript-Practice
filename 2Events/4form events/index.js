var username = document.getElementById('username')
var loginForm = document.getElementById('login-form')

username.addEventListener('input', function(event) {
    var currentValue = event.target.value
    currentValue = currentValue.toUpperCase()
    username.value = currentValue
})

username.addEventListener('focus', function() {
    console.log('Element Focussed')
})

username.addEventListener('blur', function() {
    console.log('Element Lost Focussed')
})

loginForm.addEventListener('submit', function(e) {
    alert('Form Submitted')
    e.preventDefault()
})
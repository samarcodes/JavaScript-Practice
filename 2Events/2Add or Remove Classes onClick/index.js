var mainHeading = document.getElementById("main-heading")
var btn = document.getElementById('btn-click')
var sidebar = document.getElementById('sidebar')
var menuButton = document.getElementById('menu-icon')

mainHeading.classList.add('big')

btn.addEventListener('click', function() {
    if(mainHeading.classList.contains('small')) {
        mainHeading.classList.remove('small')
        mainHeading.classList.add('big')
    } else {
        mainHeading.classList.remove('big')
        mainHeading.classList.add('small')
    }
})

menuButton.addEventListener('click', function() {
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show')
        sidebar.classList.add('hide')
    } else {
        sidebar.classList.remove('hide')
        sidebar.classList.add('show')
    }
})
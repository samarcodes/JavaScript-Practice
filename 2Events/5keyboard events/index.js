// //for keycode refer keycode.info

// //keydown event
// document.body.addEventListener('keydown', function(e) {
//     console.log("keydown for: " + e.code)
// })

// //keyup event
// document.body.addEventListener('keyup', function(e) {
//     console.log("keyup for: " + e.code)
// })

// //keypress event
// document.body.addEventListener('keypress', function(e) {
//     console.log("keypress for: " + e.code)
// })

var audio = document.getElementsByTagName('audio')
var selectedbutton

document.body.addEventListener('keydown', function(e) {
    if(e.code === 'KeyA') {
        audio[0].play()
        selectedbutton = document.getElementById('a')
    } else if(e.code === 'KeyS') {
        audio[1].play()
        selectedbutton = document.getElementById('s')
    } else if(e.code === 'KeyD') {
        audio[2].play()
        selectedbutton = document.getElementById('d')
    } else if(e.code === 'KeyF') {
        audio[3].play()
        selectedbutton = document.getElementById('f')
    } else if(e.code === 'KeyG') {
        audio[4].play()
        selectedbutton = document.getElementById('g')
    } else if(e.code === 'KeyH') {
        audio[5].play()
        selectedbutton = document.getElementById('h')
    } else if(e.code === 'KeyJ') {
        audio[6].play()
        selectedbutton = document.getElementById('j')
    } else if(e.code === 'KeyK') {
        audio[7].play()
        selectedbutton = document.getElementById('k')
    } else if(e.code === 'KeyL') {
        audio[8].play()
        selectedbutton = document.getElementById('l')
    }
    selectedbutton.style.boxShadow = '0 0 8px yellow'
})

document.body.addEventListener('keyup', function() {
    selectedbutton.style.boxShadow = 'none'
})
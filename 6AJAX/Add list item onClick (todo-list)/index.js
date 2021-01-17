var list = document.getElementById('todo-list')
var btnAdd = document.getElementById('add-item')
var btnUpdate = document.getElementById('update-item')
var btnRemove = document.getElementById('remove-item')
var inputBox = document.getElementById('todo-input')

// to get text from input field
var currentInputTask
inputBox.addEventListener('change', function(e) {
    currentInputTask = e.target.value
})

// if we press enter on input field it should add data to list
inputBox.addEventListener('keyup', function(e) {
    if(e.code === 'Enter') {
        addListItem()
    }
})

function createNewNode() {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(currentInputTask)
    newListElement.appendChild(textNode)
    newListElement.id = "item " + (list.childElementCount + 1)

    return newListElement
}

function addListItem() {
    if(currentInputTask !== undefined && currentInputTask !== null && currentInputTask !== '') {
        var newListElement = createNewNode()

        list.appendChild(newListElement) //appended new list item to given ul

        inputBox.value = ''
        currentInputTask = ''
    } else {
        alert('Enter a valid TODO item')
    }
}

// btnAdd.addEventListener('click', addListItem)
 btnAdd.addEventListener('click', createTODOItemAtBackend)

btnUpdate.addEventListener('click', function() {
    if(currentInputTask !== undefined && currentInputTask !== null && currentInputTask !== '') {
        var firstElement = list.firstElementChild
        var newListElement = createNewNode()  

        list.replaceChild(newListElement, firstElement)

        inputBox.value = ''
        currentInputTask = ''
    } else {
        alert('Enter a valid TODO item to update')
    }
})

btnRemove.addEventListener('click', function() {
    var firstElement = list.firstElementChild 
    list.removeChild(firstElement)
})

function createTODODynamically(id, title) {
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode(title)
    newListElement.appendChild(textNode)
    newListElement.id = id

    return newListElement
}

function getTODOListFromBackend() {
    var http = new XMLHttpRequest()
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                var response = JSON.parse(this.responseText)
                for(var i=0;i<response.length;i++) {
                    list.appendChild(createTODODynamically(response[i].id, response[i].title))
                }
            } else {
                console.log('Call Failed')
            }
        } 
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    http.send()
}
getTODOListFromBackend()

function createTODOItemAtBackend() {
    var http = new XMLHttpRequest()
    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 201) {
                var response = JSON.parse(this.responseText)
                list.appendChild(createTODODynamically(response.id, currentInputTask))
            } else {
                console.log('Call Failed')
            }
        } 
    }
    var obj = JSON.stringify({
        "userId": 1,
        "title": currentInputTask,
        "completed": false
    })
    http.send()
}
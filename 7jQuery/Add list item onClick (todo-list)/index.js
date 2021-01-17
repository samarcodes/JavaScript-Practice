// Code included inside $( document ). ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function() {
    var list = $('#todo-list')
    //var btnAdd = $('#add-item')
    var btnUpdate = document.getElementById('update-item')
    var btnRemove = document.getElementById('remove-item')
    var inputBox = $('#todo-input')

    // to get text from input field
    var currentInputTask = ''
    inputBox.on({
        'change': function(e) {
            currentInputTask = e.target.value    
        },
        'keyup': function(e) {
            if(e.code === 'Enter') {
                addListItem()
            }
        }
    })
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
        newListElement.append(textNode)
        newListElement.id = "item " + (list.childElementCount + 1)

        return newListElement
    }

    // function addListItem() {
    //     if(currentInputTask !== undefined && currentInputTask !== null && currentInputTask !== '') {
    //         var newListElement = createNewNode()

    //         list.append(newListElement) //appended new list item to given ul

    //         inputBox.val() = ''
    //         currentInputTask = ''
    //     } else {
    //         alert('Enter a valid TODO item')
    //     }
    // }

    // btnAdd.addEventListener('click', addListItem)
    // btnAdd.addEventListener('click', createTODOItemAtBackend)
    $('add-item').click(createTODOItemAtBackend)


    btnUpdate.addEventListener('click', function() {
        if(currentInputTask !== undefined && currentInputTask !== null && currentInputTask !== '') {
            var firstElement = list.firstElementChild
            var newListElement = createNewNode()  

            list.replaceChild(newListElement, firstElement)

            inputBox.val() = ''
            currentInputTask = ''
        } else {
            alert('Enter a valid TODO item to update')
        }
    })

    btnRemove.addEventListener('click', function() {
        var firstElement = list.firstElementChild 
        list.removeChild(firstElement)
    })

    function clearInputData() {
        inputBox.val('');
        currentInputTask = ''
    }

    function createTODODynamically(id, title) {
        var newListElement = document.createElement('li')
        var textNode = document.createTextNode(title)
        newListElement.appendChild(textNode)
        newListElement.id = id
        newListElement.className = "list-item"

        return newListElement
    }

    // function getTODOListFromBackend() {
    //     var http = new XMLHttpRequest()
    //     http.onreadystatechange = function() {
    //         if(this.readyState === 4) {
    //             if(this.status === 200) {
    //                 var response = JSON.parse(this.responseText)
    //                 for(var i=0;i<response.length;i++) {
    //                     list.append(createTODODynamically(response[i].id, response[i].title))
    //                     clearInputData()
    //                 }
    //             } else {
    //                 console.log('Call Failed')
    //             }
    //         } 
    //     }
    //     http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    //     http.send()
    // }
    // getTODOListFromBackend function using jQuery method of AJAX
    function getTODOListFromBackend() {
        $.get('https://jsonplaceholder.typicode.com/todos', function(data, status) {
            var response = data;
            for(var i=0;i<response.length;i++) {
                list.append(createTODODynamically(response[i].id, response[i].title))
                clearInputData()
            }
        })
    }
    // var listItem1 = "<li>List Item 1</li>"
    // var listItem2 = "<li>List Item 2</li>"
    // var listItem3 = "<li>List Item 3</li>"
    // var listItem4 = "<li>List Item 4</li>"
    // var listItem5 = "<li>List Item 5</li>"
    // list.append(listItem1, listItem2, listItem3, listItem4, listItem5)
    // list.remove()
    // $('li').first().remove()
    // $('li').last().remove()
    // $('li').eq(3).remove() //0 based index
    getTODOListFromBackend()

    // function createTODOItemAtBackend() {
    //     var http = new XMLHttpRequest()
    //     http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
    //     http.onreadystatechange = function() {
    //         if(this.readyState === 4) {
    //             if(this.status === 201) {
    //                 var response = JSON.parse(this.responseText)
    //                 list.append(createTODODynamically(response.id, currentInputTask))
    //             } else {
    //                 console.log('Call Failed')
    //             }
    //         } 
    //     }
    //     var obj = JSON.stringify({
    //         "userId": 1,
    //         "title": currentInputTask,
    //         "completed": false
    //     })
    //     http.send(obj)
    // }
    // createTODOItemAtBackend function using jQuery method of AJAX
    function createTODOItemAtBackend() {
        $.post('https://jsonplaceholder.typicode.com/todos', obj, function(data, status) {
            var response = data
            list.append(createTODODynamically(response.id, currentInputTask))
            clearInputData()
        })
        var http = new XMLHttpRequest()
        http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
        http.onreadystatechange = function() {
            if(this.readyState === 4) {
                if(this.status === 201) {
                    var response = JSON.parse(this.responseText)
                    list.append(createTODODynamically(response.id, currentInputTask))
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
})

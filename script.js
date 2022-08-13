let userName = prompt('Введите имя:')
let myTitle = document.getElementById('title')
if(userName) {
    myTitle.innerHTML = "Ваш список дел, " + userName +":"
} else {
    myTitle.innerHTML = "Ваш список дел, анонимный пользователь"
}

let count = 0

function addDeals() {
    let myTitle = document.getElementById('title')
    let myContainer = document.getElementById('container')
    let myList = document.getElementById('list')
    let myInput = document.getElementById('input')
    let myError = document.getElementById('error')

    let value = myInput.value
    count = count+1
    if(count<=5) {
        myList.innerHTML = myList.innerHTML + "<li>" +value + "</li>"
    } else {
        myError.innerHTML = "Можно ввести до 5 дел"

    }
    
}


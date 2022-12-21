//* To Do List
//* Untuk mengecek ada atau tidak local storage
// if(typeof(Storage) !== 'undefined') {
//     console.log('local storage available');
// } else {
//     console.log('tidak ada');
// }
//*===============================================

//*==============To Do Plain JS====================
const inputText = document.querySelector('#text');
const button = document.querySelector('#button');
const task = document.querySelector('#task');
const div = document.querySelectorAll('.style-task');
let listItems = [];

alert('Halo Selamat Datang Rafli')


if(localStorage.getItem('To Do Items')) {
    const itemLocalStorage = JSON.parse(localStorage.getItem('To Do Items'));
    itemLocalStorage.forEach((itemTodo) => {
        task.innerHTML += `<div class="style-task">
                                <p>${itemTodo}</p>
                                <div>
                                    <button class="clear" onclick="clear()">clear</button>
                                    <button class="done" onclick="done()">done</button>
                                </div>
                            </div>`
    listItems.push(itemTodo);
    })
}

function addTask() {
    if(!inputText.value == ' ') {
        //* Local Storage
        manageLocal('Add', inputText.value);
        task.innerHTML += `<div class="style-task">
                                <p>${inputText.value}</p>
                                <div>
                                <button class="done" onclick="done()">done</button>
                                <button class="clear" onclick="clear()">clear</button>
                                </div>
                            </div>`
        inputText.value = '';
    } else {
        alert('Input Tidak Boleh Kosong');
    }
};

document.addEventListener('click', (btn) => {
    if(btn.target.classList.contains('clear')) {
        btn.target.parentElement.parentElement.style.display = 'none';
        manageLocal('Delete',btn.target.parentElement.previousElementSibling.textContent);
    } else if (btn.target.classList.contains('done')) {
        btn.target.parentElement.previousElementSibling.style.textDecoration = 'line-through';
    }
})

function manageLocal(action, items) {
    switch(action) {
        case 'Add':
            listItems.push(items)
            break;
        case 'Delete':
            listItems = listItems.filter((todoItems) => {
                return todoItems != items;
            });
            break;
    }
    localStorage.setItem('To Do Items', JSON.stringify(listItems));
}


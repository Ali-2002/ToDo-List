//Selectors
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");
const inputContent = document.querySelector(".input-content");
const sortBtn = document.querySelector(".sort");
const ascSort = document.querySelector(".sort-first");
const descSort = document.querySelector(".sort-second");

let arrList = [];

//Event Listeners
document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        if (todoInput.value != "" && todoInput.value != " ") {
            event.preventDefault();

            todoList.style.display = "block";
            inputContent.style.borderTop = "none";
            inputContent.style.borderRadius = "0 0 0.5vw 0.5vw";

            // const todoDiv = document.createElement("div");
            // todoDiv.classList.add("todo");
            // todoList.appendChild(todoDiv);

            const newTodo = document.createElement("li");
            newTodo.classList.add("todo-item");
            newTodo.classList.add("item");
            newTodo.innerText = todoInput.value;
            newTodo.setAttribute('draggable', true)
            todoList.appendChild(newTodo);

            //Butun siyahini goturub arraye atmaq
            const allList = document.querySelectorAll(".todo-item");
            allList.forEach((element, index) => {
                if (index != 0) {
                    arrList.push(element.textContent);
                }
            });
            const removeBtn = document.createElement('button');
            removeBtn.classList.add("remove-btn");
            newTodo.appendChild(removeBtn);

            todoInput.value = "";

            inputContent.style.display = "none";
            todoList.style.borderRadius = "0.5vw";
            todoList.style.borderBottom = "0.1em solid #C4C4C4";
            todoList.style.marginBottom = "1.5vw";
            deleteX();
        }
    }
});



addBtn.addEventListener('click', () => {
    inputContent.style.display = "flex";
    todoList.style.borderRadius = "0.5vw 0.5vw 0 0";
    todoList.style.borderBottom = "none";
    todoList.style.marginBottom = "0";
    todoInput.focus();
});

//Sorting hissesi
ascSort.addEventListener('click', orderAsc);
descSort.addEventListener('click', orderDesc);
//Functions

function deleteX() {
    const deleteBtn = document.querySelectorAll('.remove-btn');
    deleteBtn.forEach(element => {
        element.addEventListener('click', myFunction);
    });
}
//Silmek ucun isledilen metod
function myFunction() {
    this.parentNode.remove(this.parentNode);
    const allList = document.querySelectorAll(".todo-item");
    if (allList.length == 0) {
        inputContent.style.display = "flex";
        inputContent.style.border = "0.1em solid #c4c4c4";
        inputContent.style.borderRadius = "0.5vw";
        todoList.style.display = "none";
    }

}


function addOrderArr() {
    arrList = []
    const listItems = document.querySelectorAll('.todo-item');
    listItems.forEach((item, index) => {

        arrList.push(item.innerHTML);
        console.log(item.innerHTML);
    });

    arrList.sort();
    console.log(arrList);
}

function orderAsc(e) {
    const listItems = document.querySelectorAll('.todo-item');
    addOrderArr();
    descSort.style.display = 'block';
    e.target.style.display = 'none';
    listItems.forEach((item, index) => {

        item.innerHTML = arrList[index];
        console.log(item);
    });
    deleteX();
}


function orderDesc(e) {
    const listItems = document.querySelectorAll('.todo-item');
    addOrderArr();
    const arrRevList = [...arrList].reverse();
    ascSort.style.display = 'block'
    e.target.style.display = 'none';
    listItems.forEach((item, index) => {

        item.innerHTML = arrRevList[index];

    });
    deleteX();
}

const drag = document.querySelector('.wrapper')
new Sortable(drag, {
    animation: 250
})
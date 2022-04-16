//Selectors
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");
const inputContent = document.querySelector(".input-content");
//Event Listeners
document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        if (todoInput.value != "" && todoInput.value != " ") {
            event.preventDefault();

            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
            todoList.appendChild(todoDiv);

            const newTodo = document.createElement("li");
            newTodo.classList.add("todo-item");
            newTodo.innerText = todoInput.value;
            todoDiv.appendChild(newTodo);

            const removeBtn = document.createElement('button');
            //removeBtn.innerHTML = '<img src="images/gray-circle-x.svg" alt="">';
            removeBtn.classList.add("remove-btn");
            todoDiv.appendChild(removeBtn);

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
});


// deleteBtn.forEach(element => {
//     element.addEventListener("click", (event) => {
//         console.log("salam");
//     });
// });




//Functions

function deleteX() {
    const deleteBtn = document.querySelectorAll('.remove-btn');
    deleteBtn.forEach(element => {
        element.addEventListener('click', myFunction);
    });
}

function myFunction() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    const myInput = document.querySelector("#myInput");
}

/*
function getFocus() {
    document.getElementById("myInput").focus();
  }
*/
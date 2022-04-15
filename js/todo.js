const todoInput = document.querySelector(".list-input");
const myList = document.querySelector(".lists");
const myMainList = document.querySelectorAll(".list")

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        const todoList=document.createElement("ul");
        todoList.classList.add("list");
        myList.appendChild(todoList);

        const newListElement=document.createElement("li");
        newListElement.classList.add("text");
        newListElement.innerText=todoInput.value;
        todoList.appendChild(newListElement);
        
        const removeBtn=document.createElement('button');
        removeBtn.innerHTML= ' <img src="images/gray-circle-x.svg"  alt="">'
        removeBtn.classList.add("removeBtn");
        todoList.appendChild(removeBtn);
    }
});

/*
removeBtn.forEach(element => {
    removeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        myMainList.forEach(element => {
            event.element.remove();
        });
    });
});
*/
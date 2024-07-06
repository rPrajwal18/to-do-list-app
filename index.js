
const input = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTodo() {
   
    if (input.value === "") {
        alert("You must add a To-Do");
    }
    else{
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.textContent = input.value;
        let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            span.classList.add('todo-cross');
            span.onclick = function() {
                this.parentElement.remove();
                saveData();
            };

            newTodo.appendChild(span);
            todoList.appendChild(newTodo);
    }

    input.value = '';
    saveData();

}

function saveData(){
    localStorage.setItem('data', todoList.innerHTML);
}
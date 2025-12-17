let todos = [];

const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');


function renderTodos () {
    todoList.innerHTML = "";

    todos.forEach((todo,index) => {
        const li = document.createElement('li');

        if(todo.completed) {
            li.classList.add("completed")
        }

        const span = document.createElement("span");
        span.textContent = todo.text;

        span.addEventListener("click" , () => {
            toggleTodo(index);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            deleteTodo(index);
        });
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li)
        
    });
} 

todoInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter") {
        const value = todoInput.value.trim();

        if(value !== "") {
            todos.push({
                text:value,
                completed:false,
            });

            todoInput.value = "";
            renderTodos();
        }
    }
})

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index,1);
    renderTodos();
}
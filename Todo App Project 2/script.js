const button = document.getElementById("button");
const listDiv = document.getElementById("list");


let todoList = JSON.parse(localStorage.getItem("todos")) || [];

button.addEventListener(
    'click',
    (e) => {
        const task = document.getElementById("task").value.trim();
        todoList.push(task);
        const setList = JSON.stringify(todoList);
        localStorage.setItem("todos", setList);
    }
);


function display() {
    listDiv.innerHTML = "";
    todoList.forEach((e) => {
        const task = document.createElement("div");
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute('id', 'deleteButton');
        console.log(e);
        task.innerHTML = "<p>" + e + "</p>";
        listDiv.appendChild(task);
    });
}

display();
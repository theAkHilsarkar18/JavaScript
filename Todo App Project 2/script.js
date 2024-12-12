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
        console.log(e);
        task.innerHTML = "<p>" + e + " <button type='submit' id='delButton'>Delete</button></p>";
        listDiv.appendChild(task);
    });
}


display();
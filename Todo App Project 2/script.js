const button = document.getElementById("button");
const listDiv = document.getElementById("list");

const task = document.getElementById("task")
let todoList =   [];

button.addEventListener(
    'click',
    () => {

        const taskvalue = task.value
        todoList.push(taskvalue)
        console.log(todoList)

    }

);


// function display( ) {
//     listDiv.innerHTML = "";
//     todoList.forEach((e) => {
//         const task = document.createElement("div");
//         console.log(e);
//         task.innerHTML = "<p>" + e + " <button type='submit' id='delButton'>Delete</button></p>";
//         listDiv.appendChild(task);
//     });
// }



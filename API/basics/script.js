function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
        }
    );
}

fetchUsers();
//https://www.omdbapi.com/?i=tt3896198&apikey=bb11e0e8&t=pushpa
const button = document.getElementById("button");

button.addEventListener(
    'click',
    (e) => {
        const search = document.getElementById("search").value.trim();
        const api = "https://www.omdbapi.com/?i=tt3896198&apikey=bb11e0e8&t=${search}";
        fetch(api).then(
            (response) => {
                if (!response.ok) {
                    console.log("API Cant call !");
                }
            }
        );

    }
);
const button = document.getElementById("search");

button.addEventListener(
  'click',
  (e) => {
    const search = document.getElementById("input").value.trim();
    const api = "https://www.omdbapi.com/?i=tt3896198&apikey=bb11e0e8&t=" + search;;
    fetch(api).then(
      (response) => {
        if (!response.ok) {
          throw new Error("API Calling Failed !");
        }
        return response.json();
      }
    ).then(
      (data) => {
        console.log(data);
        const output = document.querySelector(".output");
        const div = document.createElement("div");
        div.innerHTML = `
            <h4>${data.Title}</h4>
            <img src="${data.Poster}">
        `;
        output.appendChild(div);
      }
    );
  }
);

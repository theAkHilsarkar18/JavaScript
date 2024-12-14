const refresh = document.getElementById("refresh");

refresh.addEventListener(
  'click',
  (e) => {
    fetch("https://dog.ceo/api/breeds/image/random").then(
      (response) => {
        if (!refresh.ok) {
          throw new Error("API Calling request failed !");
        }
        return response.json();
      }
    ).then(
      (data) => {
        const imgUrl = data.message;
        const img = document.createElement("img");
        img.src = imgUrl;
        document.body.appendChild(img);

      }
    );
  }
);

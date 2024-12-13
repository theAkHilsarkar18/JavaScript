
const button = document.getElementById("button");

button.addEventListener(
    'click',
    (e)=>{
        const search = document.getElementById("search").value.trim();
        searchMovie(search);
    }
);

function searchMovie(movie)
{
    fetch(`https://omdbapi.com/?i=tt3896198&apikey=bb11e0e8&s=${movie}`).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}

let div = document.createElement("div");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function getGif() {
  let img = document.createElement("img");
  let input = document.getElementById("searchTerm");
  let url = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  let temp = url.data.data[getRandomInt(0, url.data.data.length)].images.original.url;
  img.setAttribute("src", temp);
  div.append(img);
  document.body.append(div);
}

document.querySelector("#submitButton").addEventListener("click", (e) => {
  e.preventDefault();
  getGif();
});
document.querySelector("#dltButton").addEventListener("click", (e) => {
    document.querySelector('div').innerHTML = ''; 
});

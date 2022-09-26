// const url = "https://www.amiiboapi.com/api/amiibo/";
const output = document.querySelector(".output");

fetch(url)
.then(response => response.json())
.then(data => listStuff(data.amiibo))
.catch(error => {
   console.log("Error: " + error);
})

let listStuff = (data) => {
    output.innerHTML = "";

    for (let item of data) {
        // console.log(item);
        output.innerHTML += `
        <div class="amiibo_card">
            <img src="${item.image}">
            <h2>${item.character}</h2>
            <p>${item.amiiboSeries}</p>
        </div>
        `
    }
};

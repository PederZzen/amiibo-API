import { listStuff } from "./utils.mjs"

let collection = [];
const output = document.querySelector(".output");

let getCharacter = () => {
    const api = `https://www.amiiboapi.com/api/amiibo/`;

    fetch(api) 
     .then(response => response.json())
     .then(data => {
        collection = data.amiibo;
        listStuff(data.amiibo, output);
     })
     .catch(error => {
        console.error("Error: " + error);
        output.innerHTML = "Could not fetch stuff..";
     });
}

getCharacter();

const input = document.querySelector("#input");

let filterCharacter = () => {
    const filterQuery = input.value;
    // console.log(collection.length);

    const filtered = collection.filter((card) => {
        // console.log(card.name, filterQuery);
        // console.log(card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1);
        return card.name.toUpperCase().indexOf(filterQuery.toUpperCase().trim()) > -1;
    })

    listStuff(filtered, output)
}

input.addEventListener("keyup", filterCharacter)
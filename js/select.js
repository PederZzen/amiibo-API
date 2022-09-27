import { listStuff } from "./utils.mjs";

const output = document.querySelector(".output");
const select = document.querySelector("select");

let filterCharacter = () => {
    let id = select.value;
    // console.log(id);

    if (id !== "none") {
        output.innerHTML = "Loading...";
        const url = `https://www.amiiboapi.com/api/amiibo/?character=${id}`;

        fetch(url)
        .then(response => response.json())
        .then(data => listStuff(data.amiibo, output))
        .catch(error => {
           console.log("Error: " + error);
        })
    } else {
        output.innerHTML = "Please select character"
    }
 }

select.addEventListener("change", filterCharacter)

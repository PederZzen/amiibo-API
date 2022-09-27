export function listStuff(data, out) {
    out.innerHTML = "";
    let newDivs = "";

    for (let item of data) {
        // console.log(item);
        newDivs += `
        <div class="amiibo_card">
            <img src="${item.image}" alt="${item.character}">
            <h2>${item.character}</h2>
            <p>${item.amiiboSeries}</p>
        </div>
        `;
    }

    out.innerHTML = newDivs;
};
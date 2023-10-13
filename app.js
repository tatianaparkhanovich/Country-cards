const row = document.querySelector(".row");

const renderCard = (svg, name, region, population, languages, curString) => {
  row.insertAdjacentHTML(
    "beforeend",
    `<div class="col">
          <div class="card h-100">
           <img src="${svg}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">
                ${region}
              </p>
              <p class="card-text">👪 ${population}</p>
              <p class="card-text">🤑${languages} </p>
               <p class="card-text">💲${curString} </p>
            </div>
          </div>
</div>
`
  );
};
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((obj) => {
    const countryСards = obj;
    countryСards.forEach((el, i) => {
      if (i % 10 === 0) {
        const image = el.flags.svg;
        const name = el.name.common;
        const region = el.region;
        const population = el.population;

        const languages = el.languages
          ? Object.values(el.languages).join(",")
          : "-";
        const currencies = el.currencies ? Object.values(el.currencies) : [];
        const curString = currencies.length
          ? currencies.map((el) => el.name + " " + el.symbol).join(", ")
          : "-";
        renderCard(image, name, region, population, languages, curString);
      }
    });
  });

const row = document.querySelector(".row");
const renderCard = (svg, name, region, population, languages, currencies) => {
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
               <p class="card-text">💲${currencies} </p>
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
    console.log(obj);
    countryСards.forEach((el, i) => {
      if (i % 10 === 0) {
        const image = el.flags.svg;
        const name = el.name.common;
        const region = el.region;
        const population = el.population;
        const languages = el.languages;
        const currencies = el.currencies.XPF;
        renderCard(image, name, region, population, languages, currencies);
      }
    });
  });

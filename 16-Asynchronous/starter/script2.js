'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.eu/rest/v2/
// https://countries-api-836d.onrender.com/countries/

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}" >
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

//-------for creating custome error messages for display
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};


// Making separate function for handling error messages for each fetch request
const getJSON = function(url,errMsg = 'Something went wrong'){
    return fetch(url).then(response => {
      if(!response.ok) {
        throw new Error(`${errMsg} (${response.status})`);
      }

      return response.json();
    });
}

//---------using Chaining Promises Getting NeighbourCountry and


const getCountryData = country => {
  //country 1
  getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`,'Country not found')
  
    .then(data => {
      // console.log(data);
      renderCountry(data[0]);


    //   const neighbour = data[0].borders[0];
      const neighbour = 'scjkl';

      if (!neighbour) return;
      //country 2
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,'Country not found'); 
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} `);
      renderError(`something went wrong ${err.message}. Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('usa');
});


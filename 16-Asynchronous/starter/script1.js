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
  // countriesContainer.style.opacity = 1;
};

//-------for creating custome error messages for display
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const resquest = new XMLHttpRequest();
//   resquest.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   resquest.send();
//   // console.log(resquest.responseText);

//   resquest.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
// <article class="country">
// <img class="country__img" src="${data.flag}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )}</p>
//   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// </div>
// </article>
// `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// // getCountryData('germany');
// getCountryData('portugal');
// getCountryData('usa');

//---------------CALLBACK HELL Getting neighboureCountry this is using nested api calling using AJAX

// const getCountryNeighbour = function (country) {
//   //AJAX calling country
//   const resquest = new XMLHttpRequest();
//   resquest.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   resquest.send();
//   // console.log(resquest.responseText);

//   resquest.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render the country 1
//     renderCountry(data);

//     //get neighboring countries
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     //AJAX calling country 2
//     const resquest2 = new XMLHttpRequest();
//     resquest2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     resquest2.send();

//     resquest2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       //render neighboring country
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ----------promises ===================================
//----------------fetc() it will return promise object

// const resquest = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );
// console.log(resquest);

// ------------------consuming promises by using then() function-> handling promise object

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
// getCountryData('portugal');

//-------------Getting Country this is usingpromises

// const getCountryData = country => {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       return renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');

//---------using Chaining Promises Getting NeighbourCountry and


const getCountryData = country => {
  //country 1
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => {

      if(!response.ok) {
        throw new Error(`Country not found: ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      // console.log(data);
      renderCountry(data[0]);


      const neighbour = data[0].borders[0];

      if (!neighbour) return;
      //country 2
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
      );
    })
    // using shortcut arrow function with return value
    .then(response => {
      
      if(!response.ok) {
        throw new Error(`Country not found: ${response.status}`);
      }

     return response.json();

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


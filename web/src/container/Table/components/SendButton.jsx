import React from 'react';

const date = new Date();
const timeNow = `${date.getDate()}/${date.getMonth() + 1}`;

const localStorageData = JSON.parse(localStorage.getItem('Countries'));
let countryData = localStorage.getItem('Countries') !== null ? localStorageData : [];

export function SendButton(props) {

  function storage(event) {
    countryData.push({
      day: timeNow,
      country: props.submitCountry
    });
    localStorage.setItem('Countries', JSON.stringify(countryData));
    event.preventDefault();
  };
  //console.log(Object.entries(localStorageData).filter(value => value.));

  return (
    <div>
      <p>Deseja selecionar a nação: <span>{props.submitCountry}</span>?
        <button onClick={storage}>Confirmar</button></p>
    </div>
  )
}
export { localStorageData } 
import React, { useState }  from 'react';

const date = new Date();
const timeNow = `${date.getDate()}/${date.getMonth() + 1}`;

const stateDate = date.getHours();

const localStorageData = JSON.parse(localStorage.getItem('Countries'));
let localStorageState = localStorage.getItem('State');


let countryData = localStorage.getItem('Countries') !== null ? localStorageData : [{'day':'-','country':'-'},{'day':'-','country':'-'}];
let savedStorage = countryData?Object.entries(countryData):[];


console.log(localStorageState)

export function SendButton(props) {

  function storage(event) {

    countryData.push({
      day: timeNow,
      country: props.submitCountry
    });
    localStorage.setItem('State', JSON.stringify({
      hour: date.getHours(),
      value: 'true'
    }));
    console.log(localStorageState)
    localStorage.setItem('Countries', JSON.stringify(countryData));
    event.preventDefault();
    const storageArray = Object.entries(countryData);
    const storageSlice = storageArray.slice(-1)[0];
    savedStorage.push(storageSlice);

    props.chosed(localStorageState);
  };

  //{savedStorage.slice(-1)[0][1].day === timeNow? <p>Você já escolheu uma nação hoje!</p> : }

  return (
    <div>
      <p>Deseja selecionar a nação: <span>{props.submitCountry}</span>?
        <button onClick={storage}>Confirmar</button></p>
    </div>

  )
}
export { localStorageData } 
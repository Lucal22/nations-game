import React from 'react';
import { date } from '../../_components/Clock';

export const betDay = date.getDate();

const localStorageData = JSON.parse(localStorage.getItem('Countries'));

let countryData = localStorage.getItem('Countries') !== null ? localStorageData :
  [{ 'day': '-', 'country': '-' },
  { 'day': '-', 'country': '-' }];

let savedStorage = countryData ? Object.entries(countryData) : [];

export function SendButton(props) {

  function storage(event) {
    countryData.push({
      day: betDay,
      country: props.submitCountry
    });
    localStorage.setItem('Countries', JSON.stringify(countryData));
    event.preventDefault();
    const storageArray = Object.entries(countryData);
    const storageSlice = storageArray.slice(-1)[0];
    savedStorage.push(storageSlice);
  };

  return (
    <div>{savedStorage.slice(-1)[0][1].day === betDay ? <p>Você já escolheu uma nação hoje!</p> :
      <p>Deseja selecionar a nação: <span>{props.submitCountry}</span>?
        <button onClick={storage}>Confirmar</button></p>}
    </div>

  )
}

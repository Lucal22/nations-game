import React, { useState } from 'react';
import { date } from '../../_components/Clock';

export const betDay = date.getDate();

const localStorageData = JSON.parse(localStorage.getItem('Countries'));

let countryData = localStorage.getItem('Countries') !== null ? localStorageData :
  [{ 'day': '-', 'country': '-' },
  { 'day': '-', 'country': '-' },
  { 'day': '-', 'country': '-' },
  { 'day': '-', 'country': '-' },
  { 'day': '-', 'country': '-' }];

export let savedStorage = countryData ? Object.entries(countryData) : [];

export function SendButton(props) {
  const [selected, setSelected] = useState(false)

  function storage(event) {
    countryData.push({
      day: betDay,
      country: props.submitCountry
    });
    setSelected(true);
    localStorage.setItem('Countries', JSON.stringify(countryData));
    const storageArray = Object.entries(countryData);
    const storageSlice = storageArray.slice(-1)[0];
    savedStorage.push(storageSlice);

    event.preventDefault();
  };

  return (
    <div>{selected ?<> <p>Você escolheu a nação {props.submitCountry}.</p>
       <p>Volte as 17h para ver o resultado!</p></>:
      <p>Deseja selecionar a nação: <span>{props.submitCountry}</span>?
        <button onClick={storage}>Confirmar</button></p>}
    </div>

  )
}

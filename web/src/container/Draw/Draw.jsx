import React from 'react';
import { rand } from './components/DrawNumber';
import CardList from '../ContentArea/components/CardList';
import { dayUae } from '../_components/Clock';
import { storageSlice } from '../Results/Results';
import './Draw.scss';

const lastStorageObject = storageSlice.slice(-1)[0];
const lastCountrySelected = storageSlice.length < 3 ? [] : lastStorageObject[1];
const lastDayString = (dayUae - 1);
const lastNumbers = rand.slice(2);

export default function Draw() {

  return (
    <section className='app__Draw'>
      <div className='app__draw-content'>
        {
          CardList.map((items) => {
            return items.numbers.map((number, key) => {
              return (number === lastNumbers ?
                <div key={key} className=''>
                  <h1>A nação de hoje é: </h1>
                  <h2><span>{items.country}</span></h2>
                  <img alt={items.country} src={items.flag} />
                  <div>
                    {lastCountrySelected.day === lastDayString ?
                      items.country === lastCountrySelected.country ?
                        <p>Parabéns! Você acertou a nação de hoje!!!!</p> :
                        <p>Não foi dessa vez. A nação que você selecionou foi: {lastCountrySelected.country}</p> :
                      <p>Você não selecionou nenhuma nação nessa rodada.</p>
                    }
                    <p>Tente novamente em menos de 30 minutos.</p>
                  </div>
                </div>
                : null)

            })
          })
        }
      </div>
    </section>
  )
}
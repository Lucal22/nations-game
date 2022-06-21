import React from 'react';
import './Results.scss';
import DrawedCountries from './components/DrawedCountries';
import { dayUae } from '../_components/Clock'


const localStorageData = JSON.parse(localStorage.getItem('Countries'));
const storageArray = localStorageData ? Object.entries(localStorageData) : [];
export const storageSlice = localStorageData ? storageArray.slice(Math.max(storageArray.length - 5, 0)) : [];

export default function Results() {
  return (
    <section className='app__results'>
      <div className='app__results-content theme-bg'>
        <article>
          <h1 className='app__underline-color'>RESULTADOS</h1>
          <p>Aqui é possível visualizar as suas 5 últimas apostas e os resultados os últimos 5 dias.</p>
          <h2>Suas últimas apostas e resultados:</h2>
          <div className='app__results-flex'>
            <table>
              <thead>
                <tr>
                  <th>
                    Dia
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  [dayUae - 4, dayUae - 3, dayUae - 2, dayUae - 1, dayUae].map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{item}</td>
                      </tr>
                    )
                  }
                  )}
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Aposta</th>
                </tr>
              </thead>
              <tbody>
                {storageSlice.map((item, key) => {
                  return (<tr
                    key={key}>
                    <td>{item[1].country}</td>
                  </tr>)
                })}
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>
                    Resultados
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  [3, 2, 1, 0].map((item, key) => {
                    return (
                      <DrawedCountries
                        key={key}
                        date={item} />
                    )
                  }
                  )}
                <tr>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  )
}
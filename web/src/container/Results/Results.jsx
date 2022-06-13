import React from 'react'
import './Results.scss'

import { localStorageData } from '../Table/components/SendButton'

const storageArray = Object.entries(localStorageData);
const storageSlice = storageArray.slice(Math.max(storageArray.length - 5, 0))

export default function Results() {
  return (
    <section className='app__results'>
      <div className='app__results-content theme-bg'>
        <article>
          <h1 className='app__underline-color'>Resultados</h1>
          <p>Aqui é possível visualizar as suas 5 últimas apostas e os resultados os últimos 5 dias.</p>
          <h2>Suas últimas apostas e resultados:</h2>
          <table>
            <thead>
              <tr>
            <th>Dia</th>
            <th>Aposta</th>
            <th>Resultado</th>
            </tr>
            </thead>
            <tbody>
            {storageSlice.map((item, key) => {
              return (<tr
                key={key}>
                <td>{item[1].day}</td>
                <td>{item[1].country}</td>
                <td>{item[1].country}</td>
              </tr>)
            })}
            
            </tbody>
          </table>
        </article>
      </div>
    </section>
  )
}
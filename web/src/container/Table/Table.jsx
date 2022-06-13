import React, { useState } from 'react'
import Cards from './components/Cards'
import CardList from './components/CardList'
import {SendButton} from './components/SendButton'
import './Table.scss'

export default function Table() {
  const [selectedCountry, setSelectedCountry] = useState('')

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }


  return (
    <section className='app__table'>
      <div className='app__table-content'>
        <div className='app__table-grid'>
          {CardList.map((items) => {
            return (
              <Cards
                handleSelectedCountry={handleSelectedCountry}
                key={items.id}
                id={items.id}
                country={items.country}
                flag={items.flag}
                number={items.number}
                numbers={items.numbers}
              />
            )
          })}
        </div>
        <div className='app__table-submit'>
          {selectedCountry?
          <SendButton
          submitCountry={selectedCountry}
        />:
        <p>Selecione uma nação!</p>
          }
          
        </div>
      </div>
    </section>
  )
}
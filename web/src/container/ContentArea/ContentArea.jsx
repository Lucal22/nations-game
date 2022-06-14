import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import CardList from './components/CardList'
import { SendButton } from './components/SendButton'
import Draw from '../Draw/Draw'
import './ContentArea.scss'

export default function ContentArea() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [time, setTime] = useState(17)
  const [timeSum, setTimeSum] = useState()

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const sum = hour + date.getMinutes();
      setTime(hour);
      setTimeSum(sum);
    }, 1000)
  }, [])

  return (
    <section className='app__table'>
      <div className='app__table-content'>
        {time === 17 && timeSum < 49?
            <Draw
            />
          :
          <>
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
              {selectedCountry ?
                <SendButton
                  submitCountry={selectedCountry}
                /> :
                <p>Selecione uma nação!</p>
              }
            </div>
          </>
        }
      </div>
    </section>
  )
}
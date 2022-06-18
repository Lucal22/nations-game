import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import CardList from './components/CardList'
import { SendButton, savedStorage } from './components/SendButton'
import { dayUae } from '../_components/Clock'
import Draw from '../Draw/Draw'
import './ContentArea.scss'

export default function ContentArea() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [time, setTime] = useState()
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
    }, 20)
  }, [])

  let beforeDraw = 17 - time;
  let afterDraw = 24 + beforeDraw;
  //  && timeSum < 49 && timeSum > 17 
  return (
    <section className='app__table'>
      <div className='app__table-content'>
        {
          time !== 17 ?
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
                {
                  savedStorage.slice(-1)[0][1].day === dayUae ?
                    <>
                      <p>Você já escolheu uma nação hoje!</p>
                      <p>O resultado estará disponível em:
                        {time < 17 || time === 17 && timeSum < 49 ?
                          (beforeDraw) === 0 ?
                            <span> menos de uma hora</span> :
                            <span> {beforeDraw} horas  </span> :
                          <span> {afterDraw} horas</span>}
                      </p>
                    </> :
                    selectedCountry ?
                      <SendButton
                        submitCountry={selectedCountry} /> :
                      <p>Selecione uma nação!</p>
                }
              </div>
            </>
        }
      </div>
    </section>
  )
}
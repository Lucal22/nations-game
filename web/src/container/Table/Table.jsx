import React from 'react'
import Cards from './components/Cards'
import CardList from './components/CardList'
import './Table.scss'

export default function Table (){
  return (
    <section className='app__table'>
      <div className='app__table-content'>
        <div className='app__table-grid'>
          {CardList.map((items)=>{
            return(
              <Cards
              key = {items.id}
              country = {items.country}
              flag = {items.flag}
              number = {items.number}
              numbers = {items.numbers}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
import React from 'react'
import './Header.scss'
import Nav from './components/Nav'

export default function Header (){
  return (
    <section className='app__header'>
      <Nav />
    </section>
  )
}
import React from 'react'
import './Header.scss'
import Nav from './components/Nav'

export default function Header (){
  return (
    <header className='app__header'>
      <Nav />
    </header>
  )
}
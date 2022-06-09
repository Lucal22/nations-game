import React from 'react'
import ThemeButton from './components/ThemeButton';
import './Header.scss'
import MenuButton from './components/MenuButton';

export default function Header() {
  return (
    <header className='app__header'>
      <nav className='app__header-nav'>
        <ul className='app__header-nav-content'>
          <div className='app__header-nav-div'>
            <li>
              <a href='#Explanation'>Como jogar?</a>
            </li>
            <li>
              <a href='#About'>Sobre</a>
            </li>
          </div>
          <div>
            <li>
              <a href='#'><h1>NAÇÕES</h1></a>
            </li>
          </div>
          <div className='app__header-nav-div'>
            <li>
              <a href='#Results'>Resultados</a>
            </li>
            <li>
              <ThemeButton />
            </li>
          </div>
        </ul>
        <MenuButton />
      </nav>
    </header>
  )
}
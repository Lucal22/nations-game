import React from 'react'
import ThemeButton from './components/ThemeButton';
import './Header.scss'
import MenuButton from './components/MenuButton';

export default function Header() {
  return (
    <header className='app__header'>
      <nav className='app__header-nav'>
        <ul className='app__header-nav-content'>
          <div className='app__header-nav-div app__header-nav-div-1'>
          <li>
              <a href='#About'>Sobre</a>
            </li>
            <li>
              <a href='#Explanation'>Como jogar?</a>
            </li>
          </div>
          <div>
            <li>
              <h1><a href='#'>NAÇÕES</a></h1>
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
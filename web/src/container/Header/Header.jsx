import React from 'react'
import ThemeButton from './components/ThemeButton';
import './Header.scss'
import MenuButton from './components/MenuButton';
import { Popover } from '@headlessui/react';
import About from '../About/About';
import Explanation from '../Explanation/Explanation';
import Results from '../Results/Results';

export default function Header() {
  return (
    <header className='app__header'>
      <nav className='app__header-nav'>
        <ul className='app__header-nav-content'>
          <div className='app__header-nav-div app__header-nav-div-1'>
            <li>
              <Popover>
                <Popover.Button className='app__header-nav-button theme-bg'>
                 <p>Sobre</p>
                </Popover.Button>
                <Popover.Panel>
                  <About />
                </Popover.Panel>
              </Popover>
            </li>
            <li>
              <Popover>
                <Popover.Button className='app__header-nav-button theme-bg'>
                  <p>Como jogar?</p>
                </Popover.Button>
                <Popover.Panel>
                  <Explanation />
                </Popover.Panel>
              </Popover>
            </li>
          </div>
          <div>
            <li>
              <h1><a href='/'>NAÇÕES</a></h1>
            </li>
          </div>
          <div className='app__header-nav-div'>
            <li>
            <Popover>
                <Popover.Button className='app__header-nav-button theme-bg'>
                  <p>Resultados</p>
                </Popover.Button>
                <Popover.Panel>
                  <Results />
                </Popover.Panel>
              </Popover>
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
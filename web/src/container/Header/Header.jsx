import React from 'react'
import ThemeButton from './components/ThemeButton';
import './Header.scss'
import { Popover } from '@headlessui/react';
import { Question, ClipboardText, BookmarkSimple } from 'phosphor-react'
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
                 <p className='app__header-nav-p'>
                  <BookmarkSimple size={32} />
                 </p>
                </Popover.Button>
                <Popover.Panel>
                  <About />
                </Popover.Panel>
              </Popover>
            </li>
            <li>
              <Popover>
                <Popover.Button className='app__header-nav-button theme-bg'>
                  <p className='app__header-nav-p'>
                    <Question 
                    size={32} />
                  </p>
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
          <div className='app__header-nav-div app__header-nav-div-2'>
            <li>
            <Popover>
                <Popover.Button className='app__header-nav-button theme-bg'>
                  <p className='app__header-nav-p'>
                    <ClipboardText size={32} />
                  </p>
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
      </nav>
    </header>
  )
}
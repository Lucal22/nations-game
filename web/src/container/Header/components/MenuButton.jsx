import React, { useState } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Popover } from '@headlessui/react'
import ThemeButton from './ThemeButton';

function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Popover className='app__header-nav-menu'>
            <Popover.Button>
                {isOpen ?
                    <HiX  
                    className='app__header-nav-menu-svg-bg'
                    onClick={() => setIsOpen(false)} />
                    : <HiOutlineMenu 
                    className='app__header-nav-menu-svg-bg'
                    onClick={() => setIsOpen(true)} />}
            </Popover.Button>
            <Popover.Panel>
                <div className='app__header-nav-li app__header-nav-menu-bg'>
                    <ul>
                        <li>
                            <a href='#Explanation'>Como jogar?</a>
                        </li>

                        <li>
                            <a href='#Results'>Resultados</a>
                        </li>
                        <li>
                            <a href='#About'>Sobre</a>
                        </li>
                        <div>
                        <li>
                            <ThemeButton />
                        </li>
                        </div>
                    </ul>
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export default MenuButton
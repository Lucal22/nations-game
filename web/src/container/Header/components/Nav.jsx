import React, { useState } from 'react'
import { Popover } from '@headlessui/react'
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='app__header-nav'>
            <ul className='app__header-nav-content'>
                <div>
                    <li>
                        <a href='#Explanation'>Como jogar?</a>
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
                        <a href='#About'>Sobre</a>
                    </li>
                </div>
            </ul>

            <Popover className='app__header-nav-menu'>
                <Popover.Panel className='app__header-nav-li'>
                
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
                    </ul>
                    
                </Popover.Panel>
                <Popover.Button>
                    {isOpen ?
                        <HiX onClick={() => setIsOpen(false)} />
                        : <HiOutlineMenu onClick={() => setIsOpen(true)} />}
                </Popover.Button>

            </Popover>

        </nav>

    )
}
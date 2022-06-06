import React from 'react'

export default function Nav() {
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
        </nav>
    )
}
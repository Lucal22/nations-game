import React from 'react'
import './About.scss'

export default function About() {
  return (
    <section className='app__about'>
      <div className='app__about-content theme-bg'>
        <article>
          <h1 className='app__underline-color'>SOBRE</h1>

          <p>Este jogo foi desenvolvido <span>para fins de estudo
          </span> sem nenhuma intenção de lucrar com qualquer tipo de aposta.</p>

          <p>Ele é inspirado no popular jogo de apostas conhecido como <span>"Jogo do bicho"</span>, que foi criado em  1892 pelo <span>barão João Batista Viana Drummond</span>, fundador do Jardim Zoológico do Rio de Janeiro, em Vila Isabel.</p>

          <p><span>O intuito do projeto</span> é implementar todas as mecânicas de apostas existentes no jogo, sendo possível na primeira versão do website, a escolha de uma das nações e o sorteio de uma delas diariamente.</p>

          <p>O frontend será desenvolvido utilizando <span>react.js</span>. Para estilização foi utilizado SASS e outras bilbiotecas como framer motion e react icons. Para o desenvolvimento do backend, foi utilizado <span>node.js</span>.</p>
          <p>Acesse o meu <a href='https://lucal-portfolio.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          ><span>Portfolio</span></a> para ter acesso ao repositório do projeto.</p>

        </article>
      </div>

    </section>
  )
}
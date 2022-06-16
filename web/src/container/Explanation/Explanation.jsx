import React from 'react'
import './Explanation.scss'

export default function Explanation() {
  return (
    <section className='app__explanation'>
      <div className='app__explanation-content theme-bg'>
        <article>
          <h1 className='app__underline-color'>Como jogar?</h1>

          <p>Para jogar é bem simples, basta <span>clicar na bandeira da nação</span> que deseja escolher e confirmar no final da página.</p>

          <p>O resultado é exibido todos os dias as <span>17h (horário de brasilia)</span> e fica sendo exibido na página inicial até 17:30. Após esse período as apostas para o dia seguinte são abertas.</p>

          <p>Clicando no <span>ícone à direita da Logo</span>, é possível ver os últimos resultados e suas últimas apostas.</p>

        </article>
      </div>
    </section>
  )
}
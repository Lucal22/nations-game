import React from 'react'
import './Footer.scss'

export default function Footer() {

  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className='app__footer'>
      <div className='app__footer-content'>
        <div className='app__footer-copyright'>
          <p>Copyright © {year}</p>
          <p>Feito por <a href='https://portfolio-lucal.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          ><span>Lucal</span></a> :)</p>
        </div>
      </div>

    </section>
  )
}
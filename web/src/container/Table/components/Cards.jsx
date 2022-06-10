import React from 'react'

export default function Cards(props) {
    return (
        <div className='app__table-grid-content'>
            <div className='app__table-card'>
                <div className='app__table-card-number'>
                    <p>{props.number}</p>
                </div>
                <div className='app__table-card-flag'>
                    <img src= {props.flag} />
                </div>
                <div>
                    <span>
                        <ul className='app__table-card-number'>
                        {props.numbers.map((items)=>{
                        return(
                        <li key={items}><p>{items}</p></li>
                        )
                        })}
                        </ul></span>
                </div>
            </div>
            <div><p>{props.country}</p></div>
        </div>
    )
}
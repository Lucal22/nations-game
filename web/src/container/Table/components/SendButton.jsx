import React from 'react'

export default function SendButton(props) {
  function sendSelectedCountry(event){
    event.preventDefault()
    console.log(`Nação selecionada: ${props.submitCountry}`);
  }
  return (
    <div><p>Deseja selecionar a nação: <span>{props.submitCountry}</span> ?  <button
    onClick={sendSelectedCountry}>Confirmar</button></p></div>
  )
}
import React from 'react'
import "./Botao.css"

export default function Botao ({titulo, type}) {
  return (
    <button className='botao' type={type ?? 'sumbit'}>{titulo}</button>
  )
}

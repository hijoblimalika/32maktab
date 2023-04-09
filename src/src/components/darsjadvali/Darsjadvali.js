import React from 'react'
import "./Darsjadvali.css"
import mkdars from "../../assets/mk.jpg"

function Darsjadvali() {
  return (
    <div className='darsjadvali'>
        <h1>Dars jadvali</h1>
        <div className="darsjadvali__img">

        <img src={mkdars} alt="" />
        </div>
    </div>
  )
}

export default Darsjadvali
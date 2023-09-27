import './Juegos.css'
import React from "react"


const JuegoTres = (props) => {

  return (

    <div>
      <h1 className='centrarJust titulo'>Sopa de letras ecologica</h1>
      <div className='centrarJust'>
        <iframe allowfullscreen width="600" height="500" frameborder="0" src="https://es.educaplay.com/juego/15719979-sopa_ecologica.html"/>
      </div>
      
    </div>

  )
}

export default JuegoTres
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { UsuarioContext } from "../context/UsuarioContext";

const Perfil = () => {
    const {usuario, setUsuario} = React.useContext(UsuarioContext);

    return (
        <>
        <h1 className='titulo'>Perfil</h1>
        <h1>Nombre: {usuario}</h1>
        <div className='centrarJust'>
            <button className='boton' onClick={() => setUsuario('Kasses')}>Cambiar perfil</button>
        </div>
        </>
    )
}

export default Perfil;

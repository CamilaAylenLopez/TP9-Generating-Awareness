import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { UsuarioContext } from "../context/UsuarioContext";

const PuntosVerdes = () => {
    const {usuario, setUsuario} = React.useContext(UsuarioContext);

    return (
        <>
        <h1 className='titulo'>Perfil</h1>
        <h1>Nombre: {usuario}</h1>
        <button onClick={() => setUsuario('Kasses')}>Cambiar perfil</button>
        </>
    )
}

export default PuntosVerdes;

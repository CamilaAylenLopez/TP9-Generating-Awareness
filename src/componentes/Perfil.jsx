import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext } from 'react';
import { UsuarioContext } from "../context/UsuarioContext";

const Perfil = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext);
    const {reciclable, setReciclable} = useContext(UsuarioContext);
    const {trivia, setTrivia} = useContext(UsuarioContext);

    return (
        <>
        <h1 className='titulo'>Perfil</h1>
        <h1>Nombre: {usuario}</h1>
        <h1>Puntos del juego reciclable: {reciclable}</h1>
        <h1>Puntos del juego trivia: {trivia}</h1>
        <div className='centrarJust'>
            <button className='boton' onClick={() => setUsuario('Kasses')}>Cambiar perfil</button>
        </div>
        </>
    )
}

export default Perfil;

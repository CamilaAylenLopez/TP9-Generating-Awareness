import {createContext, useState} from 'react';

export const UsuarioContext = createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = useState('camila');
    const [reciclable, setReciclable] = useState(0);
    const [trivia, setTrivia] = useState(0);

    return <UsuarioContext.Provider value={{usuario, setUsuario, reciclable, setReciclable, trivia, setTrivia}}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;



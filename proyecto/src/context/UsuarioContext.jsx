import {createContext, useState} from 'react';

export const UsuarioContext = createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = useState('camila');

    return <UsuarioContext.Provider value={{usuario, setUsuario}}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;



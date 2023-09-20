import React from 'react';

export const UsuarioContext = React.createContext(null);

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = React.useState('perro');

    return <UsuarioContext.Provider value={{usuario, setUsuario}}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;



import {useContext} from 'react';
import { UsuarioContext } from "../context/UsuarioContext";

const Usuario = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext);

    return (
        <div>
            <h2>{usuario}</h2>
            <button onClick={() => setUsuario('Kasses')}>Cambiar perfil</button>
        </div>
    )
}

export default Usuario;
/**
 * Ejemplo Hooks 
 * - useState()
 * - useContext()
 */
import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
    //Inicializmos un estado con datos del contexto del padre
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                El token es: {state.token}
            </h2>
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesión es: {state.session}
            </h2>
        </div>
    );
}

const MiComponenteConContexto = () => {
    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession(){
        setSessionData(
            {
                token: 'jwt12345567889',
                session: sessionData.session + 1
            }
        )
    }
    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que está aqui dentro puede leer sessionData y si se actualiza */}
            {/* los componentes de aqui tambien los actualiza */}
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>Actualizar</button>
        </miContexto.Provider>
    );
}



export default MiComponenteConContexto;

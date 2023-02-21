/**
 * uso de usestate, useRef, useEffect
 */
import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Crear referencia con useRef para asociar una variable con un elemento del DOM
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }
    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Cada vez que haya cambio en el estado del componente
     * se ejecuta lo del useffect
     */

    //CASO 1
    // useEffect(() => {
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando referencia a elemento del DOM");
    //     console.log(miRef);
    // });
    
    //CASO 2
    //Ejecutar solo cuando haya un cambio en el contador 1
    //Solo se puede declarar 1 useffect, o en caso contrario, solo el último se ejecutará
    useEffect(() => {
        console.log("Cambio del contador 1 / contador 2");

    }, [contador1, contador2])
    
    return (
        <div>
            <div ref={miRef}>
                <p>Contador 1: {contador1}</p>
                <button type="button" onClick={incrementar1}>aumentar contador 1</button>
            </div>
            <div>
                <p>Contador 2: {contador2}</p>
                <button type="button" onClick={incrementar2}>aumentar contador 2</button>
            </div>
            
        </div>
    );
}

export default Ejemplo2;

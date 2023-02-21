/*
 * HOOKS
 * Crear un componente tipo funcion y acceder a su estado privado a traves de un hook y poder modificarlo 
 */
import React, { useState } from "react";

const Ejemplo1 = () => {
    //Valor inicial del contador
    const valorInicial = 0;
    // Valor inicial para una persona
    const personaInicial = {
        nombre: "Martin",
        email: "martin@gmail.com"
    };
    
    /**
     * Queremos que valor incial y persona inicial sean parte del estado del componente
     * para asi poder gestionar su cambio y este se vea reflejado en la vista del componente
     * 
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        setContador(contador + 1);
    }
    /**
     * Función para actualizar estado de la persona
     */
    function actualizarPersona(){
        setPersona({
            nombre: 'pepe',
            email: 'pepe@gmail.com'
        });
    }
    return (
        <div>
            <p>Contador: {contador}</p>
            <p>nombre: {persona.nombre}</p>
            <p>email: {persona.email}</p>
            <button type="button" onClick={incrementarContador}>aumentar</button>
            <button type="button" onClick={actualizarPersona}>cambiar Pesona</button>
        </div>
    )
}

export default Ejemplo1;
/**
 * Entender el uso de Props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de children props</h1>
            <h2> nombre: {props.nombre} </h2>
            {/* Props children pintara por defecto
            aquello que se encuentre en tre las etiquetas de apertura y cierre
            de este componente desde el componente de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;

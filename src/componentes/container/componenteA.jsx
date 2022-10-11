import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ComponenteB from '../pure/componenteB';

const ComponenteA = () => {
    const contacto1 = new Contacto("Sebastian", "Berrios", "sebas@gmail.com", false);
    return (
        <div>
            <ComponenteB contacto={contacto1} />
        </div>
    );
}

export default ComponenteA;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({contacto}) => {
    const [contactoState, setContactoState] = useState(contacto);
    const handleChangeDisponibilidad = (e) => {
        e.preventDefault();
        setContactoState({...contactoState, Conectado: !contactoState.Conectado})
    }
    return (
        <div>
            <h2>Contacto:</h2>
            <h4>Nombre: {contactoState.Nombre}</h4>
            <h4>Apellido: {contactoState.Apellido}</h4>
            <h4>Email: {contactoState.Email}</h4>
            <h4>Conectado: {contactoState.Conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
            <button onClick={handleChangeDisponibilidad}>Aceptar</button>
        </div>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;

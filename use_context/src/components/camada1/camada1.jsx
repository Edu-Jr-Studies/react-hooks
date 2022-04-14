import React, { useContext } from 'react';
import { Contexto } from '../../App';

const Camada1 = () => {

    const { myText } = useContext(Contexto);

    return (
        <>
            <h2>Camada 1</h2>        
            <p>{ myText }</p>
        </>
    )
}

export default Camada1;
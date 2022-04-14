import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const elementoInput = useRef();//ao trabalharmos com esse elemento automaticamente estaremos alterando também todos os elementos que utilizam 
  //essa variavel; No caso no input de texto
  const [ dataInput, setDataInput ] = useState();
  
  const acao = () => {
    elementoInput.current.style.background = 'grey';
    elementoInput.current.style.padding = '10px'
    elementoInput.current.style.border = '1.5px solid green';
    elementoInput.current.style.borderRadius = '8px';
    elementoInput.current.style.outline = 'none';

    if(dataInput == '' || dataInput == null) {
      elementoInput.current.style.border = '1.5px solid red';
    }
    else {
      alert('Enviado!');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>

        <input type="text" ref={elementoInput} onChange={ (e) => setDataInput(e.target.value) }/>
        <input type="button" value="Click Aqui" onClick={acao}/>

      </header>
    </div>
  );
}

export default App;

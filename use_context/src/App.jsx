import React, { createContext, useContext } from 'react';
import './App.css';
import Camada1 from './components/camada1/camada1';

export const Contexto  = createContext();

function App() {
  /*criando o contexto ou seja deixando variaveis, funções e etc... de forma global 
  pelo codigo apartir desse contexto criado*/


  //meu texto global
  const myText = 'Meu texto';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Utilizando o hook: useContext</h1>

      </header>

        <Contexto.Provider value={{ myText }} >
          <Camada1 />
        </Contexto.Provider>
    </div>
  );
}

export default App;

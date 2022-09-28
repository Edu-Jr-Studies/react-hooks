import { React, useReducer, useState } from "react";
import CounterSimple from './components/counterSimple'

//valor inicial do estado
const initialState = {
  firstCount: 0,
}

//função alternativa com uma forma alternativa ao switch
function reducer(state, action){
  const types = {
    'decrement': {firstCount: state.firstCount - 1},
    'increment': {firstCount: state.firstCount + 1},
    'double': {firstCount: state.firstCount * 2},
    'half': {firstCount: state.firstCount / 2},
    'reset': {firstCount: initialState.firstCount},
    'custom': {firstCount: state.firstCount + action.payload} //pegando o valor do payload e somando com o já existente no estado
  }
  return types[action.type] || state;
}

let countReder = 0;

function App() {
  const [state, dispath] = useReducer(reducer, initialState);
  const [customCount, setCustomCount] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    dispath({type: 'custom', payload: customCount});//passando por payload os dados que desejamos passar para o estado
  }
  
  countReder++;
  return (
    <>
      <h1>Render count: {countReder}</h1>
      <br />
      <br />
      <span>{state.firstCount}</span>
      <br />
      <div>
        <button onClick={ () => dispath({type: 'decrement'}) }>Decrement</button>
        <button onClick={ () => dispath({type: 'increment'}) }>Increment</button>
        <button onClick={ () => dispath({type: 'double'}) }>x2</button>
        <button onClick={ () => dispath({type: 'half'}) }>/2</button>
        <button onClick={ () => dispath({type: 'reset'}) }>Reset</button>
      </div>
      <br />
      <br />
      <form onSubmit={ handleSubmit }>
        <label htmlFor="custom-value">Valor Personalizado: </label>
        <input 
          id="custom-value" 
          type="number" 
          value={customCount} 
          onChange={ (e) => setCustomCount(+e.target.value) }
        />
        <button type="submit">Inserir</button>
      </form>

      <h2>Simple Counter</h2>
      <CounterSimple/>
    </>
  );
}

export default App;

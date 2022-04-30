import './App.css';
import React, { useReducer } from 'react'; 

const App = () => {
  
  const accountantManager = (state, action) => {
    switch ( action ){
      case 'increment':
        return state + 1;
      case 'decrement':
          return state - 1;
      default:
        return 0;
    }
  }
  
  const [contador, execFunc] = useReducer(accountantManager, 0);
      
  return (
    <div className="App">
      <h1>Contador: {contador}</h1>

      <button onClick={ () => execFunc('increment') }>Increment</button>
      <button onClick={ () => execFunc('decrement') }>Decrement</button>
    </div>
  );
}

export default App;

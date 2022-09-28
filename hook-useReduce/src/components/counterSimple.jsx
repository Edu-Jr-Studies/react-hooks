import { React, useReducer } from "react";

const initialState = {
    firstCount: 0,
}

//com switch
/*
function reducer(state, action){
  switch(action.type){
    case 'decrement':
      return {firstCount: state.firstCount - 1};
    case 'increment':
      return {firstCount: state.firstCount + 1};
    default:
      return state;
  }
}
*/

//função alternativa com uma forma alternativa ao switch
function reducer(state, action){
const types = {
    'decrement': {firstCount: state.firstCount - 1},
    'increment': {firstCount: state.firstCount + 1},
}
return types[action.type] || state;
}

const CounterSimple = () => {
    const [state, dispath] = useReducer(reducer, initialState);

    return (
      <>
        <button onClick={() => dispath({type: 'decrement'})}>Decrement</button>
        <span>{state.firstCount}</span>
        <button onClick={() => dispath({type: 'increment'})}>Increment</button>
      </>
    );
}

export default CounterSimple;
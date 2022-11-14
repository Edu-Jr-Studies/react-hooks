import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState(1);
  const [numero2, setNumero2] = useState(1);
  const [numero3, setNumero3] = useState(1);
  const [numero4, setNumero4] = useState(1);
  
  let potencia = useMemo(() => {
    const future = Date.now() + 1000;
    while(Date.now() < future) {}
    return numero1 ** numero2;
  }, [numero1, numero2]);

  let soma = numero3 + numero4;

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>A potenciação contém um delay de 1s.</p>
      <p>{`${numero1}^${numero2}:${potencia}`}</p>
      <div className="btns">
        <input 
          type="number" 
          id=""
          value={numero1}
          onChange={(e) => setNumero1(Number(e.target.value))}
        />
        <input 
          type="number" 
          id=""
          value={numero2}
          onChange={(e) => setNumero2(Number(e.target.value))}
        />
      </div>

      <p>{`${numero3}+${numero4}:${soma}`}</p>
      <div className="btns">
        <input 
          type="number" 
          id=""
          value={numero3}
          onChange={(e) => setNumero3(Number(e.target.value))}
        />
        <input 
          type="number" 
          id=""
          value={numero4}
          onChange={(e) => setNumero4(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;

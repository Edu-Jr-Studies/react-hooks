import { useState, useCallback } from 'react';
import ListProduct from './ListProduct'

function App() {
  const [product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setProductList([...productList, product]);
    setProduct('');
  }

  /*Caso essa função estivesse sem o useCallback ela ficaria sendo criada do zero a cada rendenização nova do componente */
  const listModifier = useCallback((list) => {
    const spacedList = list.map((item) => item.split('').join(' '));

    return spacedList;
  },[]);

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input  value={product} onChange={(e) => setProduct(e.target.value)} type="text" />
      </form>
      <ListProduct list={productList} listModifier={listModifier}/>
    </>
  )
}

export default App
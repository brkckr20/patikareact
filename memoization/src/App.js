import './App.css';
import { useState, useMemo, useCallback } from 'react'
import Header from './components/Header';

/* const data = { name: "Burak" }  -> gereksiz render için component dışında tanımlama yapabiliyorsak en basit yöntemdir.*/

function App() {
  const [number, setNumber] = useState(0);

  // const data = { name: "Burak" }

  const data = useMemo(() => { //gereksiz renderı önlemek için useMemo kullanımı
    return { name: "Burak", number };
  }, [number]) // --> number değişkeninin değeri değişirse o zaman render edilecek



  /* useCallback */
  /* const increment = () => setNumber(number + 1) */
  const increment = useCallback(() => {
    /* setNumber(number + 1) */
    setNumber((prevState)=>prevState+1)
  }, [/* number */])


  return (
    <div className="App">
      <Header /* number={number} */ /* data={data} */ increment={increment} />
      <hr />
      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Click</button> */}
    </div>
  );
}

export default App;

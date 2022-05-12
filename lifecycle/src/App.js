
import { useState } from 'react'
import './App.css';
import Counter from './components/Counter';

function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;

/*
    notlar
    - useEffect kullanılırken hiç bir zaman if bloğunun içinde olmamalıdır.
    - componentin tepesinde bulunmalıdır ve herhangi bir kontrole tabii olmamalıdır.


*/
import { useState } from 'react' //useState in dahil edilmesi
import './App.css';
import Counter from './components/Counter';
const App = () => {
  /* statein varsayılan değeri ne ise set etme işlemi yapılırken ona göre değer verilir. */


  const [name, setName] = useState("Burak"); //state'in tanımlanması işlemi
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Burak", "Mehmet"]); //array states
  const [address, setAddress] = useState({ title: "Denizli", zip: 20020 }); //object states


  return (
    <div className='App'>
      <h1>Merhaba {name}</h1>
      <h2>Yaş {age}</h2>
      <button onClick={() => setName("Murat")}>Name Change</button>
      <button onClick={() => setAge(25)}>Age Change</button> {/* yaş değişkeninin manipüle edilmesi */}

      <hr />
      <h3>Friends</h3>
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }
      <br />
      <button onClick={() => setFriends([...friends, "Hikmet"])}>Add New Friend</button> {/* ...friends kullanılarak önceki değerler korunmuş olur */}

      <hr />
      <h2>Adres</h2>
      <div>{address.title} - {address.zip}</div>
      <button onClick={() => setAddress({ ...address, title: "Konya" })}>Adress </button>
      <hr />

      <Counter />
    </div>
  )
}

export default App
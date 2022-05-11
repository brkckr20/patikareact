import './App.css';
import Header from './components/Header'; //export edilen komponentin import edilmesi
import User from './components/User';

const name = "Burak";
const surname = "Çakır";
const isLoggedIn = false;


/* const name = "Burak";
const surname = "Çakır";
const isLoggedIn = false; */

const friends = [
  {
    id: 1,
    name: "ahmet"
  },
  {
    id: 2,
    name: "musa"
  },
  {
    id: 3,
    name: "burak"
  }
]

function App() {
  return (
    <div>
      <Header /> {/* komponentin kullanılması */}

      <p>
        lorem ipsum dolor sit amet
      </p>
      {/* <h3>{name} {surname}</h3> */} {/* değişken render edilmesi */}
      <h3>{isLoggedIn ? `benim adım ${name}, soyadım ${surname}` : ''}</h3> {/* değişken render edilmesi */}
      <h3>{!isLoggedIn && 'Lütfen giriş yapınız..'}</h3> {/* koşullu render işlemleri */}

      <User name={"Burak"} surname="Çakır" isLoggedIn={false} age={29} friends={friends} address={{ title: "Ataşehir", zip: 20220 }} /> {/* props kullanımı ve gönderilmesi işlemi */}




      {/* <h3>{name} {surname}</h3> */} {/* değişken render edilmesi */}
      {/* <h3>{isLoggedIn ? `benim adım ${name}, soyadım ${surname}` : ''}</h3>  */}{/* değişken render edilmesi */}
      {/* <h3>{!isLoggedIn && 'Lütfen giriş yapınız..'}</h3> */} {/* koşullu render işlemleri */}

    </div>
  )
}

export default App

/*
  jsx kuralları
    - bir komponent oluşturulurken fonksiyon ismi büyük harf ile başlamasına dikkat edilmelidir.
    - komponent render edilirken tek bir parent element render edilmelidir. <></> yada <React.Fragment></React.Fragment> kullanılabilir.
    - bazı özel tanımlı keywordlar jsx yazarken kullanılmamalıdır. Örn javascriptteki class ile html propertysi olan class ın karışmaması için
      className kullanılmalıdır.


*/
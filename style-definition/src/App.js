import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <A />
      <B />

    </div>
  );
}

export default App;

/*
  notlar : 
    - inline css verilirken propertyler bir obje olarak verilir ve isimlendirilmelerde css de bulunan - işareti kullanılamaz ve
      tanımlamalar camelCase olarak yapılır. backgroundColor gibi

  module.css kavramı
  module css kullanıdğımızda her css classına unique bir id ataması otomatik olarak yapılır.
*/
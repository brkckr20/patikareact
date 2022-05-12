import { useState } from 'react' //state kullanımı için useState'in dahil edilmesi

const Counter = () => {
    const [count, setCount] = useState(0);

    const arttir = () => { //butona tıklandığında artırma işlemini yapan fonksiyon
        setCount(count + 1)
    }

    const azalt = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={azalt}>Azalt</button>
            <button onClick={arttir}>Arttır</button> {/* fonksiyonun çağrılması işlemi */}
        </div>
    )
}

export default Counter
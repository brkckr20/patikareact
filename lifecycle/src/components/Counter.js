import { useState, useEffect } from 'react'

const Counter = () => {


    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Burak");


    //componentDidMount ve componentUnMount işlemi
    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        const interval = setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000);


        //componentUnMount işlemi ->
        //useEffectin en altında anonim bir function return edilir ve bu return işlemi componentUnMount işlemidir.
        return () => {
            clearInterval(interval);
            console.log("COMPONENT UNMOUNT EDILDI")
        }
    }, [])
    // componentDidMount olması için callback functiondan sonra dependency array açılıp kapatılmalıdır.


    //componentDidUpdate
    useEffect(() => {
        console.log("numer state güncellendi...")
    }, [number]);
    // örneğimizde number state'inde değişiklik yapılması durumunda ilgili componentin güncellenmesini istedik. array birden fazla state elemanı alabilir.


    return (
        <div>
            <h3>{number}</h3>
            <button onClick={() => setNumber(number + 1)}>Degistir</button>
            <hr />
            {/* <h3>{name}</h3>
            <button onClick={() => setName("Kemal")}>Degistir</button> */}
        </div>
    )
}

export default Counter
import React from 'react'

const Header = ({ number/* , data  */ , increment}) => {
    console.log("Header component re-rendered!")
    return (
        <div>
            <p>
                Header  {number}
            </p>
            <br />
            <br />
            <button onClick={increment}>Click</button>
            <code>
                {/* {JSON.stringify(data)} */}
            </code>
        </div>
    )
}

export default React.memo(Header)

/*
    header componenti app.js de header kısmında bulunuyor.
    app.js de ise butona tıklanarak sayı artırımı işlemi yapılıyor fakat header da app.js içinde
    kullanıldığı için tekrardan render ediliyor.
    React.memo kullanarak gereksiz render'ın önüne geçilmiş oluyor.

    normal şartlarda değişmesini istemediğimiz componentte göndermiş olduğumuz proplar ne zaman değişirse o zaman render edilir.

    boş bir objenin boş bir objeye denkliği veya boş bir arrayın boş bir arraya denkliği false değeri döndürür. (referansları farklı olduğu için)

*/
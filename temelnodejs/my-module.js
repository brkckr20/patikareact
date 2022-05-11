function topla(a,b){ //modül oluşturma işlemi
    return a + b
}
export default topla //modülün diğer bileşenlerde kullanılması için export edilmesi işlemi

export const cikar = (a,b) =>{ // sabit olarak dışarı aktarma. çağrılırken { } içinde import edilmelidir.
    return a - b;
}

const hello = () =>{
    console.log("hello modülü");
}

export {
    hello
    // -> tek seferde toplu export etmek
}
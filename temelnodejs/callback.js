setTimeout(() => {
    console.log("2 saniye sonra yazdırıldı"); // modül çalıştırıldıktan 2 saniye sonra ekrana log yazdıracak
}, 2000);


setInterval(() => {
    console.log("Her saniye çalışacağım"); // modül çalıştırıldıktan itibaren parametre olarak verilen değer aralıklarınca durdurulana kadar sürekli çalışacak
}, 1000);


const sayHi = (cb) => {
    cb();
}

sayHi(() => {
    console.log("Hello");
});

import fetch from 'node-fetch'; //native fetch fonksiyonu clientte çalıştığı için node-fetch indirildi

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((data) => data.json())            // -> gelen data nın json formatına döndürülmesi işlemi
    .then((users) => {
        console.log("Users - ", users)
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(data => data.json())
            .then(post => console.log("Posts - ", post))
    }
    );


// daha basit ve kısa yazımı ve async await kullanımı
async function getData() {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json(); //userlerin çekilmesi ve json formatına dönüştürülmesi
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json(); //post1 çekilmesi ve json formatına dönüştürülmesi
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json(); //post2 çekilmesi ve json formatına dönüştürülmesi

    console.log("Users ", users);
    console.log("Post 1 ", post1);
    console.log("Post 2 ", post2);
}

getData();
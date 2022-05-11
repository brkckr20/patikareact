import axios from "axios"; //fetch işlemleri için eklendi

async function test() {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users"); //aynı anda birden fazla kez {data} sabiti tanımlanamayacağı için takma isim verildi
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("Users -> ", users);
    console.log("Post 1 -> ", post1);
    console.log("Post 2 -> ", post2);
}
test();

const getComments = (number) => {
    // işlem başarılı olursa resolve'a düşer, başarısız olursa da reject'e düşer
    return new Promise((resolve, reject) => {
        // resolve({test : "selam"}); //içindeki değerler .then() 'de yakalanır.
        if (number === 1) {
            resolve({ success: "İşlem Başarılı" });
        }
        reject({ fail: "İşlem Başarısız!!!" });

    })
}
getComments(2)
    .then((data) => console.log(data)) // --> resolve kısmını çalıştırır.
    .catch(err => console.log(err))    // --> reject kısmını çalıştırır.

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(users)
    })
}

// getUsers()
//     .then((data) => console.log(data)) // --> resolve kısmını çalıştırır.
//     .catch(err => console.log(err))    // --> reject kısmını çalıştırır.

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(users)
    })
}

// getPost(2)
//     .then((data) => console.log(data)) // --> resolve kısmını çalıştırır.
//     .catch(err => console.log(err))    // --> reject kısmını çalıştırır.



// İŞLEMLERİ SIRASI İLE YAPMASI İÇİN ANONİM FONKIYON OLARAK EKLENDI VE FONKSIYON ÇAĞRIMI YAPILDI.
(async () => {
    /* await getUsers()
        .then((data) => console.log(data))
        .catch(err => console.log(err));

    await getPost(2)
        .then((data) => console.log(data))
        .catch(err => console.log(err)); */

    //THEN CATCH YAPISINDAN KURTULMAK İÇİN
    //hataları yakalamak için için try catch eklendi.
    try {
        const users = await getUsers();
        const posts = await getPost(2);

        console.log(users);
        console.log(posts);
    } catch (error) {
        console.log(error);
    }


})()
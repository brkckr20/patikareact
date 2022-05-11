// const users = ["Mehmet", "Burak", "Ahmet", "Kemal"];
const users = [
    {
        name: "Burak",
        age: 29
    },
    {
        name: "Aynur",
        age: 28
    },
    {
        name: "Fatma",
        age: 27
    },
    {
        name: "Burak",
        age: 15
    },
];

/*
 push
 map
 find
 filter
 some
 every
 includes
 */


//push
users.push("Ayşe"); // ARRAYIN SONUNA PARAMETRE OLARAK VERİLEN DEĞERİ EKLER
users.push("Murat");

console.log(users);


//map
users.map((item) => { // array içerisindeki verileri tek tek gezerek üzerinde işlem yapmamızı sağlar.
    console.log(item.name);
})


//find -> array içerisinde vermiş olduğumuz koşullarla bir arama işlemi yapar. eşleşen ilk elemanı bulduğunuda elemnı döner
const result = users.find((item) => item.name === "Burak");
console.log(result);


//filter -> filtreleme işlemi yapmamızı sağlar.
const filtered = users.filter(item => item.name === "Burak" && item.age < 20);
console.log(filtered);


//some -> arrayin içerisindeki elemanlardan birisi verdiğimiz koşula uyuyorsa true döner, uymuyorsa false dönder
const some = users.some((item) => item.age === 15) //true
console.log(some);


//every -> arrayin bütün elemanlarının verilen şarta uymasını bekler. uyuyorsa true, uymuyorsa flase döner
const every = users.every(item => item.age < 5);
console.log(every);



//includes -> verilen parametrenin array içerisinde olup olmadığını kontrol eder. eğer içerisinde varsa true yoksa false döner. büyük küçük harfe duyarlıdır
const meyveler = ["elma","armut","portakal"];
const included = meyveler.includes("portakal");
console.log(included);


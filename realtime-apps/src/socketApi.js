import io from 'socket.io-client';

let socket;


//bağlantı için api olusturulması
export const init = () => {
    console.log("Sunucuya bağlanılıyor.")
    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    })
    socket.on("connect", () => {
        console.log("Socket sunucusuna basarili bir sekilde baglanildi.")
    })

}

//backende veri gönderimi işlemi
export const send = (color) => {
    //emit - backenddeysek cliente, clientte isek backende veri göndermemizi sağlar..
    //birinci parametre hangi kanala veri göndereceğimiz, ikinci parametre ise verimiz.
    socket.emit("newColor", color)
}



//bir kanala abone olmak
export const subscribe = (cb) => {
    //receive kanalını dinle
    socket.on("receive", (color) => {
        console.log(color)
        cb(color);
    })
}
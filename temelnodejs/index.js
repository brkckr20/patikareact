// const slugify = require('slugify'); ES6 öncesi import işlemi

import slugify from "slugify"; // es6 modül sistemi
import topla, { cikar, hello } from "./my-module.js"; //.js uzantısı eklenmediğinde hata alındı

const title = slugify("React js çalışmaları.", "-");
console.log(title);


console.log(topla(5, 63));
console.log(cikar(5, 63));
console.log(hello());


//console.log("Hello world!!!");
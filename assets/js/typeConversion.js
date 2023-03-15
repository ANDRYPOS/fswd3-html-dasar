alert("Selamat Datang di typeConvertions");

//convertion string
console.log("ini adalah convertion string");
value = 5; //number
value = String(value); //convertion string
console.log(typeof value); //string

//convertion numerik
console.log("\nini adalah convertion numerik");
a = "5"; //string
console.log(typeof a); //string
b = Number(a);
console.log(typeof b);

//convertion boolean
console.log("\nini adalah convertion boolean");
let aTrue = "notNull";
let bFalse = "";
console.log(Boolean(aTrue)); //true
console.log(Boolean(bFalse)); //false

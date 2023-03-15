alert("Selamat Datang di Data Types");
//data type number
console.log("ini adalah type data Number");
let inf = 100 / 0;
console.log(inf); //infinity
//atau
console.log(Infinity); //infinity
console.log(typeof inf);

console.log("Arkatama" + 1);
console.log("Multi Solusindo" + 2 * 5);
console.log(NaN * 3);

//data type string
console.log("\nini adalah type data string");
let nama = "Andri Elistiawan";
console.log(nama);
console.log(typeof nama);

//data type boolean
console.log("\nini adalah type data boolean");
let isLoggedIn = true;
let isAdmin = false;
let isGreater = 10 > 5;
let isLess = 10 < 5;
console.log(
  `hasil type data boolean ${isLoggedIn}, ${isAdmin}, ${isGreater}, ${isLess}`
);
console.log(typeof isLoggedIn);

//data type null
let desc =
  "Null merupakan sebuah nilai khusus yang bukan milik tipe data apapun. Null mempresentasikan nilai yang tidak ada isinya, kosong, atau nilai tidak diketahui";
console.log("\nini adalah type data null");
console.log(desc);
let contohNull = null;
console.log(contohNull);
console.log(typeof contohNull);

//data type undefined
console.log("\nini adalah type data undefined");
let descUndefined =
  "Merupakan nilai khusus yang mempresentasikan bahwa sebuah variable belum memiliki nilai yang di-assign terhadapnya. Artinya sebuah variabel sudah di deklasrisakn sebelumnya namun belum memilki sebuah nilai yang kemudian kita akses atau lakukan operasi";
console.log(descUndefined);
let undef;
console.log(undef);
console.log(typeof undef);

//data type symbol
console.log("\nini adalah type data symbol");
let descSymbol =
  "Tipe data symbol digunakan untuk sesuatu yang bernilai unik dan tidak dapat diubah (immutable). ";
console.log(descSymbol);
let employe = Symbol("andri");
console.log(employe);
console.log(employe.description);
console.log(typeof employe);

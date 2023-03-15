alert("Selamat Datang di Variable");
alert("Contoh penggunaan variables silahkan buka console");
console.log(
  "penggunaan variable var \nvar bersifat  global, yaitu dapat diakses dari dalam maupun luar lingkup: \nsedangkan let dan const harus didalam ruang lingkup, yang membedakan const dan let adalah \nconst tidak dapat dirubah nilainya"
);
var pesanVar = "ini menggunakan var";
function variable() {
  let pesanLet = "ini menggunakan let";
  const pesanConst = "ini menggunakan const";
  console.log(`ini diconsole didalam function, ${pesanLet} \n${pesanConst}`);
}
console.log(`ini diconsole diluar function, ${pesanVar}`);
variable();

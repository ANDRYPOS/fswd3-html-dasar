var pesan = alert("Selamat Datang Game Suit");
var pesan1 = prompt("Masukkan Nama :");

if (pesan1 === "") {
  alert("Nama Tidak Boleh Kosong !");
  window.location.reload();
} else if (pesan1) {
  alert(`Selamat Datang ${pesan1}`);
}
var pesan2 = prompt("Silahkan input perulangan");

alert("Dimulai Yak? ");
function game() {
  var suit;
  var nilaiUser = 0;
  var hasil;

  //   game start
  for (suit = 0; suit < pesan2; suit++) {
    // result bot start
    var result = Math.floor(Math.random() * 3 + 1);
    switch (result) {
      case 1:
        var jawabBot = "kertas";
        break;
      case 2:
        var jawabBot = "gunting";
        break;
      case 3:
        var jawabBot = "batu";
        break;
    }
    // result bot end

    // result user start
    var pemain = prompt(
      "permainan gunting batu kertas.\n Silahkan pilih : Gunting, Batu, Kertas"
    );

    //pilihan batu
    if (pemain === "batu") {
      if (jawabBot === "kertas") {
        hasil = "Anda Kalah";
        nilaiUser = -1;
      } else if (jawabBot === "gunting") {
        hasil = "Anda Menang";
        nilaiUser = 1;
      } else {
        hasil = "Anda Seri";
        nilaiUser = 0;
      }
    }
    // pilihan kertas
    else if (pemain === "kertas") {
      if (jawabBot === "gunting") {
        hasil = "Anda Kalah";
        nilaiUser = -1;
      } else if (jawabBot === "batu") {
        hasil = "Anda Menang";
        nilaiUser = 1;
      } else {
        hasil = "Anda Seri";
        nilaiUser = 0;
      }
    }
    // pilihan gunting
    else if (pemain === "gunting") {
      if (jawabBot === "kertas") {
        hasil = "Anda Menang";
        nilaiUser = 1;
      } else if (jawabBot === "batu") {
        hasil = "Anda Kalah";
        nilaiUser = -1;
      } else {
        hasil = "Anda Seri";
        nilaiUser = 0;
      }
    }
    //Result user end
    console.log(
      `Welcome ${pesan1} \n${hasil} \njawaban anda : ${pemain} \nJawaban Komputer : ${jawabBot} \nNilai Saat Ini : ${nilaiUser}\n=========================`
    );
  }
}
// panggil fumction
game();

// Class Penjumlahan dengan method generik
class Penjumlahan {
    // Method JumlahTigaAngka dengan 3 parameter generik T
    JumlahTigaAngka(a, b, c) {
      // Menggunakan tipe dinamis (di JS semua number = number)
      const hasil = a + b + c;
      console.log(Hasil penjumlahan: ${hasil});
    }
  }
  
  // Fungsi utama
  function main() {
    // Memanggil HaloGeneric
    const halo = new HaloGeneric();
    halo.SapaUser("Bambang");
  
    // Menampilkan NIM menggunakan DataGeneric
    const nim = "12345678";
    const data = new DataGeneric(nim);
    data.PrintData();
  
    // Mengambil 2 digit angka dari NIM
    const angka1 = 12; // contoh: dari NIM 12 34 56
    const angka2 = 34;
    const angka3 = 56;
  
    // Mengecek akhiran NIM untuk menentukan "tipe data"
    const akhirNIM = parseInt(nim[nim.length - 1]);
  
    let input1, input2, input3;
    let tipe = "";
  
    if ([1, 2].includes(akhirNIM)) {
      // float (dalam JS tetap number)
      input1 = parseFloat(angka1);
      input2 = parseFloat(angka2);
      input3 = parseFloat(angka3);
      tipe = "float";
    } else if ([3, 4, 5].includes(akhirNIM)) {
      // double
      input1 = Number(angka1);
      input2 = Number(angka2);
      input3 = Number(angka3);
      tipe = "double";
    } else if ([6, 7, 8].includes(akhirNIM)) {
      // int
      input1 = parseInt(angka1);
      input2 = parseInt(angka2);
      input3 = parseInt(angka3);
      tipe = "int";
    } else {
      // long
      input1 = Number(angka1);
      input2 = Number(angka2);
      input3 = Number(angka3);
      tipe = "long";
    }
  
    console.log(Tipe data input berdasarkan akhiran NIM (${akhirNIM}): ${tipe});
  
    const penjumlahan = new Penjumlahan();
    penjumlahan.JumlahTigaAngka(input1, input2, input3);
  }
  
  main();

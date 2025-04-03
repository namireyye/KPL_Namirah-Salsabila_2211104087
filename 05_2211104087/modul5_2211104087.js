// Class Penjumlahan (dari instruksi sebelumnya)
class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
      const hasil = a + b + c;
      console.log(Hasil penjumlahan: ${hasil});
    }
  }
  
  // Class HaloGeneric (dari awal)
  class HaloGeneric {
    SapaUser(user) {
      console.log(Halo user ${user});
    }
  }
  
  // Class DataGeneric (dari instruksi sebelumnya)
  class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    PrintData() {
      console.log(Data yang tersimpan adalah: ${this.data});
    }
  }
  
  // Class SimpleDataBase<T>
  class SimpleDataBase {
    constructor() {
      this.storedData = [];     // list data generic T
      this.inputDates = [];     // list tanggal saat data ditambahkan
    }
  
    // Method AddNewData
    AddNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date()); // waktu sekarang
    }
  
    // Method PrintAllData
    PrintAllData() {
      for (let i = 0; i < this.storedData.length; i++) {
        console.log(Data ${i + 1} berisi: ${this.storedData[i]}, yang disimpan pada waktu UTC: ${this.inputDates[i].toUTCString()});
      }
    }
  }
  
  // Fungsi utama
  function main() {
    const halo = new HaloGeneric();
    halo.SapaUser(“Namirah”);
  
    const nim = "12345678";
    const dataNIM = new DataGeneric(nim);
    dataNIM.PrintData();
  
    const angka1 = 12;
    const angka2 = 34;
    const angka3 = 56;
  
    const akhirNIM = parseInt(nim[nim.length - 1]);
  
    let input1, input2, input3;
    let tipe = "";
  
    if ([1, 2].includes(akhirNIM)) {
      input1 = parseFloat(angka1);
      input2 = parseFloat(angka2);
      input3 = parseFloat(angka3);
      tipe = "float";
    } else if ([3, 4, 5].includes(akhirNIM)) {
      input1 = Number(angka1);
      input2 = Number(angka2);
      input3 = Number(angka3);
      tipe = "double";
    } else if ([6, 7, 8].includes(akhirNIM)) {
      input1 = parseInt(angka1);
      input2 = parseInt(angka2);
      input3 = parseInt(angka3);
      tipe = "int";
    } else {
      input1 = Number(angka1);
      input2 = Number(angka2);
      input3 = Number(angka3);
      tipe = "long";
    }
  
    console.log(Tipe data input berdasarkan akhiran NIM (${akhirNIM}): ${tipe});
  
    const penjumlahan = new Penjumlahan();
    penjumlahan.JumlahTigaAngka(input1, input2, input3);
  
    // Tambahkan ke SimpleDataBase
    const database = new SimpleDataBase();
    database.AddNewData(input1);
    database.AddNewData(input2);
    database.AddNewData(input3);
  
    // Cetak semua data
    database.PrintAllData();
  }
  
  // Menjalankan fungsi utama
  main();
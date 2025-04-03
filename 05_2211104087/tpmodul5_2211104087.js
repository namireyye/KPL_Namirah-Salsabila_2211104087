// A. Membuat class dengan nama "HaloGeneric"
class HaloGeneric {
    // B. Method SapaUser dengan parameter generic
 generic-class
    SapaUser(user) {
      console.log(Halo user ${user});
    }
  }
  
  // Tambahan sesuai instruksi gambar:
  // Membuat class DataGeneric dengan generic tipe T
  class DataGeneric {
    constructor(data) {
      this.data = data; // menyimpan data bertipe generik T
    }
  
    // Method PrintData untuk menampilkan nilai data
    PrintData() {
      console.log(Data yang tersimpan adalah: ${this.data});
    }
  }
  
  // Fungsi utama
  function main() {
    const halo = new HaloGeneric();
    halo.SapaUser("Namirah");
  
    // C. Mengisi data dengan NIM dan memanggil PrintData
    const nim = “2211104087”;
    const data = new DataGeneric(nim);
    data.PrintData();
  }
  
  // Menjalankan fungsi utama
  main();
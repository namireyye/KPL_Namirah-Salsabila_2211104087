// A. Membuat class dengan nama "HaloGeneric"
class HaloGeneric {
    // B. Method SapaUser dengan parameter generic
    SapaUser(user) {
      console.log(Halo user ${user});
    }
  }
  
  // C. Fungsi utama untuk memanggil method tersebut
  function main() {
    const halo = new HaloGeneric();
    halo.SapaUser(“Namirah”);
  }
  
  // Menjalankan fungsi utama
  main();
class SayaTubeVideo {
    constructor(title) {
      try {
        // Prekondisi: judul tidak boleh null dan max 100 karakter
        if (typeof title !== 'string' || title.length === 0 || title.length > 100) {
          throw new Error("Judul tidak valid! Harus berupa string dengan maksimal 100 karakter.");
        }
  
        this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit
        this.title = title;
        this.playCount = 0;
      } catch (err) {
        console.error(Error saat membuat video: ${err.message});
      }
    }
  
    IncreasePlayCount(count) {
      try {
        // Prekondisi: jumlah count harus valid dan <= 10 juta
        if (typeof count !== 'number' || count <= 0 || count > 10000000) {
          throw new Error("Input play count tidak valid! Maksimal 10.000.000.");
        }
  
        // Cek agar tidak overflow Number.MAX_SAFE_INTEGER
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
          throw new Error("Penambahan play count menyebabkan overflow.");
        }
  
        this.playCount += count;
      } catch (err) {
        console.error(Error saat menambah play count: ${err.message});
      }
    }
  
    PrintVideoDetails() {
      console.log("== Video Details ==");
      console.log(ID Video     : ${this.id});
      console.log(Judul Video  : ${this.title});
      console.log(Play Count   : ${this.playCount});
      console.log("===================");
    }
  }
  
  // Fungsi utama
  function main() {
    const namaPraktikan = “Namirah”;
  
    console.log("=== TEST CASE: Judul Valid, PlayCount Valid ===");
    const video1 = new SayaTubeVideo(Tutorial Design By Contract – ${namaPraktikan});
    video1.IncreasePlayCount(1000000);
    video1.PrintVideoDetails();
  
    console.log("\n=== TEST CASE: Judul Kosong (invalid) ===");
    const video2 = new SayaTubeVideo("");
  
    console.log("\n=== TEST CASE: Judul Terlalu Panjang (invalid) ===");
    const video3 = new SayaTubeVideo("A".repeat(101));
  
    console.log("\n=== TEST CASE: PlayCount Overflow ===");
    const video4 = new SayaTubeVideo("Test Overflow");
    for (let i = 0; i < 3; i++) {
      video4.IncreasePlayCount(Number.MAX_SAFE_INTEGER); // Pasti gagal
    }
    video4.PrintVideoDetails();
  }
  
  main();
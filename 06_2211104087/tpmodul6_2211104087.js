class SayaTubeVideo {
    constructor(title) {
      this.id = Math.floor(10000 + Math.random() * 90000); // random 5 digit
      this.title = title;
      this.playCount = 0;
    }
  
    IncreasePlayCount(count) {
      if (typeof count === 'number' && count > 0) {
        this.playCount += count;
      } else {
        console.log("Invalid count. Harus berupa angka positif.");
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
    const video = new SayaTubeVideo(Tutorial Design By Contract – ${namaPraktikan});
    
    video.IncreasePlayCount(250);
    video.PrintVideoDetails();
  }
  main();
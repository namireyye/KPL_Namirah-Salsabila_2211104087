class SayaTubeVideo {
    constructor(title) {
      if (typeof title !== 'string' || title.length === 0 || title.length > 100) {
        throw new Error("Judul video tidak valid!");
      }
  
      this.id = Math.floor(10000 + Math.random() * 90000); // ID random 5 digit
      this.title = title;
      this.playCount = 0;
    }
  
    IncreasePlayCount(count) {
      if (typeof count !== 'number' || count <= 0 || count > 10000000) {
        throw new Error("Jumlah play count tidak valid (1 - 10.000.000).");
      }
  
      if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
        throw new Error("Play count akan overflow.");
      }
  
      this.playCount += count;
    }
  
    PrintVideoDetails() {
      console.log("== Video Details ==");
      console.log(ID Video     : ${this.id});
      console.log(Judul Video  : ${this.title});
      console.log(Play Count   : ${this.playCount});
      console.log("===================");
    }
  }
  
  class SayaTubeUser {
    constructor(username) {
      if (typeof username !== 'string' || username.length === 0 || username.length > 100) {
        throw new Error("Username tidak valid!");
      }
  
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.username = username;
      this.uploadedVideos = [];
    }
  
    AddVideo(video) {
      if (!(video instanceof SayaTubeVideo)) {
        throw new Error("Hanya bisa menambahkan objek SayaTubeVideo.");
      }
  
      this.uploadedVideos.push(video);
    }
  
    GetTotalVideoPlayCount() {
      let total = 0;
      for (let video of this.uploadedVideos) {
        total += video.playCount;
      }
      return total;
    }
  
    PrintAllVideoPlaycount() {
      console.log(User: ${this.username});
      this.uploadedVideos.forEach((video, index) => {
        console.log(Video ${index + 1} judul: ${video.title});
      });
    }
  }
  
  // Fungsi utama
  function main() {
    const namaPraktikan = “Namirah”;
    const user = new SayaTubeUser(namaPraktikan);
  
    // Tambahkan 10 video dengan judul "Review Film <judul_film> oleh <praktikan>"
    const daftarJudul = [
      "Interstellar",
      "Inception",
      "The Dark Knight",
      "Tenet",
      "The Prestige",
      "Dune",
      "Oppenheimer",
      "Avengers: Endgame",
      "The Matrix",
      "The Lord of the Rings"
    ];
  
    for (let judul of daftarJudul) {
      const fullTitle = Review Film ${judul} oleh ${namaPraktikan};
      const video = new SayaTubeVideo(fullTitle);
      video.IncreasePlayCount(Math.floor(Math.random() * 1000000)); // random playCount
      user.AddVideo(video);
    }
  
    // Cetak semua video
    user.PrintAllVideoPlaycount();
  
    // Total play count semua video
    console.log(\nTotal Play Count Semua Video: ${user.GetTotalVideoPlayCount()});
  }
  
  main();
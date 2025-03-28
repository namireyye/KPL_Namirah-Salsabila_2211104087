// kode_buah.js
const kodeBuah = {
    "Apel": "A00",
    "Aprikot": "B00",
    "Alpukat": "C00",
    "Pisang": "D00",
    "Paprika": "E00",
    "Kurma": "K00",
    "Durian": "L00",
    "Anggur": "M00",
    "Melon": "N00",
    "Semangka": "O00"
};

function getKodeBuah(namaBuah) {
    return kodeBuah[namaBuah] || "Kode tidak ditemukan";
}

console.log("Kode Buah untuk Apel: ", getKodeBuah("Apel"));

// posisi_karakter_game.js
class PosisiKarakterGame {
    constructor() {
        this.state = "BERDIRI";
    }

    tekanW() {
        if (this.state === "BERDIRI") {
            this.state = "TERBANG";
            console.log("Posisi Take Off");
        }
    }

    tekanS() {
        if (this.state === "TERBANG") {
            this.state = "JONGKOK";
            console.log("Posisi Landing");
        }
    }
}

const karakter = new PosisiKarakterGame();
karakter.tekanW();
karakter.tekanS();

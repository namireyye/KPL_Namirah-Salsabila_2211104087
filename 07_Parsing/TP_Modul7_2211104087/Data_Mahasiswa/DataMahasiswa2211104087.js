// Membuat kelas DataMahasiswa2211104087
class DataMahasiswa2211104087 {
    constructor(data) {
        this.data = data;
    }

    // Method untuk membaca JSON dan menampilkan hasil deserialisasi
    ReadJSON() {
        // Deserialisasi JSON menjadi objek
        const mahasiswa = JSON.parse(this.data);

        // Menampilkan hasil dalam format yang diinginkan
        console.log(`Nama ${mahasiswa.nama.depan} ${mahasiswa.nama.belakang} dengan nim ${mahasiswa.nim} dari fakultas ${mahasiswa.fakultas}`);
    }
}

// Data JSON yang sudah diubah
const jsonData = `{
    "nama": {
        "depan": "Namirah",
        "belakang": "Salsabila"
    },
    "nim": 2211104087,
    "fakultas": "informatika"
}`;

// Membuat objek dari kelas DataMahasiswa2211104087 dan memanggil method ReadJSON
const dataMahasiswa = new DataMahasiswa2211104087(jsonData);
dataMahasiswa.ReadJSON();

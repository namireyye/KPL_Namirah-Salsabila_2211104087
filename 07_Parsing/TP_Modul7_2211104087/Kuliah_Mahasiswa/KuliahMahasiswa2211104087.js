const fs = require('fs');

class KuliahMahasiswa2211104087 {
  static ReadJSON() {
    try {
      // Baca file JSON
      const data = fs.readFileSync('matkul.json', 'utf8');
      const jsonData = JSON.parse(data);

      const courses = jsonData.courses;

      // Cetak daftar mata kuliah
      console.log("Daftar mata kuliah yang diambil:");
      courses.forEach((matkul, index) => {
        console.log(`MK ${index + 1} ${matkul.code} - ${matkul.name}`);
      });

    } catch (err) {
      console.error("Gagal membaca atau parsing file JSON:", err.message);
    }
  }
}

// Jalankan method
KuliahMahasiswa2211104087.ReadJSON();

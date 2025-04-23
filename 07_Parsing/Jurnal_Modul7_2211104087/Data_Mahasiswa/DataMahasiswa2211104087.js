const fs = require('fs');

// Fungsi untuk membaca dan parsing file JSON
function ReadJSON() {
  try {
    const data = fs.readFileSync('data_mahasiswa.json', 'utf-8');
    const mhs = JSON.parse(data);

    // Menampilkan data hasil parsing
    console.log("== Data Mahasiswa ==");
    console.log(`Nama           : ${mhs.firstName} ${mhs.lastName}`);
    console.log(`Jenis Kelamin  : ${mhs.gender}`);
    console.log(`Umur           : ${mhs.age}`);
    console.log(`Alamat         : ${mhs.address.streetAddress}, ${mhs.address.city}, ${mhs.address.state}`);
    console.log("Mata Kuliah    :");
    mhs.courses.forEach(course => {
      console.log(`- ${course.code}: ${course.name}`);
    });

  } catch (err) {
    console.error("Terjadi kesalahan saat membaca file JSON:", err.message);
  }
}

// Menjalankan fungsi
ReadJSON();

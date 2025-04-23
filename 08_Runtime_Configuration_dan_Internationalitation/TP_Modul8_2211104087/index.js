const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const config = new CovidConfig();

// Optional: panggil method untuk mengubah satuan
config.UbahSatuan();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const satuan = config.get('satuan_suhu');
const batasHari = config.get('batas_hari_deman');
const pesanDiterima = config.get('pesan_diterima');
const pesanDitolak = config.get('pesan_ditolak');

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `, (suhuStr) => {
  const suhu = parseFloat(suhuStr);

  rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? ', (hariStr) => {
    const hari = parseInt(hariStr, 10);

    let suhuValid = false;
    if (satuan === 'celcius') {
      suhuValid = suhu >= 36.5 && suhu <= 37.5;
    } else if (satuan === 'fahrenheit') {
      suhuValid = suhu >= 97.7 && suhu <= 99.5;
    }

    const hariValid = hari < batasHari;

    if (suhuValid && hariValid) {
      console.log(pesanDiterima);
    } else {
      console.log(pesanDitolak);
    }

    rl.close();
  });
});

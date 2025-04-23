const fs = require('fs');
const path = './covid_config.json';

class CovidConfig {
  constructor() {
    this.defaultConfig = {
      satuan_suhu: 'celcius',
      batas_hari_deman: 14,
      pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
      pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini'
    };

    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path);
      return JSON.parse(data);
    } else {
      this.saveConfig(this.defaultConfig);
      return this.defaultConfig;
    }
  }

  saveConfig(config) {
    fs.writeFileSync(path, JSON.stringify(config, null, 2));
  }

  get(key) {
    return this.config[key];
  }

  set(key, value) {
    this.config[key] = value;
    this.saveConfig(this.config);
  }

  UbahSatuan() {
    const current = this.config.satuan_suhu;
    const baru = current === 'celcius' ? 'fahrenheit' : 'celcius';
    this.set('satuan_suhu', baru);
    console.log(`Satuan suhu diubah menjadi ${baru}`);
  }
}

module.exports = CovidConfig;

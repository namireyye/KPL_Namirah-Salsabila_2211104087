const fs = require('fs');

class BankTransferConfig {
    constructor(configFile = 'bank_transfer_config.json') {
        this.configFile = configFile;
        this.config = this.loadConfig();
    }

    loadConfig() {
        const defaultConfig = {
            lang: "en",
            transfer: {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000
            },
            methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
            confirmation: {
                en: "yes",
                id: "ya"
            }
        };

        if (!fs.existsSync(this.configFile)) {
            fs.writeFileSync(this.configFile, JSON.stringify(defaultConfig, null, 4));
            return defaultConfig;
        }

        const fileContent = fs.readFileSync(this.configFile);
        return JSON.parse(fileContent);
    }

    getConfig() {
        return this.config;
    }
}

module.exports = BankTransferConfig;

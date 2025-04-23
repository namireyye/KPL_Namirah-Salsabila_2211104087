const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const configObj = new BankTransferConfig();
const config = configObj.getConfig();
const lang = config.lang;
const transfer = config.transfer;
const confirmation = config.confirmation;
const methods = config.methods;

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

(async function main() {
    const askText = lang === 'id' ?
        'Masukkan jumlah uang yang akan di-transfer: ' :
        'Please insert the amount of money to transfer: ';
    
    const amount = parseInt(await askQuestion(askText), 10);
    const fee = amount <= transfer.threshold ? transfer.low_fee : transfer.high_fee;
    const total = amount + fee;

    if (lang === 'id') {
        console.log(`Biaya transfer = ${fee}`);
        console.log(`Total biaya = ${total}`);
    } else {
        console.log(`Transfer fee = ${fee}`);
        console.log(`Total amount = ${total}`);
    }

    console.log(lang === 'id' ? 'Pilih metode transfer:' : 'Select transfer method:');
    methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    await askQuestion('>> '); // input pilihan metode, tidak dipakai lebih lanjut

    const confirmKey = confirmation[lang];
    const confirmPrompt = lang === 'id' ?
        `Ketik "${confirmKey}" untuk mengkonfirmasi transaksi: ` :
        `Please type "${confirmKey}" to confirm the transaction: `;

    const confirmInput = await askQuestion(confirmPrompt);

    if (confirmInput.trim().toLowerCase() === confirmKey.toLowerCase()) {
        console.log(lang === 'id' ? 'Proses transfer berhasil' : 'The transfer is completed');
    } else {
        console.log(lang === 'id' ? 'Transfer dibatalkan' : 'Transfer is cancelled');
    }

    rl.close();
})();

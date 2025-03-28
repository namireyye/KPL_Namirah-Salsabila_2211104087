class LightMachine {
    constructor() {
        this.state = 'Mati'; // State awal
    }

    // Method untuk mengubah state
    changeState(action) {
        if (action === 'Nyalakan' && this.state === 'Mati') {
            this.state = 'Menyala';
            console.log('Lampu dinyalakan');
        } else if (action === 'Matikan' && this.state === 'Menyala') {
            this.state = 'Mati';
            console.log('Lampu dimatikan');
        } else {
            console.log(`Lampu sudah dalam state: ${this.state}`);
        }
    }
}

// Main function untuk mensimulasikan perubahan state
function main() {
    const lampu = new LightMachine();

    // Simulasi perubahan state
    lampu.changeState('Nyalakan'); // Lampu dinyalakan
    lampu.changeState('Nyalakan'); // Lampu sudah dalam state: Menyala
    lampu.changeState('Matikan');  // Lampu dimatikan
    lampu.changeState('Matikan');  // Lampu sudah dalam state: Mati
}

// Panggil main function
main();
__
class CountryCode {
    constructor() {
        this.countryCodeTable = {
            "Indonesia": "ID",
            "Malaysia": "MY",
            "Singapura": "SG",
            "Thailand": "TH",
            "Filipina": "PH",
            "Vietnam": "VN",
            "Brunei": "BN",
            "Myanmar": "MM",
            "Laos": "LA",
            "Kamboja": "KH"
        };
    }

    getCountryCode(country) {
        return this.countryCodeTable[country] || "Kode negara tidak ditemukan";
    }
}

// Main class
function main() {
    const countryCode = new CountryCode();

    // Contoh pemanggilan method getCountryCode
    console.log(countryCode.getCountryCode("Indonesia")); // Output: ID
    console.log(countryCode.getCountryCode("Singapura")); // Output: SG
    console.log(countryCode.getCountryCode("Jepang")); // Output: Kode negara tidak ditemukan
}

// Panggil main function
main();

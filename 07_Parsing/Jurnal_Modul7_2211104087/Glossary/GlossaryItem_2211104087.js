const fs = require('fs');

class GlossaryItem_2211104087 {
  readJSON() {
    const jsonData = fs.readFileSync('glossary.json', 'utf-8');
    const data = JSON.parse(jsonData);

    const entry = data.glossary.GlossDiv.GlossList.GlossEntry;

    // Menampilkan hasil deserialisasi bagian GlossEntry
    console.log("== Glossary Entry ==");
    console.log(`ID         : ${entry.ID}`);
    console.log(`SortAs     : ${entry.SortAs}`);
    console.log(`Term       : ${entry.GlossTerm}`);
    console.log(`Acronym    : ${entry.Acronym}`);
    console.log(`Abbrev     : ${entry.Abbrev}`);
    console.log(`Definition : ${entry.GlossDef.para}`);
    console.log(`See Also   : ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
    console.log(`See        : ${entry.GlossSee}`);
  }
}

// Contoh pemanggilan:
const glossary = new GlossaryItem_2211104087();
glossary.readJSON();

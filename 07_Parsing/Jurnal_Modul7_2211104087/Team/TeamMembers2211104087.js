const fs = require('fs');

class TeamMembers2211104087 {
  static readJSON() {
    const filePath = './members2211104087.json';

    if (!fs.existsSync(filePath)) {
      console.log('File JSON tidak ditemukan!');
      return;
    }

    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    console.log('Team member list:');
    data.members.forEach(member => {
      console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
    });
  }
}

// Jalankan method
TeamMembers2211104087.readJSON();

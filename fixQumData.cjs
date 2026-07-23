const fs = require('fs');

let content = fs.readFileSync('src/data/qum-lil-muallimi/poemData.ts', 'utf8');

// Remove newWords: [...] from CoupletSummary
content = content.replace(/newWords:\s*\[[\s\S]*?\],/g, '');

// Add missing properties to SectionSummary
content = content.replace(/titleMl: (.*?),/g, "titleMl: $1,\n      titleEn: \"\",");
content = content.replace(/mlSummary: (.*?),/g, "mlSummary: $1,\n      enSummary: \"\",");

fs.writeFileSync('src/data/qum-lil-muallimi/poemData.ts', content);
console.log('Fixed qum-lil-muallimi/poemData.ts TS issues!');

const fs = require('fs');
const path = require('path');

const poemPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'poemData.ts');
let content = fs.readFileSync(poemPath, 'utf8');

// Replace "arSharah": "..." with "arSharah": `...`
// Since the string has newlines as \n, we can just replace the surrounding quotes
content = content.replace(/"arSharah":\s*"([^"]*(?:""[^"]*)*)"/g, (match, p1) => {
  // It's safer to just replace all instances of "arSharah": "يصل الشاعر ... الخ" with JSON.stringify
  return match; 
});

import fs from 'fs';
import path from 'path';

// Read the files
const poemDataPath = path.resolve('src/data/poemData.ts');
let poemData = fs.readFileSync(poemDataPath, 'utf8');

const chunk1Path = path.resolve('artifacts/chunk_32_45.ts');
let chunk1 = fs.readFileSync(chunk1Path, 'utf8');

const chunk2Path = path.resolve('artifacts/chunk_46_60.ts');
let chunk2 = fs.readFileSync(chunk2Path, 'utf8');

// Extract the arrays from the chunks
function extractArray(content) {
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf(']');
  if (startIdx === -1 || endIdx === -1) throw new Error('Could not find array bounds');
  return content.substring(startIdx + 1, endIdx).trim();
}

const c1 = extractArray(chunk1);
const c2 = extractArray(chunk2);

// In poemData.ts, we need to replace the placeholders.
// It looks like:
//   // 32
//   {
//     ar: "في عالَمٍ صَحِبَ الحَياةَ مُقَيَّداً",
//     words: [ ... ]
//   },
// ... up to the end of // 60

// We will find the start of // 32
const start32 = poemData.indexOf('// 32');
// We will find the start of // 61
const start61 = poemData.indexOf('// 61');

if (start32 === -1 || start61 === -1) {
  console.error("Could not find line 32 or 61 markers in poemData.ts");
  process.exit(1);
}

const before32 = poemData.substring(0, start32);
const after60 = poemData.substring(start61);

const newData = before32 + c1 + ",\n  " + c2 + ",\n  " + after60;

fs.writeFileSync(poemDataPath, newData, 'utf8');
console.log("Successfully injected chunks 32-45 and 46-60 into poemData.ts");

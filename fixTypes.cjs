const fs = require('fs');

let content = fs.readFileSync('src/types.ts', 'utf8');

// The exact string in the fresh types.ts:
const target1 = `export interface GlossaryItem {
  id: number;
  wordAr: string;
  rootAr: string;
  meaningMl: string;
  meaningEn: string;
  typeAr: string; // اسم, فعل, حرف, تركيب
  exampleLineNumber?: number;
}`;

const replacement1 = `export interface GlossaryItem {
  id: number;
  wordAr: string;
  rootAr: string;
  meaningMl: string;
  meaningEn: string;
  typeAr: string; // اسم, فعل, حرف, تركيب
  exampleLineNumber?: number;
  singular?: string;
  plural?: string;
  synonyms?: { ar: string; ml: string }[];
  antonyms?: { ar: string; ml: string }[];
}`;

content = content.replace(target1, replacement1);

const target2 = `export interface Poem {
  id: string;
  titleAr: string;
  titleMl: string;
  titleEn?: string;
  poetAr: string;
  poetMl: string;
  meter?: string;
  totalLines: number;
  lines: PoemLine[];
  couplets: CoupletSummary[];
  sections?: SectionSummary[];
}`;

const replacement2 = `export interface QuatrainSummary {
  id: number;
  lineIndices: number[];
  mlMeaning: string;
  enMeaning: string;
  arSharah: string;
}

export interface Poem {
  id: string;
  titleAr: string;
  titleMl: string;
  titleEn?: string;
  poetAr: string;
  poetMl: string;
  meter?: string;
  totalLines: number;
  lines: PoemLine[];
  couplets: CoupletSummary[];
  sections?: SectionSummary[];
  quatrains?: QuatrainSummary[];
}`;

content = content.replace(target2, replacement2);

fs.writeFileSync('src/types.ts', content);
console.log('Fixed types.ts successfully!');

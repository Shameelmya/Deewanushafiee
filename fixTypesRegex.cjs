const fs = require('fs');

let content = fs.readFileSync('src/types.ts', 'utf8');

content = content.replace(
  /export interface GlossaryItem \{[\s\S]*?exampleLineNumber\?: number;\n\}/,
  `export interface GlossaryItem {
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
}`
);

content = content.replace(
  /export interface Poem \{[\s\S]*?sections\?: SectionSummary\[\];\n\}/,
  `export interface QuatrainSummary {
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
}`
);

fs.writeFileSync('src/types.ts', content);
console.log('Fixed types.ts successfully with regex!');

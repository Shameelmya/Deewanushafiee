const fs = require('fs');

let types = fs.readFileSync('src/types.ts', 'utf8');

// 1. Update GlossaryItem
const glossaryTarget = `export interface GlossaryItem {
  id: number;
  wordAr: string;
  rootAr: string;
  meaningMl: string;
  meaningEn: string;
  typeAr: string; // اسم, فعل, حرف, تركيب
  exampleLineNumber?: number;
}`;
const glossaryReplacement = `export interface GlossaryItem {
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
types = types.replace(glossaryTarget, glossaryReplacement);

// 2. Add QuatrainSummary
if (!types.includes('export interface QuatrainSummary')) {
  const quatrainInterface = `\nexport interface QuatrainSummary {
  id: number;
  lineIndices: number[];
  mlMeaning: string;
  enMeaning: string;
  arSharah: string;
}\n\nexport interface Poem`;
  types = types.replace('export interface Poem', quatrainInterface);
}

// 3. Add quatrains to Poem
if (!types.includes('quatrains?: QuatrainSummary[];')) {
  types = types.replace('  sections?: SectionSummary[];\n}', '  sections?: SectionSummary[];\n  quatrains?: QuatrainSummary[];\n}');
}

fs.writeFileSync('src/types.ts', types);
console.log('types.ts updated');

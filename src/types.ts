export interface WordData {
  ar: string;
  ml: string;
  en: string;
  irab?: string;
  root?: string;
}

export interface PoemLine {
  id: number;
  ar: string;
  words: WordData[];
  noteMl?: string;
  noteEn?: string;
}

export interface CoupletSummary {
  id: number;
  lineIndices: number[]; // e.g., [1, 2] for the first couplet
  mlMeaning: string;
  enMeaning: string;
  arSharah: string;
  newWords?: any[];
  noteMl?: string;
  noteEn?: string;
}

export interface SectionSummary {
  id: number;
  titleMl: string;
  titleEn?: string;
  titleAr: string;
  startLine: number;
  endLine: number;
  mlSummary: string;
  enSummary?: string;
  arSummary: string;
}

export interface QuestionItem {
  id: number;
  qAr: string;
  qMl?: string;
  qEn?: string;
  type: 'mcq' | 'descriptive' | 'grammar';
  options?: string[];
  optionsEn?: string[];
  correctOptionIndex?: number;
  answerAr: string;
  answerMl?: string;
  answerEn?: string;
  explanationAr?: string;
  explanationMl?: string;
  explanationEn?: string;
  category?: string;
}

export interface GlossaryItem {
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
}

export interface BalaghaItem {
  id: number;
  titleMl: string;
  titleEn?: string;
  titleAr: string;
  category: 'استعارة' | 'تشبيه' | 'طباق' | 'استفهام' | 'اقتباس' | 'أسلوب';
  exampleAr: string;
  explanationMl: string;
  explanationEn?: string;
  explanationAr: string;
  lineNumber?: number;
}

export interface QuatrainSummary {
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
}

export interface PoemBundle {
  poem: Poem;
  questions: QuestionItem[];
  glossary: GlossaryItem[];
  balagha: BalaghaItem[];
  essay: EssayData;
  poet: PoetData;
}

export interface PoetData {
  nameAr: string;
  nameMl: string;
  nameEn: string;
  badgeAr: string;
  badgeMl: string;
  badgeEn: string;
  dates: string;
  location: string;
  bioAr: string;
  bioMl: string;
  bioEn: string;
  facts: {
    titleAr: string;
    descAr: string;
    titleMl: string;
    descMl: string;
    titleEn: string;
    descEn: string;
  }[];
  worksAr: string[];
  worksMl: string[];
  worksEn: string[];
}

export interface EssayData {
  arTitle: string;
  mlTitle: string;
  enTitle: string;
  arEssay: string;
  mlEssay: string;
  enEssay: string;
}

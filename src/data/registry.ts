import { PoemBundle } from '../types';

import { poemData as shaf_poem } from './shafiee-da-al-ayyam/poemData';
import { questionsData as shaf_questions } from './shafiee-da-al-ayyam/questionsData';
import { glossaryData as shaf_glossary } from './shafiee-da-al-ayyam/glossaryData';
import { balaghaData as shaf_balagha } from './shafiee-da-al-ayyam/balaghaData';
import { essayData as shaf_essay } from './shafiee-da-al-ayyam/essayData';
import { poetData as shaf_poet } from './shafiee-da-al-ayyam/poetData';

import { poemData as sitata_poem } from './shafiee-sitata/poemData';
import { questionsData as sitata_questions } from './shafiee-sitata/questionsData';
import { glossaryData as sitata_glossary } from './shafiee-sitata/glossaryData';
import { balaghaData as sitata_balagha } from './shafiee-sitata/balaghaData';
import { essayData as sitata_essay } from './shafiee-sitata/essayData';
import { poetData as sitata_poet } from './shafiee-sitata/poetData';

export const poemsRegistry: Record<string, PoemBundle> = {
  'shafiee-da-al-ayyam': {
    poem: shaf_poem,
    questions: shaf_questions,
    glossary: shaf_glossary,
    balagha: shaf_balagha,
    essay: shaf_essay,
    poet: shaf_poet,
  },
  'shafiee-sitata': {
    poem: sitata_poem,
    questions: sitata_questions,
    glossary: sitata_glossary,
    balagha: sitata_balagha,
    essay: sitata_essay,
    poet: sitata_poet,
  }
};

export const getPoemBundle = (id: string): PoemBundle => {
  return poemsRegistry[id] || poemsRegistry['shafiee-da-al-ayyam'];
};

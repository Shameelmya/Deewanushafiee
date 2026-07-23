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

import { poemData as naeeb_poem } from './shafiee-naeeb/poemData';
import { questionsData as naeeb_questions } from './shafiee-naeeb/questionsData';
import { glossaryData as naeeb_glossary } from './shafiee-naeeb/glossaryData';
import { balaghaData as naeeb_balagha } from './shafiee-naeeb/balaghaData';
import { essayData as naeeb_essay } from './shafiee-naeeb/essayData';

import { poemData as waki_poem } from './shafiee-waki/poemData';
import { questionsData as waki_questions } from './shafiee-waki/questionsData';
import { glossaryData as waki_glossary } from './shafiee-waki/glossaryData';
import { balaghaData as waki_balagha } from './shafiee-waki/balaghaData';
import { essayData as waki_essay } from './shafiee-waki/essayData';

import { poemData as salihin_poem } from './shafiee-salihin/poemData';
import { questionsData as salihin_questions } from './shafiee-salihin/questionsData';
import { glossaryData as salihin_glossary } from './shafiee-salihin/glossaryData';
import { balaghaData as salihin_balagha } from './shafiee-salihin/balaghaData';
import { essayData as salihin_essay } from './shafiee-salihin/essayData';

import { poemData as safar_poem } from './shafiee-safar/poemData';
import { questionsData as safar_questions } from './shafiee-safar/questionsData';
import { glossaryData as safar_glossary } from './shafiee-safar/glossaryData';
import { balaghaData as safar_balagha } from './shafiee-safar/balaghaData';
import { essayData as safar_essay } from './shafiee-safar/essayData';

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
  },
  'shafiee-naeeb': {
    poem: naeeb_poem,
    questions: naeeb_questions,
    glossary: naeeb_glossary,
    balagha: naeeb_balagha,
    essay: naeeb_essay,
    poet: shaf_poet,
  },
  'shafiee-waki': {
    poem: waki_poem,
    questions: waki_questions,
    glossary: waki_glossary,
    balagha: waki_balagha,
    essay: waki_essay,
    poet: shaf_poet,
  },
  'shafiee-salihin': {
    poem: salihin_poem,
    questions: salihin_questions,
    glossary: salihin_glossary,
    balagha: salihin_balagha,
    essay: salihin_essay,
    poet: shaf_poet,
  },
  'shafiee-safar': {
    poem: safar_poem,
    questions: safar_questions,
    glossary: safar_glossary,
    balagha: safar_balagha,
    essay: safar_essay,
    poet: shaf_poet,
  }
};

export const getPoemBundle = (id: string): PoemBundle => {
  return poemsRegistry[id] || poemsRegistry['shafiee-da-al-ayyam'];
};

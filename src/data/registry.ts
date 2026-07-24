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

import { poemData as safeeh_poem } from './shafiee-safeeh/poemData';
import { questionsData as safeeh_questions } from './shafiee-safeeh/questionsData';
import { glossaryData as safeeh_glossary } from './shafiee-safeeh/glossaryData';
import { balaghaData as safeeh_balagha } from './shafiee-safeeh/balaghaData';
import { essayData as safeeh_essay } from './shafiee-safeeh/essayData';

import { poemData as lisan_poem } from './shafiee-lisan/poemData';
import { questionsData as lisan_questions } from './shafiee-lisan/questionsData';
import { glossaryData as lisan_glossary } from './shafiee-lisan/glossaryData';
import { balaghaData as lisan_balagha } from './shafiee-lisan/balaghaData';
import { essayData as lisan_essay } from './shafiee-lisan/essayData';

import { poemData as sadeeq_poem } from './shafiee-sadeeq/poemData';
import { questionsData as sadeeq_questions } from './shafiee-sadeeq/questionsData';
import { glossaryData as sadeeq_glossary } from './shafiee-sadeeq/glossaryData';
import { balaghaData as sadeeq_balagha } from './shafiee-sadeeq/balaghaData';
import { essayData as sadeeq_essay } from './shafiee-sadeeq/essayData';

import { poemData as tawakkul_poem } from './shafiee-tawakkul/poemData';
import { questionsData as tawakkul_questions } from './shafiee-tawakkul/questionsData';
import { glossaryData as tawakkul_glossary } from './shafiee-tawakkul/glossaryData';
import { balaghaData as tawakkul_balagha } from './shafiee-tawakkul/balaghaData';
import { essayData as tawakkul_essay } from './shafiee-tawakkul/essayData';

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
  },
  'shafiee-safeeh': {
    poem: safeeh_poem,
    questions: safeeh_questions,
    glossary: safeeh_glossary,
    balagha: safeeh_balagha,
    essay: safeeh_essay,
    poet: shaf_poet,
  },
  'shafiee-lisan': {
    poem: lisan_poem,
    questions: lisan_questions,
    glossary: lisan_glossary,
    balagha: lisan_balagha,
    essay: lisan_essay,
    poet: shaf_poet,
  },
  'shafiee-sadeeq': {
    poem: sadeeq_poem,
    questions: sadeeq_questions,
    glossary: sadeeq_glossary,
    balagha: sadeeq_balagha,
    essay: sadeeq_essay,
    poet: shaf_poet,
  },
  'shafiee-tawakkul': {
    poem: tawakkul_poem,
    questions: tawakkul_questions,
    glossary: tawakkul_glossary,
    balagha: tawakkul_balagha,
    essay: tawakkul_essay,
    poet: shaf_poet,
  }
};

export const getPoemBundle = (id: string): PoemBundle => {
  return poemsRegistry[id] || poemsRegistry['shafiee-da-al-ayyam'];
};

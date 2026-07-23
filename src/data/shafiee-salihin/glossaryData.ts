import { GlossaryItem } from '../../types';

export const glossaryData: GlossaryItem[] = [
  {
    id: 1,
    wordAr: "أُحِبُّ",
    rootAr: "ح ب ب",
    meaningMl: "ഞാൻ സ്നേഹിക്കുന്നു",
    meaningEn: "I love",
    typeAr: "فعل مضارع",
    exampleLineNumber: 1,
    synonyms: [
      { ar: "أَهْوَى", ml: "ഞാൻ ഇഷ്ടപ്പെടുന്നു" },
      { ar: "أَوَدُّ", ml: "ഞാൻ ആഗ്രഹിക്കുന്നു" }
    ],
    antonyms: [
      { ar: "أَكْرَهُ", ml: "ഞാൻ വെറുക്കുന്നു" },
      { ar: "أُبْغِضُ", ml: "ഞാൻ ദേഷ്യപ്പെടുന്നു" }
    ]
  },
  {
    id: 2,
    wordAr: "الصَّالِحِين",
    rootAr: "ص ل ح",
    meaningMl: "സജ്ജനങ്ങളെ / നല്ലവരെ",
    meaningEn: "The righteous",
    typeAr: "اسم",
    exampleLineNumber: 1,
    singular: "الصَّالِحُ",
    plural: "الصَّالِحُونَ",
    synonyms: [
      { ar: "الأَتْقِيَاء", ml: "ഭയഭക്തിയുള്ളവർ" },
      { ar: "المُؤْمِنِين", ml: "വിശ്വാസികൾ" }
    ],
    antonyms: [
      { ar: "الطَّالِحِين", ml: "ദുർജ്ജനങ്ങളെ" },
      { ar: "الفَاسِدِين", ml: "ദുഷിച്ചവരെ" }
    ]
  },
  {
    id: 3,
    wordAr: "أَنَالَ",
    rootAr: "ن ي ل",
    meaningMl: "എനിക്ക് നേടാൻ",
    meaningEn: "I attain / I get",
    typeAr: "فعل مضارع",
    exampleLineNumber: 2,
    synonyms: [
      { ar: "أَحْصُلَ", ml: "ലഭിക്കാൻ" },
      { ar: "أُدْرِكَ", ml: "കണ്ടെത്താൻ" }
    ],
    antonyms: [
      { ar: "أَفْقِدَ", ml: "നഷ്ടപ്പെടാൻ" },
      { ar: "أُضَيِّعَ", ml: "പാഴാക്കാൻ" }
    ]
  },
  {
    id: 4,
    wordAr: "شَفَاعَة",
    rootAr: "ش ف ع",
    meaningMl: "ശുപാർശ",
    meaningEn: "Intercession",
    typeAr: "اسم",
    exampleLineNumber: 2,
    singular: "شَفَاعَةٌ",
    synonyms: [
      { ar: "وَسَاطَة", ml: "ഇടപെടൽ" },
      { ar: "عَوْن", ml: "സഹായം" }
    ]
  },
  {
    id: 5,
    wordAr: "أَكْرَهُ",
    rootAr: "ك ر ه",
    meaningMl: "ഞാൻ വെറുക്കുന്നു",
    meaningEn: "I hate",
    typeAr: "فعل مضارع",
    exampleLineNumber: 3,
    synonyms: [
      { ar: "أَمْقُتُ", ml: "ഞാൻ വെറുക്കുന്നു" },
      { ar: "أُبْغِضُ", ml: "ഞാൻ ദേഷ്യപ്പെടുന്നു" }
    ],
    antonyms: [
      { ar: "أُحِبُّ", ml: "ഞാൻ സ്നേഹിക്കുന്നു" }
    ]
  },
  {
    id: 6,
    wordAr: "تِجَارَة",
    rootAr: "ت ج ر",
    meaningMl: "കച്ചവടം (ഇവിടെ അർത്ഥമാക്കുന്നത് പ്രവർത്തനങ്ങൾ എന്നാണ്)",
    meaningEn: "Trade / Merchandise (Metaphor for deeds)",
    typeAr: "اسم",
    exampleLineNumber: 3,
    singular: "تِجَارَةٌ",
    synonyms: [
      { ar: "بَيْع", ml: "വിൽപന" },
      { ar: "صَنْعَة", ml: "തൊഴിൽ" }
    ]
  },
  {
    id: 7,
    wordAr: "سَوَاء",
    rootAr: "س و ي",
    meaningMl: "തുല്യർ / ഒരേപോലെ",
    meaningEn: "Equal / Same",
    typeAr: "اسم",
    exampleLineNumber: 4,
    synonyms: [
      { ar: "مِثْل", ml: "തുല്യം" },
      { ar: "مُتَسَاوُونَ", ml: "സമന്മാർ" }
    ],
    antonyms: [
      { ar: "مُخْتَلِفُونَ", ml: "വ്യത്യസ്തർ" }
    ]
  },
  {
    id: 8,
    wordAr: "البِضَاعَة",
    rootAr: "ب ض ع",
    meaningMl: "ചരക്കുകൾ",
    meaningEn: "Merchandise / Goods",
    typeAr: "اسم",
    exampleLineNumber: 4,
    singular: "بِضَاعَةٌ",
    plural: "بَضَائِعُ",
    synonyms: [
      { ar: "سِلْعَة", ml: "സാധനം" }
    ]
  }
];

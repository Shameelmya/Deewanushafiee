import { GlossaryItem } from '../../types';

export const glossaryData: GlossaryItem[] = [
  {
    id: 1,
    wordAr: "تَوَكَّلْتُ",
    rootAr: "و ك ل",
    meaningMl: "ഞാൻ ഭരമേൽപ്പിച്ചു",
    meaningEn: "I trusted / relied upon",
    typeAr: "فعل ماض",
    exampleLineNumber: 1,
    synonyms: [
      { ar: "اِعْتَمَدْتُ", ml: "ഞാൻ ആശ്രയിച്ചു" },
      { ar: "فَوَّضْتُ أَمْرِي", ml: "എന്റെ കാര്യം ഏൽപ്പിച്ചു" }
    ],
    antonyms: [
      { ar: "يَئِسْتُ", ml: "ഞാൻ നിരാശനായി" },
      { ar: "تَخَاذَلْتُ", ml: "ഞാൻ പിന്മാറി" }
    ]
  },
  {
    id: 2,
    wordAr: "أَيْقَنْتُ",
    rootAr: "ي ق ن",
    meaningMl: "ഞാൻ ഉറപ്പിച്ചു വിശ്വസിച്ചു",
    meaningEn: "I am certain / sure",
    typeAr: "فعل ماض",
    exampleLineNumber: 2,
    synonyms: [
      { ar: "تَأَكَّدْتُ", ml: "ഞാൻ ഉറപ്പാക്കി" },
      { ar: "آمَنْتُ", ml: "ഞാൻ വിശ്വസിച്ചു" }
    ],
    antonyms: [
      { ar: "شَكَكْتُ", ml: "ഞാൻ സംശയിച്ചു" }
    ]
  },
  {
    id: 3,
    wordAr: "رَازِقِي",
    rootAr: "ر ز ق",
    meaningMl: "എനിക്ക് ഭക്ഷണം നൽകുന്നവൻ",
    meaningEn: "My Provider",
    typeAr: "اسم فاعل",
    exampleLineNumber: 2,
    synonyms: [
      { ar: "مُعْطِي الرِّزْقِ", ml: "ഉപജീവനം നൽകുന്നവൻ" }
    ],
    antonyms: [
      { ar: "المَانِع", ml: "തടയുന്നവൻ" }
    ]
  },
  {
    id: 4,
    wordAr: "يَفُوتُنِي",
    rootAr: "ف و ت",
    meaningMl: "എനിക്ക് നഷ്ടപ്പെടുക",
    meaningEn: "Pass me by / Miss me",
    typeAr: "فعل مضارع",
    exampleLineNumber: 3,
    synonyms: [
      { ar: "يَضِيعُ مِنِّي", ml: "എനിക്ക് നഷ്ടമാകുക" },
      { ar: "يَتَجَاوَزُنِي", ml: "എന്നെ മറികടന്നുപോവുക" }
    ],
    antonyms: [
      { ar: "يُدْرِكُنِي", ml: "എന്നെ തേടിയെത്തുക" },
      { ar: "يَصِلُ إِلَيَّ", ml: "എന്നെ പ്രാപിക്കുക" }
    ]
  },
  {
    id: 5,
    wordAr: "قَاع",
    rootAr: "ق و ع",
    meaningMl: "അടിത്തട്ട്",
    meaningEn: "Bottom / Depths",
    typeAr: "اسم",
    exampleLineNumber: 4,
    singular: "قَاعٌ",
    plural: "قِيعَانٌ",
    synonyms: [
      { ar: "أَسْفَل", ml: "ഏറ്റവും താഴെ" },
      { ar: "عُمْق", ml: "ആഴം" }
    ],
    antonyms: [
      { ar: "سَطْح", ml: "ഉപരിതലം" },
      { ar: "قِمَّة", ml: "മുകൾഭാഗം" }
    ]
  },
  {
    id: 6,
    wordAr: "العَوَامِق",
    rootAr: "ع م ق",
    meaningMl: "ആഴമേറിയവ",
    meaningEn: "The deep (oceans)",
    typeAr: "اسم صفة",
    exampleLineNumber: 4,
    singular: "العَمِيقَةُ",
    synonyms: [
      { ar: "الغَائِرَة", ml: "താഴ്ന്നത്" },
      { ar: "البَعِيدَةُ الغَوْرِ", ml: "വലിയ ആഴമുള്ളത്" }
    ],
    antonyms: [
      { ar: "الضَّحْلَة", ml: "ആഴമില്ലാത്തവ" }
    ]
  }
];

import { GlossaryItem } from '../../types';

export const glossaryData: GlossaryItem[] = [
  {
    id: 1,
    wordAr: "نَطَقَ",
    rootAr: "ن ط ق",
    meaningMl: "സംസാരിച്ചു",
    meaningEn: "Spoke",
    typeAr: "فعل ماض",
    exampleLineNumber: 1,
    synonyms: [
      { ar: "تَكَلَّمَ", ml: "സംസാരിച്ചു" },
      { ar: "تَحَدَّثَ", ml: "പറഞ്ഞു" }
    ],
    antonyms: [
      { ar: "سَكَتَ", ml: "മിണ്ടാതിരുന്നു" },
      { ar: "صَمَتَ", ml: "മൗനം പാലിച്ചു" }
    ]
  },
  {
    id: 2,
    wordAr: "السَّفِيه",
    rootAr: "س ف ه",
    meaningMl: "വിഡ്ഢി / മര്യാദയില്ലാത്തവൻ",
    meaningEn: "The fool / The ignorant",
    typeAr: "اسم",
    exampleLineNumber: 1,
    singular: "السَّفِيهُ",
    plural: "السُّفَهَاءُ",
    synonyms: [
      { ar: "الأَحْمَق", ml: "മണ്ടൻ" },
      { ar: "الجَاهِل", ml: "വിവരമില്ലാത്തവൻ" }
    ],
    antonyms: [
      { ar: "العَاقِل", ml: "ബുദ്ധിമാൻ" },
      { ar: "الحَلِيم", ml: "സഹനശീലമുള്ളവൻ" }
    ]
  },
  {
    id: 3,
    wordAr: "تُجِبْ",
    rootAr: "ج و ب",
    meaningMl: "മറുപടി നൽകുക",
    meaningEn: "Answer / Reply",
    typeAr: "فعل مضارع",
    exampleLineNumber: 1,
    synonyms: [
      { ar: "تَرُدَّ", ml: "മറുപടി പറയുക" }
    ],
    antonyms: [
      { ar: "تَتَجَاهَلْ", ml: "അവഗണിക്കുക" }
    ]
  },
  {
    id: 4,
    wordAr: "خَيْر",
    rootAr: "خ ي ر",
    meaningMl: "ഏറ്റവും നല്ലത്",
    meaningEn: "Better / Best",
    typeAr: "اسم تفضيل",
    exampleLineNumber: 2,
    synonyms: [
      { ar: "أَفْضَل", ml: "ഏറ്റവും മികച്ചത്" },
      { ar: "أَحْسَن", ml: "ഏറ്റവും സുന്ദരമായത്" }
    ],
    antonyms: [
      { ar: "شَرّ", ml: "ഏറ്റവും മോശമായത്" }
    ]
  },
  {
    id: 5,
    wordAr: "السُّكُوت",
    rootAr: "س ك ت",
    meaningMl: "നിശബ്ദത",
    meaningEn: "Silence",
    typeAr: "اسم",
    exampleLineNumber: 2,
    synonyms: [
      { ar: "الصَّمْت", ml: "മൗനം" }
    ],
    antonyms: [
      { ar: "الكَلام", ml: "സംസാരം" },
      { ar: "الثَّرْثَرَة", ml: "വാചാലത" }
    ]
  },
  {
    id: 6,
    wordAr: "فَرَّجْتَ",
    rootAr: "ف ر ج",
    meaningMl: "നീ ആശ്വാസം നൽകി / ദുഃഖം അകറ്റി",
    meaningEn: "You relieved / You comforted",
    typeAr: "فعل ماض",
    exampleLineNumber: 3,
    synonyms: [
      { ar: "نَفَّسْتَ", ml: "ആശ്വസിപ്പിച്ചു" },
      { ar: "كَشَفْتَ كَرْبَهُ", ml: "ദുഃഖം ദൂരീകരിച്ചു" }
    ],
    antonyms: [
      { ar: "ضَيَّقْتَ", ml: "വിഷമിപ്പിച്ചു / ഇടുക്കത്തിലാക്കി" }
    ]
  },
  {
    id: 7,
    wordAr: "خَلَّيْتَهُ",
    rootAr: "خ ل و",
    meaningMl: "നീ അവനെ വിട്ടാൽ / അവഗണിച്ചാൽ",
    meaningEn: "You left him / Ignored him",
    typeAr: "فعل ماض",
    exampleLineNumber: 4,
    synonyms: [
      { ar: "تَرَكْتَهُ", ml: "നീ അവനെ ഉപേക്ഷിച്ചാൽ" },
      { ar: "تَجَاهَلْتَهُ", ml: "അവഗണിച്ചാൽ" }
    ],
    antonyms: [
      { ar: "جَادَلْتَهُ", ml: "തർക്കിച്ചാൽ" }
    ]
  },
  {
    id: 8,
    wordAr: "كَمَد",
    rootAr: "ك م د",
    meaningMl: "ഉള്ളിലൊതുക്കിയ ദുഃഖം / കടുത്ത ദേഷ്യം",
    meaningEn: "Suppressed grief / Intense anger",
    typeAr: "اسم",
    exampleLineNumber: 4,
    singular: "كَمَدٌ",
    synonyms: [
      { ar: "غَيْظ", ml: "കടുത്ത ദേഷ്യം" },
      { ar: "حُزْنٌ شَدِيد", ml: "കടുത്ത ദുഃഖം" }
    ],
    antonyms: [
      { ar: "فَرَح", ml: "സന്തോഷം" },
      { ar: "انْشِرَاح", ml: "മനഃശാന്തി" }
    ]
  }
];

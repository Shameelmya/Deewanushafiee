import { GlossaryItem } from '../../types';

export const glossaryData: GlossaryItem[] = [
  {
    id: 1,
    wordAr: "احْفَظْ",
    rootAr: "ح ف ظ",
    meaningMl: "നീ സൂക്ഷിക്കുക / കാത്തുരക്ഷിക്കുക",
    meaningEn: "Guard / Protect",
    typeAr: "فعل أمر",
    exampleLineNumber: 1,
    synonyms: [
      { ar: "صُنْ", ml: "സംരക്ഷിക്കുക" },
      { ar: "اِحْمِ", ml: "കാത്തുസൂക്ഷിക്കുക" }
    ],
    antonyms: [
      { ar: "ضَيِّعْ", ml: "പാഴാക്കുക" },
      { ar: "أَهْمِلْ", ml: "അവഗണിക്കുക" }
    ]
  },
  {
    id: 2,
    wordAr: "يَلْدَغَنَّكَ",
    rootAr: "ل د غ",
    meaningMl: "അത് നിന്നെ കടിക്കാതിരിക്കട്ടെ",
    meaningEn: "Let it not bite/sting you",
    typeAr: "فعل مضارع",
    exampleLineNumber: 2,
    synonyms: [
      { ar: "يَلْسَعَنَّكَ", ml: "നിന്നെ കുത്താതിരിക്കട്ടെ" }
    ]
  },
  {
    id: 3,
    wordAr: "ثُعْبَان",
    rootAr: "ث ع ب",
    meaningMl: "പാമ്പ്",
    meaningEn: "Snake / Serpent",
    typeAr: "اسم",
    exampleLineNumber: 2,
    singular: "ثُعْبَانٌ",
    plural: "ثَعَابِينُ",
    synonyms: [
      { ar: "حَيَّة", ml: "പാമ്പ്" },
      { ar: "أَفْعَى", ml: "വിഷപ്പാമ്പ്" }
    ]
  },
  {
    id: 4,
    wordAr: "المَقَابِر",
    rootAr: "ق ب ر",
    meaningMl: "ഖബറിടങ്ങൾ / ശ്മശാനങ്ങൾ",
    meaningEn: "Graveyards / Tombs",
    typeAr: "اسم",
    exampleLineNumber: 3,
    singular: "المَقْبَرَةُ",
    synonyms: [
      { ar: "المَدَافِن", ml: "മറവ് ചെയ്യുന്ന സ്ഥലങ്ങൾ" }
    ]
  },
  {
    id: 5,
    wordAr: "قَتِيل",
    rootAr: "ق ت ل",
    meaningMl: "കൊല്ലപ്പെട്ടവൻ",
    meaningEn: "Victim / Murdered person",
    typeAr: "اسم (صفة مشبهة)",
    exampleLineNumber: 3,
    singular: "قَتِيلٌ",
    plural: "قَتْلَى",
    synonyms: [
      { ar: "مَقْتُول", ml: "കൊലചെയ്യപ്പെട്ടവൻ" },
      { ar: "صَرِيع", ml: "വീണവൻ / മരിച്ചവൻ" }
    ],
    antonyms: [
      { ar: "قَاتِل", ml: "കൊലയാളി" },
      { ar: "نَاجٍ", ml: "രക്ഷപ്പെട്ടവൻ" }
    ]
  },
  {
    id: 6,
    wordAr: "تَهَابُ",
    rootAr: "ه ي ب",
    meaningMl: "ഭയപ്പെട്ടിരുന്നു / ബഹുമാനിച്ചിരുന്നു",
    meaningEn: "Used to fear / dread",
    typeAr: "فعل مضارع",
    exampleLineNumber: 4,
    synonyms: [
      { ar: "تَخَافُ", ml: "പേടിച്ചിരുന്നു" },
      { ar: "تَخْشَى", ml: "ഭയപ്പെട്ടിരുന്നു" }
    ],
    antonyms: [
      { ar: "تَأْمَنُ", ml: "നിർഭയരായിരുന്നു" },
      { ar: "تَسْتَخِفُّ", ml: "നിസ്സാരമായി കണ്ടിരുന്നു" }
    ]
  },
  {
    id: 7,
    wordAr: "لِقَاء",
    rootAr: "ل ق ي",
    meaningMl: "കണ്ടുമുട്ടൽ / അഭിമുഖീകരിക്കൽ",
    meaningEn: "Meeting / Encounter",
    typeAr: "اسم",
    exampleLineNumber: 4,
    singular: "لِقَاءٌ",
    synonyms: [
      { ar: "مُوَاجَهَة", ml: "നേരിടൽ" },
      { ar: "مُقَابَلَة", ml: "സന്ധിക്കൽ" }
    ],
    antonyms: [
      { ar: "فِرَاق", ml: "വേർപിരിയൽ" },
      { ar: "وَدَاع", ml: "യാത്രയയപ്പ്" }
    ]
  },
  {
    id: 8,
    wordAr: "الشُّجْعَان",
    rootAr: "ش ج ع",
    meaningMl: "ധീരന്മാർ",
    meaningEn: "The brave ones / Warriors",
    typeAr: "اسم",
    exampleLineNumber: 4,
    singular: "الشُّجَاعُ",
    synonyms: [
      { ar: "الأَبْطَال", ml: "വീരന്മാർ" },
      { ar: "البَوَاسِل", ml: "പരാക്രമികൾ" }
    ],
    antonyms: [
      { ar: "الجُبَنَاء", ml: "ഭീരുക്കൾ" },
      { ar: "الخَائِفُون", ml: "പേടിക്കുന്നവർ" }
    ]
  }
];

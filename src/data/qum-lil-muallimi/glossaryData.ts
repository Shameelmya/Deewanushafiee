import { GlossaryItem } from '../../types';

export const glossaryData: GlossaryItem[] = [
  { 
    id: 1, wordAr: "قُم", rootAr: "قوم", meaningMl: "എഴുന്നേൽക്കുക", meaningEn: "Stand up", typeAr: "فعل أمر", exampleLineNumber: 1,
    synonyms: [{ ar: "اِنهَض", ml: "എഴുന്നേൽക്കുക" }],
    antonyms: [{ ar: "اِجلِس", ml: "ഇരിക്കുക" }]
  },
  { 
    id: 2, wordAr: "وَفِّهِ", rootAr: "وفى", meaningMl: "അദ്ദേഹത്തിന് പൂർണ്ണമായി നൽകുക", meaningEn: "Give him fully", typeAr: "فعل أمر + ضمير", exampleLineNumber: 1,
    synonyms: [{ ar: "أَعطِهِ كامِلاً", ml: "പൂർണ്ണമായി കൊടുക്കുക" }],
    antonyms: [{ ar: "اِمنَعهُ", ml: "തടയുക" }]
  },
  { 
    id: 3, wordAr: "التَبجيلا", rootAr: "بجل", meaningMl: "ആദരവ്, ബഹുമാനം", meaningEn: "Reverence / Respect", typeAr: "اسم (مفعول به)", exampleLineNumber: 1,
    synonyms: [{ ar: "الاِحتِرام", ml: "ബഹുമാനം" }, { ar: "التَوقير", ml: "ആദരവ്" }],
    antonyms: [{ ar: "التَحقيرا", ml: "അവഗണന/നിന്ദ" }, { ar: "الإِهانَة", ml: "അപമാനം" }]
  },
  { 
    id: 4, wordAr: "كادَ", rootAr: "كود", meaningMl: "ആകാറായിരുന്നു, അടുത്തു", meaningEn: "Almost / Nearly", typeAr: "فعل ناقص", exampleLineNumber: 2,
    synonyms: [{ ar: "قارَبَ", ml: "അടുത്തു" }, { ar: "أَوشَكَ", ml: "ആകാറായി" }]
  },
  { 
    id: 5, wordAr: "أَشرَفَ", rootAr: "شرف", meaningMl: "ഏറ്റവും ശ്രേഷ്ഠനായ", meaningEn: "More honorable", typeAr: "اسم تفضيل", exampleLineNumber: 3,
    synonyms: [{ ar: "أَكرَمَ", ml: "ഏറ്റവും മാന്യനായ" }, { ar: "أَعظَمَ", ml: "ഏറ്റവും മഹത്തായ" }],
    antonyms: [{ ar: "أَحقَرَ", ml: "ഏറ്റവും നിന്ദ്യനായ" }]
  },
  { 
    id: 6, wordAr: "أَجَلَّ", rootAr: "جلل", meaningMl: "ഏറ്റവും മഹത്തായ", meaningEn: "More glorious", typeAr: "اسم تفضيل", exampleLineNumber: 3,
    synonyms: [{ ar: "أَعظَمَ", ml: "മഹത്തായ" }],
    antonyms: [{ ar: "أَذَلَّ", ml: "നിസ്സാരമായ" }]
  },
  { 
    id: 7, wordAr: "يُنشِئُ", rootAr: "نشأ", meaningMl: "വളർത്തിയെടുക്കുന്നു", meaningEn: "Raises / Nurtures", typeAr: "فعل مضارع", exampleLineNumber: 4,
    synonyms: [{ ar: "يُرَبّي", ml: "വളർത്തുന്നു" }, { ar: "يَبني", ml: "നിർമ്മിക്കുന്നു" }],
    antonyms: [{ ar: "يَهدِمُ", ml: "തകർക്കുന്നു" }]
  },
  { 
    id: 8, wordAr: "عُقولا", rootAr: "عقل", meaningMl: "ബുദ്ധികളെ", meaningEn: "Minds", typeAr: "اسم (جمع عقل)", exampleLineNumber: 4,
    singular: "عَقل", plural: "عُقول",
    synonyms: [{ ar: "أَلباباً", ml: "ബുദ്ധികളെ" }]
  },
  { 
    id: 9, wordAr: "سُبحانَكَ", rootAr: "سبح", meaningMl: "നിന്റെ പരിശുദ്ധി", meaningEn: "Glory be to You", typeAr: "اسم (مفعول مطلق)", exampleLineNumber: 5,
    synonyms: [{ ar: "تَنزيهاً لَكَ", ml: "നിന്നെ പവിത്രമാക്കുന്നു" }]
  },
  { 
    id: 10, wordAr: "القُرونَ", rootAr: "قرن", meaningMl: "തലമുറകളെ / നൂറ്റാണ്ടുകളെ", meaningEn: "Generations / Centuries", typeAr: "اسم (جمع قرن)", exampleLineNumber: 6,
    singular: "قَرن", plural: "قُرون",
    synonyms: [{ ar: "الأَجيالَ", ml: "തലമുറകളെ" }]
  },
  { 
    id: 11, wordAr: "ظُلُماتِه", rootAr: "ظلم", meaningMl: "അതിന്റെ ഇരുട്ടുകളിൽ (അജ്ഞത)", meaningEn: "Its darknesses (ignorance)", typeAr: "اسم مجرور", exampleLineNumber: 7,
    singular: "ظُلمَة", plural: "ظُلُمات",
    synonyms: [{ ar: "جَهلِهِ", ml: "അജ്ഞതയിൽ" }],
    antonyms: [{ ar: "نورِهِ", ml: "അതിന്റെ പ്രകാശത്തിൽ" }]
  },
  { 
    id: 12, wordAr: "المُبينَ", rootAr: "بين", meaningMl: "വ്യക്തമായ", meaningEn: "Clear / Manifest", typeAr: "اسم (صفة)", exampleLineNumber: 8,
    synonyms: [{ ar: "الواضِحَ", ml: "വ്യക്തമായ" }, { ar: "الجَلِيَّ", ml: "വെളിവായ" }],
    antonyms: [{ ar: "الخَفِيَّ", ml: "മറഞ്ഞ" }, { ar: "الغامِضَ", ml: "അവ്യക്തമായ" }]
  },
  { 
    id: 13, wordAr: "صَدِئَ", rootAr: "صدأ", meaningMl: "തുരുമ്പെടുത്തു", meaningEn: "Rusted", typeAr: "فعل ماض", exampleLineNumber: 10,
    synonyms: [{ ar: "تَآكَلَ", ml: "ജീർണ്ണിച്ചു" }]
  },
  { 
    id: 14, wordAr: "مَصقولا", rootAr: "صقل", meaningMl: "മിനുസപ്പെടുത്തിയത് / തിളക്കമുള്ളത്", meaningEn: "Polished", typeAr: "اسم مفعول", exampleLineNumber: 10,
    synonyms: [{ ar: "لامِعاً", ml: "തിളങ്ങുന്നത്" }],
    antonyms: [{ ar: "باهِتاً", ml: "മങ്ങിയത്" }]
  },
  { 
    id: 15, wordAr: "مُرشِداً", rootAr: "رشد", meaningMl: "വഴികാട്ടിയായി", meaningEn: "Guide / Instructor", typeAr: "اسم فاعل (حال)", exampleLineNumber: 11,
    synonyms: [{ ar: "هادِياً", ml: "വഴികാട്ടി" }],
    antonyms: [{ ar: "مُضِلّاً", ml: "വഴിപിഴപ്പിക്കുന്നവൻ" }]
  },
  { 
    id: 16, wordAr: "البَتولِ", rootAr: "بتل", meaningMl: "കന്യക (മർയം നബി)", meaningEn: "Virgin Mary", typeAr: "اسم علم", exampleLineNumber: 12,
    synonyms: [{ ar: "العَذراءِ", ml: "കന്യക" }]
  },
  { 
    id: 17, wordAr: "يَنبوعَ", rootAr: "نبغ", meaningMl: "ഉറവ / സ്രോതസ്സ്", meaningEn: "Fountain / Spring", typeAr: "اسم", exampleLineNumber: 13,
    singular: "يَنبوع", plural: "يَنابيع",
    synonyms: [{ ar: "مَصدَرَ", ml: "ഉറവിടം" }, { ar: "نَبعَ", ml: "ഉറവ" }]
  },
  { 
    id: 18, wordAr: "البَيانِ", rootAr: "بين", meaningMl: "സാഹിത്യ സൗന്ദര്യം / സാഹിത്യ വ്യക്തത", meaningEn: "Eloquence / Clarity", typeAr: "اسم (مضاف إليه)", exampleLineNumber: 13,
    synonyms: [{ ar: "الفَصاحَةِ", ml: "സാഹിത്യം" }]
  },
  { 
    id: 19, wordAr: "التَنزيلا", rootAr: "نزل", meaningMl: "ഖുർആൻ വചനം", meaningEn: "The Revelation (Quran)", typeAr: "اسم", exampleLineNumber: 14,
    synonyms: [{ ar: "الوَحيَ", ml: "വഹ്‌യ് (ദിവ്യബോധനം)" }, { ar: "القُرآنَ", ml: "ഖുർആൻ" }]
  },
  { 
    id: 20, wordAr: "أُفوﻻً", rootAr: "أفل", meaningMl: "അസ്തമയം", meaningEn: "Setting / Decline", typeAr: "مصدر", exampleLineNumber: 16,
    synonyms: [{ ar: "غُروباً", ml: "അസ്തമയം" }, { ar: "زَوالاً", ml: "ഇല്ലാതാകൽ" }],
    antonyms: [{ ar: "شُروقاً", ml: "ഉദയം" }]
  },
  { 
    id: 21, wordAr: "تَطفيلا", rootAr: "طفل", meaningMl: "അന്യരെ ആശ്രയിക്കൽ", meaningEn: "Dependence / Sponging", typeAr: "مصدر", exampleLineNumber: 18,
    synonyms: [{ ar: "تَبَعِيَّةً", ml: "ആശ്രിതത്വം" }],
    antonyms: [{ ar: "اِستِقلالاً", ml: "സ്വാതന്ത്ര്യം" }]
  },
  { 
    id: 22, wordAr: "أُديلا", rootAr: "دول", meaningMl: "മേൽക്കോയ്മ നൽകപ്പെട്ടു", meaningEn: "Given dominance over", typeAr: "فعل مبني للمجهول", exampleLineNumber: 20,
    synonyms: [{ ar: "غُلِبَ", ml: "കീഴടക്കി" }, { ar: "نُصِرَ", ml: "സഹായിക്കപ്പെട്ടു" }]
  },
  { 
    id: 23, wordAr: "وَبيلا", rootAr: "وبل", meaningMl: "കഠിനമായ / ദാരുണമായ", meaningEn: "Severe / Grievous", typeAr: "صفة", exampleLineNumber: 24,
    synonyms: [{ ar: "شَديداً", ml: "ശക്തമായ" }, { ar: "قاسِياً", ml: "കഠിനമായ" }],
    antonyms: [{ ar: "يَسيراً", ml: "ലളിതമായ" }]
  },
  { 
    id: 24, wordAr: "عَلقَماً", rootAr: "علقم", meaningMl: "കയ്പുള്ള വസ്തു", meaningEn: "Bitter colocynth", typeAr: "اسم (مفعول به)", exampleLineNumber: 31,
    synonyms: [{ ar: "مُرّاً", ml: "കയ്പുള്ള" }],
    antonyms: [{ ar: "حُلواً", ml: "മധുരമുള്ള" }]
  },
  { 
    id: 25, wordAr: "عِبءَ", rootAr: "عبأ", meaningMl: "കനത്ത ഭാരം", meaningEn: "Heavy burden", typeAr: "اسم", exampleLineNumber: 36,
    singular: "عِبء", plural: "أَعباء",
    synonyms: [{ ar: "حِملَ", ml: "ഭാരം" }, { ar: "ثِقَلَ", ml: "ചുമട്" }]
  },
  { 
    id: 26, wordAr: "عِزريلا", rootAr: "عزر", meaningMl: "മരണദൂതൻ (ഇസ്രാഈൽ)", meaningEn: "Azrael (Angel of Death)", typeAr: "اسم علم أعجمي", exampleLineNumber: 38,
    synonyms: [{ ar: "مَلَكَ المَوتِ", ml: "മരണത്തിന്റെ മലക്ക്" }]
  },
  { 
    id: 27, wordAr: "كَهفَ", rootAr: "كهف", meaningMl: "അഭയകേന്ദ്രം / കോട്ട", meaningEn: "Cave / Haven", typeAr: "اسم", exampleLineNumber: 40,
    singular: "كَهف", plural: "كُهوف",
    synonyms: [{ ar: "مَلجَأَ", ml: "അഭയകേന്ദ്രം" }, { ar: "مَلاذاً", ml: "രക്ഷിതസ്ഥാനം" }]
  },
  { 
    id: 28, wordAr: "مَأتَماً", rootAr: "أتم", meaningMl: "വിലാപസഭ", meaningEn: "Mourning assembly", typeAr: "اسم مكان / مصدر", exampleLineNumber: 44,
    singular: "مَأتَم", plural: "مَآتِم",
    synonyms: [{ ar: "عَزاءً", ml: "അനുശോചനം" }, { ar: "مَندَباً", ml: "വിലാപസ്ഥലം" }],
    antonyms: [{ ar: "فَرَحاً", ml: "സന്തോഷം" }, { ar: "عُرساً", ml: "വിവാഹസൽക്കാരം" }]
  }
];

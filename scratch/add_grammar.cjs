const fs = require('fs');
const path = require('path');

const balaghaPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'balaghaData.ts');
let content = fs.readFileSync(balaghaPath, 'utf8');

const newGrammarItems = `  {
    id: 12,
    titleMl: "പദവിശകലനം (ഇഅ്റാബ്) - ഖബർ കാന",
    titleEn: "Grammatical Parsing (I'rab) - Predicate of Kana",
    titleAr: "خَبَرُ كَانَ",
    category: "نحو",
    exampleAr: "وَكُنْ رَجُلاً",
    explanationMl: "ഇവിടെ 'റജുലൻ' എന്നത് 'കാന' (ആകുക) എന്ന ക്രിയയുടെ ഖബർ (Predicate) ആണ്. അതിനാൽ ഇതിന് നസ്ബ് (ഫത്ഹ്) നൽകപ്പെട്ടിരിക്കുന്നു.",
    explanationEn: "The word 'Rajulan' is the predicate (Khabar) of the verb 'Kana' (to be), which places it in the accusative case (Mansub).",
    explanationAr: "كلمة (رجلاً) إعرابها خبر (كان) منصوب وعلامة نصبه الفتحة الظاهرة، واسم كان ضمير مستتر تقديره (أنت).",
    lineNumber: 5
  },
  {
    id: 13,
    titleMl: "പദവിശകലനം (ഇഅ്റാബ്) - മറുപടി വാചകം",
    titleEn: "Grammatical Parsing (I'rab) - Response to Command",
    titleAr: "جَوَابُ الطَّلَبِ",
    category: "نحو",
    exampleAr: "دَعِ الأَيَّامَ تَغْدِرْ",
    explanationMl: "'തഗ്ദിർ' എന്ന ക്രിയയ്ക്ക് സുകൂൻ വരാൻ കാരണം, അത് 'വിട്ടേക്കുക' (دَعِ) എന്ന കൽപനയ്ക്കുള്ള മറുപടിയായി (ജവാബ് അത്ത്വലബ്) വന്നതുകൊണ്ടാണ്.",
    explanationEn: "The verb 'Taghdir' is jussive (Majzum with Sukoon) because it acts as the response (Jawab al-Talab) to the imperative command 'Da\\' (Let).",
    explanationAr: "الفعل المضارع (تغدر) مجزوم وعلامة جزمه السكون لأنه وقع في جواب الطلب (فعل الأمر: دع).",
    lineNumber: 25
  },
  {
    id: 14,
    titleMl: "പദവിശകലനം (ഇഅ്റാബ്) - സമയസൂചകം",
    titleEn: "Grammatical Parsing (I'rab) - Adverb of Time",
    titleAr: "ظَرْفُ زَمَانٍ",
    category: "نحو",
    exampleAr: "قَطُّ",
    explanationMl: "'ഖത്വ്' എന്നത് സമയത്തെ കുറിക്കുന്ന പദമാണ് (ളർഫ് സമാൻ). ഭൂതകാലത്തെയോ ഭാവിയിലെയോ ഒരു കാര്യത്തെ കർശനമായി നിഷേധിക്കാൻ ഇത് ഉപയോഗിക്കുന്നു.",
    explanationEn: "An adverb of time built on Damma, functioning as a linguistic particle used for absolute, categorical negation.",
    explanationAr: "ظرف زمان مبني على الضم يفيد استغراق النفي، وهنا لاستغراق نفي رؤية الذل للأعداء في كل الأوقات.",
    lineNumber: 11
  },
  {
    id: 15,
    titleMl: "പദവിശകലനം (ഇഅ്റാബ്) - കർമ്മം (ഒബ്ജക്റ്റ്)",
    titleEn: "Grammatical Parsing (I'rab) - Direct Object",
    titleAr: "مَفْعُولٌ بِهِ",
    category: "نحو",
    exampleAr: "دَعِ الأَيَّامَ",
    explanationMl: "എന്തിനെയാണ് വിടേണ്ടത്? 'കാലത്തെ'. അതിനാൽ 'അൽ-അയ്യാം' എന്നത് ഇവിടെ കർമ്മമാണ് (മഫ്ഊൽ ബിഹി).",
    explanationEn: "The word 'Al-Ayyam' (The days) is the direct object (Maf'ool Bihi) receiving the action of the verb 'Let'.",
    explanationAr: "كلمة (الأيام) مفعول به منصوب للفعل (دع) وعلامة نصبه الفتحة الظاهرة على آخره.",
    lineNumber: 1
  },
  {
    id: 16,
    titleMl: "പദവിശകലനം (ഇഅ്റാബ്) - കർത്താവ് (സബ്ജക്റ്റ്)",
    titleEn: "Grammatical Parsing (I'rab) - Subject",
    titleAr: "فَاعِلٌ",
    category: "نحو",
    exampleAr: "يُغْنِي عَنِ المَوْتِ الدَّوَاءُ",
    explanationMl: "എന്താണ് ഫലം ചെയ്യാത്തത്? 'മരുന്ന്'. അതുകൊണ്ട് 'അദ്ദവാഉ' എന്നത് ഇവിടെ കർത്താവാണ് (ഫാഇൽ).",
    explanationEn: "The word 'Dawa\\'u' (Medicine) is the nominative subject (Fa'il) performing the action of the verb 'Yughni' (avail).",
    explanationAr: "كلمة (الدواء) فاعل مرفوع للفعل (يغني) وعلامة رفعه الضمة الظاهرة.",
    lineNumber: 26
  }
];`;

content = content.replace(/}\n];/, "},\n" + newGrammarItems);

// Let's also update the BalaghaView component to add "نحو" to the filter tags
const viewPath = path.join(process.cwd(), 'src', 'components', 'BalaghaView.tsx');
let viewContent = fs.readFileSync(viewPath, 'utf8');

// replace the categories array
viewContent = viewContent.replace(/id:\s*'أسلوب'.*?},/g, `id: 'أسلوب', labelMl: 'أسلوب الأمر (Imperative)', labelEn: 'Imperatives' },
    { id: 'نحو', labelMl: 'النحو (Grammar)', labelEn: 'Grammar (Nahu)' },`);

fs.writeFileSync(balaghaPath, content);
fs.writeFileSync(viewPath, viewContent);
console.log('Added grammar to balaghaData and updated filter!');

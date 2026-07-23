import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "كم عدد شروط طلب العلم التي ذكرها الإمام الشافعي في الأبيات؟",
    qMl: "അറിവ് നേടുന്നതിന് എത്ര നിബന്ധനകളുണ്ടെന്നാണ് ഇമാം ശാഫിഈ (റ) കവിതയിൽ പറയുന്നത്?",
    qEn: "How many conditions for seeking knowledge did Imam Al-Shafi'i mention in the poem?",
    type: "mcq",
    options: ["خمسة شروط", "ستة شروط", "سبعة شروط", "أربعة شروط"],
    optionsEn: ["Five conditions", "Six conditions", "Seven conditions", "Four conditions"],
    correctOptionIndex: 1,
    answerAr: "ستة شروط",
    explanationAr: "ذكر الإمام الشافعي بوضوح في الشطر الأول: 'إلا بستة'."
  },
  {
    id: 2,
    qAr: "ما هو الشرط الأول الذي ذكره الإمام الشافعي لطلب العلم؟ ولماذا هو مهم؟",
    qMl: "വിജ്ഞാന സമ്പാദനത്തിനായി ഇമാം പറഞ്ഞ ഒന്നാമത്തെ നിബന്ധന എന്താണ്? അതിന്റെ പ്രാധാന്യമെന്ത്?",
    qEn: "What is the first condition mentioned by Imam Al-Shafi'i for seeking knowledge? And why is it important?",
    type: "descriptive",
    answerAr: "الشرط الأول هو (الذكاء). وهو مهم لأنه الأداة الأساسية لفهم المسائل العلمية المعقدة واستيعاب المعلومات بسرعة، وبدونه يصعب على الطالب التعمق في بحور العلم.",
    answerMl: "ഒന്നാമത്തെ നിബന്ധന 'ബുദ്ധിശക്തി' (ذكاء) ആണ്. സങ്കീർണ്ണമായ വിഷയങ്ങൾ വേഗത്തിൽ ഗ്രഹിക്കാനും മനസ്സിലാക്കാനും ബുദ്ധിശക്തി അത്യാവശ്യമാണ്.",
    answerEn: "The first condition is 'Intelligence' (Dhaka'). It is important because it is the fundamental tool for understanding complex scientific issues and absorbing information quickly."
  },
  {
    id: 3,
    qAr: "ما معنى كلمة (بُلْغَةٌ) في البيت الثاني؟",
    qMl: "രണ്ടാമത്തെ വരിയിലെ (بُلْغَةٌ) എന്ന പദത്തിന്റെ അർത്ഥമെന്ത്?",
    qEn: "What is the meaning of the word (بُلْغَةٌ) in the second couplet?",
    type: "mcq",
    options: ["البلاغة في الكلام", "الوصول إلى الهدف", "ما يكفي من العيش لسد الحاجة", "السفر البعيد"],
    optionsEn: ["Eloquence in speech", "Reaching the goal", "Sufficient sustenance for living", "Distant travel"],
    correctOptionIndex: 2,
    answerAr: "ما يكفي من العيش لسد الحاجة",
    explanationAr: "البلغة تعني الكفاية من الرزق التي تبلغ بالإنسان حاجته وتغنيه عن سؤال الناس وتشتت الذهن."
  },
  {
    id: 4,
    qAr: "استخرج من الأبيات الكلمة التي تعني (الرغبة الشديدة).",
    qMl: "കവിതയിൽ നിന്ന് 'അതിയായ ആഗ്രഹം' എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract the word from the poem that means 'extreme eagerness'.",
    type: "grammar",
    answerAr: "حِرْصٌ"
  },
  {
    id: 5,
    qAr: "لماذا اعتبر الإمام الشافعي (صحبة الأستاذ) شرطاً من شروط العلم؟",
    qMl: "എന്തുകൊണ്ടാണ് 'ഗുരുവുമായുള്ള സഹവാസം' ഒരു നിർബന്ധ ഘടകമായി ഇമാം കണക്കാക്കുന്നത്?",
    qEn: "Why did Imam Al-Shafi'i consider 'companionship of a teacher' a condition for knowledge?",
    type: "descriptive",
    answerAr: "لأن العلم لا يُؤخذ من الكتب فقط، بل الأستاذ يعلم الطالب الأدب ومنهجية التفكير ويجنبه الأخطاء والفهم الخاطئ للنصوص، فملازمة الأستاذ تنقل الخبرة العملية وليس فقط المعلومات.",
    answerMl: "പുസ്തകങ്ങളിൽ നിന്ന് മാത്രം അറിവ് നേടാൻ കഴിയില്ല. ഒരു നല്ല ഗുരു വിദ്യാർത്ഥിയെ അറിവിനൊപ്പം അച്ചടക്കവും ചിന്താശേഷിയും പഠിപ്പിക്കുന്നു, കൂടാതെ തെറ്റുകളിൽ നിന്ന് വഴിനടത്തുകയും ചെയ്യുന്നു.",
    answerEn: "Because knowledge is not taken from books alone. A teacher teaches etiquette, the methodology of thinking, and prevents the student from misunderstanding texts. Companionship transfers practical experience, not just information."
  },
  {
    id: 6,
    qAr: "أعرب كلمة (العِلْمَ) في جملة (لَنْ تَنَالَ العِلْمَ).",
    qMl: "(لَنْ تَنَالَ العِلْمَ) എന്നതിലെ (العِلْمَ) എന്ന പദത്തിന്റെ ഇഅ്റാബ് (വ്യാകരണം) എന്ത്?",
    qEn: "What is the grammatical analysis (I'rab) of the word (العِلْمَ) in (لَنْ تَنَالَ العِلْمَ)?",
    type: "grammar",
    answerAr: "مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره."
  },
  {
    id: 7,
    qAr: "ما أهمية (طول الزمان) في طلب العلم؟",
    qMl: "വിജ്ഞാന സമ്പാദനത്തിൽ 'ദീർഘകാലത്തെ സമയം' എന്നതിന്റെ പ്രാധാന്യമെന്ത്?",
    qEn: "What is the importance of 'a long length of time' in seeking knowledge?",
    type: "descriptive",
    answerAr: "العلم واسع ولا يمكن تحصيله في فترة قصيرة، طول الزمان يمنح الطالب فرصة للنضج العقلي، وتثبيت المعلومات، والتعمق في التخصص، وتراكم الخبرات لتكوين ملكة علمية راسخة.",
    answerMl: "വിജ്ഞാനം അതിരുകളില്ലാത്തതാണ്. കുറഞ്ഞ കാലം കൊണ്ട് അത് നേടാനാവില്ല. ദീർഘകാലത്തെ പഠനത്തിലൂടെ മാത്രമേ വിജ്ഞാനത്തിൽ അവഗാഹവും ബുദ്ധിപരമായ പക്വതയും നേടാൻ കഴിയൂ.",
    answerEn: "Knowledge is vast and cannot be acquired in a short period. A long time gives the student the opportunity for mental maturity, consolidating information, delving deep into a specialization, and accumulating experience."
  },
  {
    id: 8,
    qAr: "ما هو الفعل المضارع في الشطر: (أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ) وما هي حالته الإعرابية؟",
    qMl: "(أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ) എന്ന വരിയിലെ ഫിഅ്‌ൽ മുദാരിഅ് (Present Tense Verb) കണ്ടെത്തുക. അതിന്റെ അവസ്ഥയെന്ത്?",
    qEn: "Identify the present tense verb (Fi'l Mudhari') in the line (أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ) and its grammatical state?",
    type: "grammar",
    answerAr: "الفعل المضارع هو (تَنَالَ)، وحالته منصوب بـ (لن) وعلامة نصبه الفتحة."
  }
];

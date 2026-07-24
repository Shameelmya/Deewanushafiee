import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "بماذا شبّه الإمام الشافعي اللسان في البيت الثاني؟",
    qMl: "രണ്ടാമത്തെ വരിയിൽ ഇമാം ശാഫിഈ (റ) നാവിനെ എന്തിനോടാണ് ഉപമിച്ചിരിക്കുന്നത്?",
    qEn: "What did Imam Al-Shafi'i compare the tongue to in the second line?",
    type: "mcq",
    options: ["بالسيف الحاد", "بالثعبان السام", "بالنار المشتعلة", "بالبحر العميق"],
    optionsEn: ["To a sharp sword", "To a venomous snake", "To a burning fire", "To a deep sea"],
    correctOptionIndex: 1,
    answerAr: "بالثعبان (إِنَّهُ ثُعْبَانُ).",
    explanationAr: "لأن الكلمة السيئة تلدغ صاحبها وتهلكه كما يلدغ الثعبان السام."
  },
  {
    id: 2,
    qAr: "ما هي المفارقة العجيبة التي ذكرها الشاعر في البيت الأخير؟",
    qMl: "അവസാന വരിയിൽ കവി പറയുന്ന അത്ഭുതകരമായ വൈരുദ്ധ്യം (Paradox) എന്താണ്?",
    qEn: "What is the amazing paradox mentioned by the poet in the last verse?",
    type: "descriptive",
    answerAr: "المفارقة هي أن الشجعان الأقوياء الذين يخافهم الجميع في ساحات المعارك، قد يُقتلون بسبب كلمة طائشة خرجت من ألسنتهم. فالقوة البدنية لا تحمي الإنسان من خطر لسانه.",
    answerMl: "യുദ്ധക്കളത്തിൽ ശത്രുക്കൾ ഭയപ്പെടുന്ന വലിയ ധീരന്മാർ പോലും സ്വന്തം നാവുകാരണം കൊല്ലപ്പെടുന്നു എന്നതാണ് ആ വൈരുദ്ധ്യം. മനുഷ്യന്റെ ശാരീരികമായ കരുത്ത് സ്വന്തം നാവിന്റെ അപകടത്തിൽ നിന്ന് അവനെ രക്ഷിക്കില്ല എന്ന് ഇതിലൂടെ വ്യക്തമാക്കുന്നു.",
    answerEn: "The paradox is that brave and strong warriors, whom everyone fears in battles, can be killed because of a reckless word that came from their own tongues. Physical strength cannot protect a person from the danger of their own tongue."
  },
  {
    id: 3,
    qAr: "استخرج من الأبيات كلمة تعني (يخافون ويحترمون).",
    qMl: "കവിതയിൽ നിന്ന് (ഭയപ്പെട്ടിരുന്നു / ബഹുമാനിച്ചിരുന്നു) എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract a word from the poem that means (used to fear/respect).",
    type: "grammar",
    answerAr: "تَهَابُ"
  },
  {
    id: 4,
    qAr: "ما هو المحسن البديعي بين (قَتِيلِ) و (الشُّجْعَانُ) في سياق الأبيات؟",
    qMl: "ഈ വരികളുടെ പശ്ചാത്തലത്തിൽ (കൊല്ലപ്പെട്ടവൻ), (ധീരന്മാർ) എന്നീ പദങ്ങൾ തമ്മിലുള്ള ബന്ധമെന്ത്?",
    qEn: "What is the rhetorical device between (killed) and (brave ones) in the context of the verses?",
    type: "grammar",
    answerAr: "يوجد طباق معنوي خفي؛ فالشجاع عادة هو القاتل أو المنتصر، لكنه هنا يتحول إلى (قتيل) وضعيف أمام لسانه."
  },
  {
    id: 5,
    qAr: "ما هو إعراب (أَيُّهَا) في البيت الأول؟",
    qMl: "ഒന്നാമത്തെ വരിയിലെ (أَيُّهَا) എന്ന പദത്തിന്റെ ഇഅ്റാബ് (വ്യാകരണ നിയമം) എന്താണ്?",
    qEn: "What is the I'rab (grammatical parsing) of (أَيُّهَا) in the first line?",
    type: "grammar",
    answerAr: "منادى مبني على الضم في محل نصب، والهاء حرف تنبيه لا محل له من الإعراب."
  },
  {
    id: 6,
    qAr: "ماذا يقصد الشاعر بقوله (كَمْ فِي المَقَابِرِ)؟",
    qMl: "(ഖബറിടങ്ങളിൽ എത്രയെത്ര ആളുകളുണ്ട്) എന്ന് പറയുന്നതിലൂടെ കവി ഉദ്ദേശിക്കുന്നതെന്താണ്?",
    qEn: "What does the poet mean by saying (How many in the graveyards)?",
    type: "descriptive",
    answerAr: "استخدم الشاعر (كم الخبرية) لتدل على التكثير. أي أن عدد الذين هلكوا وماتوا بسبب أخطاء ألسنتهم هو عدد هائل جداً يملأ المقابر.",
    answerMl: "(كَمْ) എന്ന പദം ഉപയോഗിച്ചത് എണ്ണം ചോദിക്കാനല്ല, മറിച്ച് 'അനവധി' എന്ന് കാണിക്കാനാണ്. സ്വന്തം നാവിന്റെ പിഴവ് കാരണം ജീവൻ നഷ്ടപ്പെട്ട അസംഖ്യം ആളുകൾ ലോകത്തുണ്ട് എന്ന് കവി നമ്മെ ഓർമ്മിപ്പിക്കുന്നു.",
    answerEn: "The poet uses (Kam) here to denote abundance, not to ask a question. He means that an incredibly large number of people have perished and filled the graveyards solely because of the mistakes of their tongues."
  }
];

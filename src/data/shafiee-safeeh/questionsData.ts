import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "ما هي نصيحة الإمام الشافعي عند التحدث مع السفيه؟",
    qMl: "ഒരു വിഡ്ഢി സംസാരിക്കുമ്പോൾ ഇമാം ശാഫിഈ (റ) നൽകുന്ന ഉപദേശം എന്താണ്?",
    qEn: "What is Imam Al-Shafi'i's advice when a fool speaks?",
    type: "mcq",
    options: ["أن نرد عليه بقوة", "أن نتجاهله ونسكت", "أن نعلمه الأدب", "أن نشتكيه للناس"],
    optionsEn: ["To respond to him strongly", "To ignore him and remain silent", "To teach him manners", "To complain about him to people"],
    correctOptionIndex: 1,
    answerAr: "أن نتجاهله ونسكت (فَلا تُجِبْهُ).",
    explanationAr: "لأن الرد على الجاهل ينقله إلى مستواك، بينما الصمت يقهره ويحفظ كرامتك."
  },
  {
    id: 2,
    qAr: "ما الذي يحدث للسفيه إذا رددت عليه حسب البيت الثالث؟",
    qMl: "മൂന്നാമത്തെ വരി അനുസരിച്ച്, നീ വിഡ്ഢിക്ക് മറുപടി നൽകിയാൽ അവന് എന്ത് സംഭവിക്കും?",
    qEn: "What happens to the fool if you reply to him, according to the third line?",
    type: "descriptive",
    answerAr: "إذا رددت عليه فإنك تفرج عنه وتريحه، لأن هدفه الأساسي هو جرك إلى الجدال واستفزازك.",
    answerMl: "നീ അവന് മറുപടി നൽകുകയാണെങ്കിൽ, അത് അവന് വലിയ ആശ്വാസവും സന്തോഷവും നൽകും. കാരണം നിന്നെ പ്രകോപിപ്പിച്ച് ഒരു തർക്കത്തിലേക്ക് വലിച്ചിഴക്കുക എന്നത് മാത്രമാണ് അവന്റെ ലക്ഷ്യം.",
    answerEn: "If you reply to him, you relieve and satisfy him, because his main goal is to drag you into an argument and provoke you."
  },
  {
    id: 3,
    qAr: "استخرج من الأبيات كلمة تعني (الغيظ والحزن الشديد المكتوم).",
    qMl: "കവിതയിൽ നിന്ന് (ഉള്ളിലൊതുക്കിയ കടുത്ത ദേഷ്യവും സങ്കടവും) എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract a word from the poem that means (suppressed intense anger and grief).",
    type: "grammar",
    answerAr: "كَمَداً"
  },
  {
    id: 4,
    qAr: "لماذا يعتبر الشافعي السكوت أقوى من الرد في هذه الحالة؟",
    qMl: "ഇത്തരം സാഹചര്യങ്ങളിൽ മറുപടി പറയുന്നതിനേക്കാൾ ശക്തമായ ആയുധം നിശബ്ദതയാണെന്ന് ഇമാം ശാഫിഈ (റ) കരുതാൻ കാരണമെന്താണ്?",
    qEn: "Why does Al-Shafi'i consider silence stronger than a reply in this situation?",
    type: "descriptive",
    answerAr: "لأن السكوت يحرم السفيه من القيمة والاعتراف الذي يسعى إليه. عندما يتم تجاهله، يشعر بالنقص والغضب الداخلي، فيموت كمداً دون أن يبذل العاقل أي مجهود.",
    answerMl: "കാരണം, നിശബ്ദത പാലിക്കുന്നതിലൂടെ വിഡ്ഢി ആഗ്രഹിക്കുന്ന പരിഗണനയും വിലയും അവന് നിഷേധിക്കപ്പെടുന്നു. തന്നെ ആരും ഗൗനിക്കുന്നില്ല എന്ന് കാണുമ്പോൾ അവനുണ്ടാകുന്ന ദേഷ്യം അവനെ ഉള്ളുരുകി നശിക്കാൻ കാരണമാകും. അതിനാൽ നിശബ്ദതയാണ് ഏറ്റവും മികച്ച ആയുധം.",
    answerEn: "Because silence deprives the fool of the validation and attention he seeks. When ignored, he feels inadequate and internally enraged, dying of contained grief without the wise person making any effort."
  },
  {
    id: 5,
    qAr: "ما هو إعراب (السَّفِيهُ) في البيت الأول؟",
    qMl: "ഒന്നാമത്തെ വരിയിലെ (السَّفِيهُ) എന്ന പദത്തിന്റെ ഇഅ്റാബ് (വ്യാകരണ നിയമം) എന്താണ്?",
    qEn: "What is the I'rab (grammatical parsing) of (السَّفِيهُ) in the first line?",
    type: "grammar",
    answerAr: "فاعل مرفوع وعلامة رفعه الضمة الظاهرة على آخره."
  },
  {
    id: 6,
    qAr: "ما هو المحسن البديعي (الطباق) الموجود في البيت الأول والثاني؟",
    qMl: "ഒന്നാമത്തെയും രണ്ടാമത്തെയും വരികളിലുള്ള വിപരീത പദങ്ങൾ (Antithesis) ഏതെല്ലാം?",
    qEn: "What is the Antithesis (Tibaq) found in the first and second lines?",
    type: "grammar",
    answerAr: "الطباق بين (تُجِبْهُ/إِجَابَتِهِ) و (السُّكُوتُ)."
  }
];

import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "كم عدد شروط طلب العلم التي ذكرها الإمام الشافعي في الأبيات؟",
    qMl: "അറിവ് നേടുന്നതിന് എത്ര നിബന്ധനകളുണ്ടെന്നാണ് ഇമാം ശാഫിഈ തന്റെ കവിതയിൽ പറയുന്നത്?",
    qEn: "How many conditions for seeking knowledge did Imam Al-Shafi'i mention in the poem?",
    type: "mcq",
    options: ["ثلاثة شروط", "خمسة شروط", "ستة شروط", "سبعة شروط"],
    optionsEn: ["Three conditions", "Five conditions", "Six conditions", "Seven conditions"],
    correctOptionIndex: 2,
    answerAr: "ستة شروط",
    explanationAr: "ذكر الإمام الشافعي صراحة في البيت الأول: 'أخي لن تنال العلم إلا بستة'.",
    explanationMl: "ആദ്യ വരിയിൽ തന്നെ ഇമാം വ്യക്തമാക്കിയിട്ടുണ്ട്: 'എന്റെ സഹോദരാ, ആറ് കാര്യങ്ങൾ കൊണ്ടല്ലാതെ നിനക്ക് അറിവ് നേടാനാവില്ല.'",
    explanationEn: "Imam Al-Shafi'i explicitly states in the first line: 'Brother, you will not attain knowledge except through six things.'"
  },
  {
    id: 2,
    qAr: "ما معنى كلمة 'بُلْغَة' في سياق البيت الثاني؟",
    qMl: "രണ്ടാമത്തെ വരിയിലെ 'ബൽഗ' (بُلْغَة) എന്ന പദം കൊണ്ട് എന്താണ് ഉദ്ദേശിക്കുന്നത്?",
    qEn: "What is the meaning of the word 'Bulghah' in the context of the second line?",
    type: "mcq",
    options: ["البلاغة والفصاحة في الكلام", "الوصول إلى مكان بعيد", "ما يكفي من المال للعيش وعدم الانشغال", "الصوت العالي"],
    optionsEn: ["Eloquence and rhetoric in speech", "Reaching a distant place", "Enough wealth to live on without distraction", "A loud voice"],
    correctOptionIndex: 2,
    answerAr: "ما يكفي من المال للعيش وعدم الانشغال",
    explanationAr: "البلغة هي الكفاية من العيش، أي ما يبلغ به طالب العلم حاجته من الطعام والشراب والمسكن حتى يتفرغ لطلب العلم ولا ينشغل بالعمل ليل نهار.",
    explanationMl: "ബൽഗ എന്നാൽ ജീവിക്കാൻ ആവശ്യമായ വക എന്നാണ് അർത്ഥം. ഭക്ഷണം, താമസം എന്നിവയ്ക്ക് ബുദ്ധിമുട്ടില്ലാതിരുന്നാലേ പഠനത്തിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ കഴിയൂ.",
    explanationEn: "Bulghah refers to sufficiency in sustenance. A student of knowledge needs enough basic provision to survive so they are not entirely distracted by working day and night."
  }
];

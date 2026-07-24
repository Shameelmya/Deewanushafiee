import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "على من يتوكل الإمام الشافعي في رزقه؟",
    qMl: "ഉപജീവനത്തിന്റെ കാര്യത്തിൽ ഇമാം ശാഫിഈ (റ) ആരെയാണ് ഭരമേൽപ്പിക്കുന്നത്?",
    qEn: "Upon whom does Imam Al-Shafi'i trust for his sustenance?",
    type: "mcq",
    options: ["على عمله واجتهاده", "على الله خالقه", "على أصدقائه ومعارفه", "على ملوك زمانه"],
    optionsEn: ["On his work and effort", "On Allah, his Creator", "On his friends and acquaintances", "On the kings of his time"],
    correctOptionIndex: 1,
    answerAr: "على الله خالقه (تَوَكَّلْتُ فِي رِزْقِي عَلَى اللَّهِ خَالِقِي).",
    explanationAr: "لأن من خلق الإنسان هو الأقدر والأحق بالتكفل برزقه وحياته."
  },
  {
    id: 2,
    qAr: "كيف عبر الشاعر عن ثقته المطلقة في وصول رزقه إليه؟",
    qMl: "തനിക്കുള്ള ഉപജീവനം തനിക്ക് തന്നെ ലഭിക്കും എന്ന സമ്പൂർണ്ണ വിശ്വാസത്തെ കവി എങ്ങനെയാണ് വരച്ചുകാട്ടുന്നത്?",
    qEn: "How did the poet express his absolute certainty that his sustenance will reach him?",
    type: "descriptive",
    answerAr: "عبر عن ذلك بقوله (وَمَا يَكُ مِنْ رِزْقِي فَلَيْسَ يَفُوتُنِي)، مؤكداً أن ما كتبه الله له لن يأخذه غيره ولن يضيع منه، حتى لو كان في أعماق البحار.",
    answerMl: "(എനിക്ക് നിശ്ചയിക്കപ്പെട്ട ഭക്ഷണം ഒരിക്കലും എനിക്ക് നഷ്ടപ്പെടുകയില്ല) എന്ന് പറഞ്ഞുകൊണ്ടാണ് കവി അത് വരച്ചുകാട്ടുന്നത്. ആ ഭക്ഷണം സമുദ്രത്തിന്റെ അടിത്തട്ടിലാണെങ്കിൽ പോലും അത് തന്നെ തേടിയെത്തും എന്ന വലിയ വിശ്വാസമാണ് ഇവിടെ കാണുന്നത്.",
    answerEn: "He expressed it by saying (Whatever is destined as my sustenance will never miss me), affirming that what Allah has written for him will not be taken by anyone else and will never be lost, even if it were at the bottom of the oceans."
  },
  {
    id: 3,
    qAr: "استخرج من الأبيات كلمة تعني (تأكدت إيماناً لا يخالطه شك).",
    qMl: "കവിതയിൽ നിന്ന് (യാതൊരു സംശയവുമില്ലാതെ ഉറപ്പിച്ചു വിശ്വസിച്ചു) എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract a word from the poem that means (I became absolutely certain with a faith unmixed with doubt).",
    type: "grammar",
    answerAr: "أَيْقَنْتُ"
  },
  {
    id: 4,
    qAr: "ما هو الرابط المنطقي بين صفتي (الخالق) و (الرازق) في الأبيات؟",
    qMl: "(സൃഷ്ടാവ്), (ഉപജീവനം നൽകുന്നവൻ) എന്നീ രണ്ട് ഗുണങ്ങൾക്കിടയിലുള്ള യുക്തിസഹജമായ ബന്ധം എന്താണ്?",
    qEn: "What is the logical connection between the attributes (The Creator) and (The Provider) in the verses?",
    type: "descriptive",
    answerAr: "الرابط هو طمأنة النفس البشرية؛ فالإله الذي امتلك القدرة العظيمة على خلقك من العدم وتصويرك، من المستحيل أن يعجز عن توفير طعامك ورزقك. الخلق يستوجب التكفل بالرزق.",
    answerMl: "മനുഷ്യന്റെ മനസ്സിന് സമാധാനം നൽകുക എന്നതാണ് അവ തമ്മിലുള്ള ബന്ധം. ഒരു മനുഷ്യനെ ഇല്ലാപ്പായ്മയിൽ നിന്ന് സൃഷ്ടിക്കാൻ കഴിവുള്ള നാഥന്, അവൻ ജീവിക്കാൻ ആവശ്യമായ ഭക്ഷണം നൽകാൻ യാതൊരു പ്രയാസവുമുണ്ടാകില്ല. അതിനാൽ സൃഷ്ടിച്ചവൻ തന്നെയാണ് ഉപജീവനം നൽകുന്നവനും.",
    answerEn: "The connection is to reassure the human soul; the God who possessed the immense power to create you from nothingness cannot possibly fail to provide your food and sustenance. Creation necessitates the guarantee of provision."
  },
  {
    id: 5,
    qAr: "ما هو إعراب (رَازِقِي) في البيت الثاني؟",
    qMl: "രണ്ടാമത്തെ വരിയിലെ (رَازِقِي) എന്ന പദത്തിന്റെ ഇഅ്റാബ് (വ്യാകരണ നിയമം) എന്താണ്?",
    qEn: "What is the I'rab (grammatical parsing) of (رَازِقِي) in the second line?",
    type: "grammar",
    answerAr: "خبر (أنَّ) مرفوع وعلامة رفعه الضمة المقدرة منع من ظهورها اشتغال المحل بحركة المناسبة لياء المتكلم، والياء مضاف إليه."
  },
  {
    id: 6,
    qAr: "ماذا يقصد الشاعر بعبارة (فِي قَاعِ البِحَارِ العَوَامِقِ)؟",
    qMl: "(ആഴമേറിയ സമുദ്രങ്ങളുടെ അടിത്തട്ടിൽ) എന്ന് പറയുന്നതിലൂടെ കവി ഉദ്ദേശിക്കുന്നതെന്താണ്?",
    qEn: "What does the poet mean by the phrase (at the bottom of the deepest oceans)?",
    type: "descriptive",
    answerAr: "استخدم الشاعر هذا التعبير للمبالغة في بيان قدرة الله. يعني أنه مهما كان الرزق بعيداً جداً، أو محجوباً في مكان لا يمكن للبشر الوصول إليه، فإن قدرة الله ستأتيك به ولن تمنعه أي عوائق طبيعية.",
    answerMl: "അല്ലാഹുവിന്റെ കഴിവിനെ എത്രത്തോളമുണ്ടെന്ന് വ്യക്തമാക്കാനാണ് കവി ഈ പ്രയോഗം ഉപയോഗിച്ചത്. മനുഷ്യർക്ക് എത്തിപ്പെടാൻ കഴിയാത്തത്ര ദൂരത്താണെങ്കിലും, ഇനി ആർക്കും കണ്ടുപിടിക്കാൻ കഴിയാത്തത്ര ഇരുട്ടിലാണെങ്കിലും, നിനക്കുള്ള ഭക്ഷണം അല്ലാഹു നിനക്കെത്തിച്ചു തന്നിരിക്കും എന്നാണ് ഇതിലൂടെ അർത്ഥമാക്കുന്നത്.",
    answerEn: "The poet uses this expression to exaggerate and demonstrate Allah's absolute power. It means that no matter how distant the sustenance is, or if it is hidden in a place completely inaccessible to humans, Allah's power will bring it to you, and no natural barriers can prevent it."
  }
];

import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "إلى من يوجه الإمام الشافعي نصيحته في البيت الأول؟",
    qMl: "ഒന്നാമത്തെ വരിയിൽ ഇമാം ശാഫിഈ(റ) ആരോടാണ് സംസാരിക്കുന്നത്?",
    qEn: "To whom is Imam Al-Shafi'i directing his advice in the first line?",
    type: "mcq",
    options: ["إلى الفقراء", "إلى ذوي العقل والأدب", "إلى الملوك والأمراء", "إلى المسافرين فقط"],
    optionsEn: ["To the poor", "To people of intellect and manners", "To kings and princes", "To travelers only"],
    correctOptionIndex: 1,
    answerAr: "إلى ذوي العقل والأدب (لِذِي عَقْلٍ وَذِي أَدَبِ).",
    explanationAr: "لأن أصحاب العقول هم من يدركون قيمة السفر واكتساب الخبرات."
  },
  {
    id: 2,
    qAr: "كيف أثبت الشاعر أن التعب والمشقة أمر إيجابي في الحياة؟",
    qMl: "ജീവിതത്തിൽ കഷ്ടപ്പാടുകൾ പോസിറ്റീവായ ഒരു കാര്യമാണെന്ന് കവി എങ്ങനെയാണ് സ്ഥാപിക്കുന്നത്?",
    qEn: "How did the poet prove that toil and hardship are positive things in life?",
    type: "descriptive",
    answerAr: "أثبت ذلك بقوله (فإن لذيذ العيش في النصب)، أي أن الإنسان لا يدرك طعم الراحة الحقيقية ولا يستمتع بالنجاح إلا بعد أن يتعب ويكدح في سبيل تحقيقه.",
    answerMl: "(ജീവിതത്തിന്റെ യഥാർത്ഥ മാധുര്യം കഷ്ടപ്പാടുകളിലാണുള്ളത്) എന്ന് പറഞ്ഞുകൊണ്ടാണ് കവി ഇത് സ്ഥാപിക്കുന്നത്. കാരണം, കഷ്ടപ്പെട്ട് നേടുന്ന വിജയത്തിന് മാത്രമേ യഥാർത്ഥ സന്തോഷം നൽകാൻ കഴിയുകയുള്ളൂ.",
    answerEn: "He proved it by saying (For the sweetness of life is in toil). This means a person cannot truly taste the joy of rest or enjoy success unless they have worked hard and struggled to achieve it."
  },
  {
    id: 3,
    qAr: "اذكر ثلاثة أمثلة من الطبيعة استخدمها الشاعر لتشجيع الناس على السفر.",
    qMl: "യാത്ര ചെയ്യാൻ ജനങ്ങളെ പ്രേരിപ്പിക്കുന്നതിന് കവി പ്രകൃതിയിൽ നിന്ന് ഉപയോഗിച്ച മൂന്ന് ഉദാഹരണങ്ങൾ ഏതെല്ലാം?",
    qEn: "Mention three examples from nature used by the poet to encourage people to travel.",
    type: "descriptive",
    answerAr: "1. الماء الراكد يفسد، بينما الماء الجاري يطيب. 2. الأسد لا يفترس إذا لم يفارق مكانه. 3. الشمس لو وقفت دائمًا لملّها الناس.",
    answerMl: "1. കെട്ടിക്കിടക്കുന്ന വെള്ളം അഴുകും, ഒഴുകുന്ന വെള്ളം ശുദ്ധമാകും. 2. മടവിട്ടിറങ്ങാത്ത സിംഹത്തിന് ഇരയെ പിടിക്കാൻ കഴിയില്ല. 3. ഒരേ സ്ഥലത്ത് നിൽക്കുന്ന സൂര്യനെ മനുഷ്യർക്ക് മടുക്കും.",
    answerEn: "1. Stagnant water corrupts, while flowing water purifies. 2. A lion cannot hunt if it does not leave its den. 3. If the sun stood still, people would grow bored of it."
  },
  {
    id: 4,
    qAr: "استخرج من الأبيات كلمة تعني (الذهب الخام أو غير المصنع).",
    qMl: "കവിതയിൽ നിന്ന് (ശുദ്ധീകരിക്കാത്ത സ്വർണ്ണത്തരികൾ) എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract a word from the poem that means (raw or unrefined gold).",
    type: "grammar",
    answerAr: "التِّبْرُ"
  },
  {
    id: 5,
    qAr: "ما هو المحسن البديعي بين كلمتي (سَاحَ) و (وَقَفَ/رَكَدَ) وإن كانت الثانية متضمنة في (لم يجر)؟",
    qMl: "വരികളിലെ (സഞ്ചരിച്ചു/ഒഴുകി) എന്ന ആശയവും (കെട്ടിക്കിടന്നു) എന്ന ആശയവും തമ്മിലുള്ള വ്യത്യാസമെന്ത്?",
    qEn: "What is the rhetorical device connecting the concept of (flowing) and (stagnating)?",
    type: "grammar",
    answerAr: "الطباق (التضاد في المعنى)."
  },
  {
    id: 6,
    qAr: "أعرب كلمة (عِوَضاً) في البيت الثالث.",
    qMl: "മൂന്നാമത്തെ വരിയിലെ (عِوَضاً) എന്ന പദത്തിന്റെ ഇഅ്റാബ് (വ്യാകരണ നിയമം) എന്താണ്?",
    qEn: "What is the I'rab (grammatical parsing) of the word (عِوَضاً) in the third line?",
    type: "grammar",
    answerAr: "مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره."
  },
  {
    id: 7,
    qAr: "ما الذي يحدث للعود (البخور) إذا لم يغادر وطنه الأصلية حسب البيت الأخير؟",
    qMl: "അവസാന വരികൾ അനുസരിച്ച്, ഊദ് (സുഗന്ധ മരം) സ്വന്തം നാടുവിട്ടു പോയില്ലെങ്കിൽ എന്ത് സംഭവിക്കും?",
    qEn: "What happens to the Oud (incense wood) if it does not leave its homeland, according to the last verse?",
    type: "mcq",
    options: ["يصبح غالي الثمن", "يعامل كأنه حطب عادي للتدفئة", "يفوح عطره بقوة", "يحصل عليه الملوك فقط"],
    optionsEn: ["It becomes very expensive", "It is treated like ordinary firewood", "Its scent becomes stronger", "Only kings get it"],
    correctOptionIndex: 1,
    answerAr: "يعامل كأنه نوع من الحطب العادي.",
    explanationAr: "قال الشاعر: (والعود في أرضه نوع من الحطب)، ولا ترتفع قيمته إلا إذا تغرّب."
  }
];

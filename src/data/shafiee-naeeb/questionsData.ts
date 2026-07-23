import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "ما هو السبب الحقيقي للفساد الذي ذكره الشاعر في البيت الأول؟",
    qMl: "ഒന്നാമത്തെ വരിയിൽ കവി പറയുന്നതനുസരിച്ച് കുഴപ്പങ്ങൾക്കുള്ള യഥാർത്ഥ കാരണം എന്താണ്?",
    qEn: "What is the true cause of corruption mentioned by the poet in the first line?",
    type: "mcq",
    options: ["فساد الزمان", "تغير الأيام", "فساد نفوسنا نحن", "أفعال الأعداء"],
    optionsEn: ["Corruption of time", "Changing of days", "Corruption of our own souls", "Actions of enemies"],
    correctOptionIndex: 2,
    answerAr: "فساد نفوسنا نحن (والعيب فينا)",
    explanationAr: "يؤكد الشاعر أن الزمان لا عيب فيه، بل العيب في أخلاقنا وأفعالنا."
  },
  {
    id: 2,
    qAr: "بماذا شبّه الشاعر قسوة البشر وظلمهم لبعضهم في البيت الأخير؟",
    qMl: "അവസാന വരിയിൽ മനുഷ്യന്റെ ക്രൂരതയെ കവി എന്തിനോടാണ് ഉപമിച്ചിരിക്കുന്നത്?",
    qEn: "What did the poet compare the cruelty of humans towards each other to in the last line?",
    type: "descriptive",
    answerAr: "شبه الإمام الشافعي قسوة البشر بوحشية الذئاب، بل وجعل البشر أسوأ منها. فالذئب المفترس لا يأكل لحم ذئب آخر، بينما البشر يعتدون على بعضهم البعض ويأكلون لحوم بعضهم بالغيبة والظلم علانية.",
    answerMl: "മനുഷ്യന്റെ ക്രൂരതയെ കവി ചെന്നായ്ക്കളോടാണ് ഉപമിച്ചത്. ചെന്നായ മറ്റൊരു ചെന്നായെ തിന്നാറില്ല. എന്നാൽ മനുഷ്യർ പരദൂഷണത്തിലൂടെയും അനീതിയിലൂടെയും പരസ്യമായിത്തന്നെ പരസ്പരം കടിച്ചു കീറുകയും തിന്നുകയും ചെയ്യുന്നു. ഇത് മനുഷ്യർ മൃഗങ്ങളേക്കാൾ തരംതാഴ്ന്നു എന്ന് കാണിക്കുന്നു.",
    answerEn: "Imam Al-Shafi'i compared human cruelty to the savagery of wolves, making humans seem even worse. A predatory wolf does not eat the flesh of another wolf, while humans openly attack and 'eat' each other through backbiting and injustice."
  },
  {
    id: 3,
    qAr: "لو نطق الزمان، ماذا سيفعل بنا حسب رأي الشاعر؟",
    qMl: "കാലത്തിന് സംസാരിക്കാൻ കഴിഞ്ഞിരുന്നെങ്കിൽ അത് നമ്മളോട് എന്ത് ചെയ്യുമെന്നാണ് കവി പറയുന്നത്?",
    qEn: "If time could speak, what would it do to us according to the poet?",
    type: "mcq",
    options: ["سيمدحنا", "سيبكي علينا", "سيهجونا ويشتمنا", "سيسامحنا"],
    optionsEn: ["It would praise us", "It would cry for us", "It would satirize and insult us", "It would forgive us"],
    correctOptionIndex: 2,
    answerAr: "سيهجونا ويشتمنا (هجانا)",
    explanationAr: "لأننا نظلمه وننسب إليه أخطاءنا، فلو تكلم لفضح عيوبنا ووبخنا."
  },
  {
    id: 4,
    qAr: "استخرج من الأبيات كلمة تعني (جهاراً / علانية).",
    qMl: "കവിതയിൽ നിന്ന് (പരസ്യമായി / പ്രത്യക്ഷമായി) എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract a word from the poem that means (openly / visibly).",
    type: "grammar",
    answerAr: "عَيَانَا"
  },
  {
    id: 5,
    qAr: "ما هو المحسن البديعي بين (نَعِيبُ) و (نَمْدَحُ) وإن كانت الثانية غير مذكورة نصاً؟",
    qMl: "പദങ്ങൾ തമ്മിലുള്ള അർത്ഥവ്യത്യാസം: (نَعِيبُ) എന്നതിന്റെ വിപരീത പദമെന്ത്?",
    qEn: "What is the antonym of (نَعِيبُ)?",
    type: "grammar",
    answerAr: "الطباق (عكس الكلمة هو نمدح أو نثني)."
  },
  {
    id: 6,
    qAr: "أعرب كلمة (ذِئْبٍ) في عبارة (لَحْمَ ذِئْبٍ).",
    qMl: "(لَحْمَ ذِئْبٍ) എന്നതിലെ (ذِئْبٍ) എന്ന പദത്തിന്റെ വ്യാകരണ നിയമം (ഇഅ്റാബ്) എന്ത്?",
    qEn: "What is the grammatical parsing (I'rab) of the word (ذِئْبٍ) in the phrase (لَحْمَ ذِئْبٍ)?",
    type: "grammar",
    answerAr: "مضاف إليه مجرور وعلامة جره الكسرة الظاهرة تحت آخره."
  },
  {
    id: 7,
    qAr: "ما هو الدرس الأخلاقي الرئيسي المستفاد من هذه الأبيات؟",
    qMl: "ഈ വരികളിൽ നിന്ന് പഠിക്കാനുള്ള പ്രധാന ഗുണപാഠം എന്താണ്?",
    qEn: "What is the main moral lesson learned from these verses?",
    type: "descriptive",
    answerAr: "الدرس هو تحمل المسؤولية الشخصية عن أفعالنا وتصرفاتنا بدلاً من لوم الظروف والزمان. يجب على الإنسان أن يطهر قلبه من الغيبة والظلم وأن يعامل أخاه الإنسان باحترام وكرامة تفوق حتى غريزة الحيوانات.",
    answerMl: "നമ്മുടെ തെറ്റുകൾക്കും വീഴ്ചകൾക്കും കാലത്തെയോ സാഹചര്യങ്ങളെയോ പഴിചാരുന്നതിന് പകരം നാം സ്വയം ഉത്തരവാദിത്തം ഏറ്റെടുക്കണം എന്നതാണ് പ്രധാന പാഠം. പരദൂഷണം, അനീതി എന്നിവയിൽ നിന്ന് മനസ്സിനെ ശുദ്ധീകരിക്കുകയും മൃഗങ്ങളേക്കാൾ ഉയർന്ന ധാർമ്മികതയോടെ സഹജീവികളോട് ഇടപെടുകയും ചെയ്യണം.",
    answerEn: "The lesson is to take personal responsibility for our actions instead of blaming circumstances and time. A person must purify their heart from backbiting and injustice, and treat their fellow human beings with respect and dignity that surpasses even animal instincts."
  }
];

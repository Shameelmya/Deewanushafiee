import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  {
    id: 1,
    qAr: "إلى من شكى الإمام الشافعي سوء حفظه؟",
    qMl: "ഇമാം ശാഫിഈ(റ) ആരോടാണ് തന്റെ ഓർമ്മക്കുറവിനെക്കുറിച്ച് പരാതിപ്പെട്ടത്?",
    qEn: "To whom did Imam Al-Shafi'i complain about his poor memory?",
    type: "mcq",
    options: ["إلى مالك بن أنس", "إلى وكيع بن الجراح", "إلى أحمد بن حنبل", "إلى الشيباني"],
    optionsEn: ["To Malik ibn Anas", "To Waki ibn al-Jarrah", "To Ahmad ibn Hanbal", "To Al-Shaybani"],
    correctOptionIndex: 1,
    answerAr: "إلى شيخه وكيع بن الجراح",
    explanationAr: "ذكر الإمام الشافعي اسم شيخه صراحة في الشطر الأول (شكوت إلى وكيع)."
  },
  {
    id: 2,
    qAr: "بماذا أرشد وكيع طالبه الشافعي لعلاج سوء الحفظ؟",
    qMl: "ഓർമ്മക്കുറവ് പരിഹരിക്കാൻ വകീഅ്(റ) തന്റെ ശിഷ്യനായ ശാഫിഈ(റ)ക്ക് നൽകിയ ഉപദേശം എന്തായിരുന്നു?",
    qEn: "What did Waki advise his student Al-Shafi'i to do to cure his poor memory?",
    type: "mcq",
    options: ["بكثرة القراءة والمراجعة", "بالنوم المبكر", "بترك المعاصي والذنوب", "بكتابة الدروس عدة مرات"],
    optionsEn: ["By reading and reviewing a lot", "By sleeping early", "By abandoning sins and wrongdoings", "By writing lessons multiple times"],
    correctOptionIndex: 2,
    answerAr: "أرشده إلى ترك المعاصي والذنوب.",
    explanationAr: "لأن المعاصي تظلم القلب وتضعف الذاكرة وتحجب النور الإلهي."
  },
  {
    id: 3,
    qAr: "استخرج من الأبيات كلمة تعني (الذنوب والآثام).",
    qMl: "കവിതയിൽ നിന്ന് 'പാപങ്ങൾ/തെറ്റുകൾ' എന്ന് അർത്ഥം വരുന്ന പദം കണ്ടെത്തുക.",
    qEn: "Extract a word from the poem that means 'sins and wrongdoings'.",
    type: "grammar",
    answerAr: "المَعَاصِي"
  },
  {
    id: 4,
    qAr: "كيف عرّف الإمام الشافعي (العِلْمَ) في هذه الأبيات؟ ولماذا؟",
    qMl: "ഇമാം ശാഫിഈ (റ) ഈ വരികളിൽ 'അറിവിനെ' (العِلْم) എങ്ങനെയാണ് നിർവ്വചിച്ചിരിക്കുന്നത്? എന്തുകൊണ്ട്?",
    qEn: "How did Imam Al-Shafi'i define 'Knowledge' (Al-'Ilm) in these lines? And why?",
    type: "descriptive",
    answerAr: "عرّف الشافعي العلم بأنه (نُورٌ) يقذفه الله في القلب. وذلك لأن العلم الحقيقي ليس مجرد استظهار للمعلومات، بل هو نور يضيء بصيرة الإنسان ويهديه للحق، وهذا النور لا يجتمع مع ظلمة المعاصي.",
    answerMl: "അറിവ് എന്നത് 'അല്ലാഹുവിന്റെ പ്രകാശം' (നൂർ) ആണെന്നാണ് ഇമാം നിർവ്വചിച്ചത്. കാരണം, യഥാർത്ഥ അറിവ് തലച്ചോറിലുള്ള കേവലം വിവരങ്ങളല്ല, മറിച്ച് മനുഷ്യന്റെ ചിന്തകളെയും കാഴ്ചപ്പാടിനെയും പ്രകാശിപ്പിക്കുന്ന ദിവ്യമായ ഒരു വെളിച്ചമാണ്. പാപങ്ങൾ നിറഞ്ഞ ഹൃദയത്തിൽ ഈ വെളിച്ചത്തിന് നിൽക്കാൻ കഴിയില്ല.",
    answerEn: "Al-Shafi'i defined knowledge as a 'Light' (Noor) bestowed by Allah into the heart. This is because true knowledge is not just memorized data; it is a light that illuminates one's insight and guides to the truth, and this light cannot coexist with the darkness of sins."
  },
  {
    id: 5,
    qAr: "ما هو المحسن البديعي بين (نُورٌ) و (لِعَاصِي) في المعنى المبطن؟",
    qMl: "വരികളിലെ (نُورٌ - പ്രകാശം), (عَاصِي - പാപി) എന്നീ പദങ്ങൾക്കിടയിലുള്ള പരോക്ഷമായ ആശയ വൈരുദ്ധ്യം വ്യക്തമാക്കുക.",
    qEn: "What is the implied rhetorical contrast between (نُورٌ - light) and (لِعَاصِي - sinner)?",
    type: "grammar",
    answerAr: "المعصية تمثل (الظلام) في القلب، بينما العلم يمثل (النور). ولا يمكن للظلام والنور أن يجتمعا في مكان واحد، وهذا تضاد معنوي (طباق مبطن) يبرز أهمية الطهارة الروحية لتلقي العلم."
  },
  {
    id: 6,
    qAr: "أعرب كلمة (نُورٌ) في الجملة (بِأَنَّ العِلْمَ نُورٌ).",
    qMl: "(بِأَنَّ العِلْمَ نُورٌ) എന്ന വാക്യത്തിലെ (نُورٌ) എന്ന പദത്തിന്റെ വ്യാകരണ നിയമം (ഇഅ്റാബ്) എന്ത്?",
    qEn: "What is the grammatical parsing (I'rab) of the word (نُورٌ) in the sentence (بِأَنَّ العِلْمَ نُورٌ)?",
    type: "grammar",
    answerAr: "خبر (أنّ) مرفوع وعلامة رفعه الضمة الظاهرة على آخره."
  }
];

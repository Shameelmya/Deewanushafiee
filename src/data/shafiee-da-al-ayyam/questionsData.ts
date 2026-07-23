import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  // SECTION 1: MCQs
  {
    id: 1,
    qAr: "ماذا تعني كلمة \"الجزع\" في القصيدة؟",
    qMl: "കവിതയിലെ \"അൽ-ജസഅ്\" (الجزع) എന്ന വാക്കിന്റെ അർത്ഥമെന്ത്?",
    qEn: "What does the word \"Al-Jaza'\" mean in the poem?",
    type: "mcq",
    options: [
      "الشجاعة",
      "الخوف وفقدان الصبر",
      "الفرح"
    ],
    correctOptionIndex: 1,
    answerAr: "الخوف وفقدان الصبر"
  },
  {
    id: 2,
    qAr: "حسب القصيدة، ما هو الشيء الذي يغطي عيوب الإنسان؟",
    qMl: "കവിതയുടെ അടിസ്ഥാനത്തിൽ, മനുഷ്യന്റെ പോരായ്മകളെ മറച്ചുവെക്കുന്ന ഗുണം ഏതാണ്?",
    qEn: "According to the poem, what covers a person's faults?",
    type: "mcq",
    options: [
      "السخاء",
      "المال",
      "الجمال"
    ],
    correctOptionIndex: 0,
    answerAr: "السخاء"
  },
  {
    id: 3,
    qAr: "ما هو المعنى الصحيح لكلمة \"البرايا\"؟",
    qMl: "\"അൽ-ബറായ\" (البرايا) എന്ന വാക്കിന്റെ ശരിയായ അർത്ഥം എന്ത്?",
    qEn: "What is the correct meaning of the word \"Al-Baraya\"?",
    type: "mcq",
    options: [
      "الأيام",
      "الناس والخلق",
      "الأعداء"
    ],
    correctOptionIndex: 1,
    answerAr: "الناس والخلق"
  },
  {
    id: 4,
    qAr: "من هو الشخص الذي يطلب منا الشاعر ألا ننتظر منه السماحة؟",
    qMl: "ആരോടാണ് നാം ഔദാര്യം (സഹായം) പ്രതീക്ഷിക്കരുത് എന്ന് കവി പറയുന്നത്?",
    qEn: "Who is the person the poet tells us not to expect generosity from?",
    type: "mcq",
    options: [
      "الصديق",
      "البخيل",
      "الفقير"
    ],
    correctOptionIndex: 1,
    answerAr: "البخيل"
  },
  {
    id: 5,
    qAr: "لماذا يحذر الشاعر من إظهار الضعف أمام الأعداء؟",
    qMl: "ശത്രുക്കൾക്ക് മുന്നിൽ ദൗർബല്യം കാണിക്കരുത് എന്ന് കവി മുന്നറിയിപ്പ് നൽകാൻ കാരണമെന്ത്?",
    qEn: "Why does the poet warn against showing weakness to enemies?",
    type: "mcq",
    options: [
      "لأن شماتتهم مصيبة",
      "لأنهم أقوياء",
      "لأنهم سيهاجمون"
    ],
    correctOptionIndex: 0,
    answerAr: "لأن شماتتهم مصيبة"
  },
  {
    id: 6,
    qAr: "ماذا تعني كلمة \"المنايا\" في البيت: \"ومن نزلت بساحته المنايا\"؟",
    qMl: "കവിതയിലെ \"അൽ-മനായാ\" (المنايا) എന്ന വാക്കിന്റെ അർത്ഥമെന്ത്?",
    qEn: "What does the word \"Al-Manaya\" mean in the poem?",
    type: "mcq",
    options: [
      "الموت",
      "الحياة",
      "الأموال"
    ],
    correctOptionIndex: 0,
    answerAr: "الموت"
  },
  {
    id: 7,
    qAr: "ماذا يقول الشاعر عن الحزن والسرور في هذه الدنيا؟",
    qMl: "ഈ ലോകത്തെ ദുഃഖത്തെയും സന്തോഷത്തെയും കുറിച്ച് കവി എന്താണ് പറയുന്നത്?",
    qEn: "What does the poet say about sorrow and joy in this world?",
    type: "mcq",
    options: [
      "الحزن يدوم دائماً",
      "لا حزن يدوم ولا سرور",
      "السرور يدوم دائماً"
    ],
    correctOptionIndex: 1,
    answerAr: "لا حزن يدوم ولا سرور"
  },
  {
    id: 8,
    qAr: "ما هي العلاقة البلاغية بين كلمتي \"واسعة\" و \"ضاق\"؟",
    qMl: "\"വിശാലമായത്\" (واسعة), \"ഇടുങ്ങിയത്\" (ضاق) എന്നീ വാക്കുകൾ തമ്മിലുള്ള സാഹിത്യപരമായ ബന്ധം എന്ത്?",
    qEn: "What is the rhetorical relationship between the words \"Wasi'ah\" (vast) and \"Daqa\" (narrow)?",
    type: "mcq",
    options: [
      "ترادف",
      "طباق",
      "جناس"
    ],
    correctOptionIndex: 1,
    answerAr: "طباق"
  },
  {
    id: 9,
    qAr: "من هو الشخص الذي يتساوى مع \"مالك الدنيا\" (الملك)؟",
    qMl: "\"ലോകത്തിന്റെ ഉടമസ്ഥനുമായി\" (രാജാവുമായി) തുല്യനാകുന്ന വ്യക്തി ആര്?",
    qEn: "Who is the person that is equal to the \"owner of the world\" (the king)?",
    type: "mcq",
    options: [
      "الشخص الذي يملك مالاً كثيراً",
      "الشخص الذي عنده قلب قنوع",
      "الشخص القوي"
    ],
    correctOptionIndex: 1,
    answerAr: "الشخص الذي عنده قلب قنوع"
  },
  {
    id: 10,
    qAr: "ما المقصود بكلمة \"الدواء\" في البيت الأخير؟",
    qMl: "അവസാന വരിയിലെ \"അദ്ദവാഅ്\" (الدواء) എന്ന വാക്ക് കൊണ്ട് ഉദ്ദേശിക്കുന്നത് എന്ത്?",
    qEn: "What is meant by the word \"Al-Dawa'\" in the last line?",
    type: "mcq",
    options: [
      "العلاج الطبي",
      "الطعام",
      "الأصدقاء"
    ],
    correctOptionIndex: 0,
    answerAr: "العلاج الطبي"
  },

  // SECTION 2: Grammar & Rhetoric Questions
  {
    id: 11,
    qAr: "ما هو الإعراب الصحيح لكلمة \"رَجُلاً\" في جملة \"وَكُنْ رَجُلاً\"؟",
    qMl: "\"وَكُنْ رَجُلاً\" എന്ന വാചകത്തിൽ \"رَجُلاً\" എന്ന പദത്തിന്റെ വ്യാകരണ നിയമം (I'rab) എന്ത്?",
    qEn: "What is the correct parsing (I'rab) of the word \"Rajulan\" in \"Wa kun Rajulan\"?",
    type: "grammar",
    answerAr: "خبر \"كان\" منصوب وعلامة نصبه الفتحة الظاهرة على آخره.",
    answerMl: "ഇത് 'കാന' (كان) എന്ന ക്രിയയുടെ 'ഖബർ' (خبر) ആണ്. അതുകൊണ്ട് ഇതിന് ഫത്ഹ് (നസ്ബ്) നൽകിയിരിക്കുന്നു.",
    answerEn: "It is the predicate (Khabar) of the verb \"Kana\" (to be), so it takes the accusative case (Fatha)."
  },
  {
    id: 12,
    qAr: "ما هي فائدة استخدام كلمة \"قَطُّ\" في اللغة العربية؟",
    qMl: "അറബി ഭാഷയിൽ \"قَطُّ\" (ഖത്വ്) എന്ന വാക്ക് ഉപയോഗിക്കുന്നതിന്റെ വ്യാകരണപരമായ പ്രയോജനം എന്ത്?",
    qEn: "What is the grammatical purpose of using the word \"Qattu\" in Arabic?",
    type: "grammar",
    answerAr: "كلمة \"قط\" هي ظرف زمان تستخدم للنفي المطلق، بمعنى \"أبداً\"، وتؤكد على عدم فعل الشيء نهائياً.",
    answerMl: "ഒരു കാര്യത്തെ പൂർണ്ണമായി, ഒരിക്കലും പാടില്ല എന്ന് നിഷേധിക്കാൻ (Absolute negation) ഉപയോഗിക്കുന്ന സമയസൂചകമായ പദമാണിത്.",
    answerEn: "It is an adverb of time used for absolute and categorical negation, meaning \"never\" or \"ever\", emphasizing that an action should not happen under any circumstance."
  },
  {
    id: 13,
    qAr: "ما هو الأسلوب البلاغي في قوله: \"دَعِ الأَيَّامَ تَفْعَل مَا تَشَاءُ\"؟",
    qMl: "\"കാലം അതിനിഷ്ടമുള്ളത് ചെയ്യട്ടെ\" എന്ന് പറയുന്നതിലെ സാഹിത്യ പ്രയോഗം (Rhetoric) ഏതാണ്?",
    qEn: "What is the rhetorical device in the phrase: \"Let the days do as they please\"?",
    type: "grammar",
    answerAr: "الأسلوب هو \"التشخيص\" (الاستعارة المكنية)، حيث أعطى الشاعر صفة الإنسان العاقل للأيام.",
    answerMl: "ഇതിനെ 'വ്യക്തിവൽക്കരണം' (Personification) അഥവാ ഇസ്തിആറ മക്നിയ്യ എന്ന് വിളിക്കുന്നു. കാലത്തിന് ഒരു മനുഷ്യനെപ്പോലെ സ്വതന്ത്രമായി പ്രവർത്തിക്കാനുള്ള കഴിവ് നൽകിയതിനാലാണിത്.",
    answerEn: "The device is \"Personification\" (Metaphor). The poet gives the abstract concept of \"days\" the human ability to act freely."
  },
  {
    id: 14,
    qAr: "ما هو إعراب كلمة \"الدَّوَاءُ\" في جملة \"فَمَا يُغْنِي عَنِ المَوْتِ الدَّوَاءُ\"؟",
    qMl: "\"فَمَا يُغْنِي عَنِ المَوْتِ الدَّوَاءُ\" എന്ന വാചകത്തിലെ \"الدَّوَاءُ\" എന്ന പദത്തിന്റെ ഇഅ്റാബ് (വ്യാകരണ സ്ഥാനം) എന്ത്?",
    qEn: "What is the I'rab of the word \"Al-Dawa'u\" in \"Fama yughni 'ani al-mawti al-dawa'u\"?",
    type: "grammar",
    answerAr: "فاعل مرفوع وعلامة رفعه الضمة. (للفعل: يغني).",
    answerMl: "ഇത് \"يُغْنِي\" (ഫലം ചെയ്യുക) എന്ന ക്രിയയുടെ കർത്താവ് അഥവാ 'ഫാഇൽ' (فاعل) ആണ്. അതിനാൽ ദമ്മ (ضمة) നൽകിയിരിക്കുന്നു.",
    answerEn: "It is the subject (Fa'il) of the verb \"Yughni\", so it is in the nominative case with a Damma."
  },
  {
    id: 15,
    qAr: "ما هو الأسلوب البلاغي في إنهاء القصيدة بعبارة \"دع الأيام\" وهي نفس الفكرة التي بدأت بها؟",
    qMl: "കവിത ആരംഭിച്ച അതേ ആശയത്തിൽ (\"دع الأيام\") തന്നെ അവസാനിപ്പിക്കുന്ന കാവ്യ സങ്കേതത്തിന് പറയുന്ന പേര് എന്ത്?",
    qEn: "What is the rhetorical term for ending the poem with the exact same idea it started with (\"Let the days\")?",
    type: "grammar",
    answerAr: "يسمى هذا الأسلوب \"رد العجز على الصدر\" ليعطي القصيدة شكلاً دائرياً متكاملاً.",
    answerMl: "ഈ സാഹിത്യ സങ്കേതത്തെ 'റദ്ദുൽ അജ്സ് അല സ്വദ്ർ' (رد العجز على الصدر) എന്ന് വിളിക്കുന്നു. കവിതയ്ക്ക് പൂർണ്ണമായ ഒരു സമമിതി (Symmetry) നൽകാൻ വേണ്ടിയാണിത്.",
    answerEn: "This is called \"Radd al-A'jaz 'ala al-Sadr\" (Structural Symmetry). It loops the end of the poem directly back to the beginning to create a perfect circle."
  },

  // SECTION 3: Detailed Paragraph Questions
  {
    id: 16,
    qAr: "كيف يعلمنا الإمام الشافعي التعامل مع مصائب الدنيا وحوادثها؟ اشرح بالتفصيل.",
    qMl: "ഭൗതിക ലോകത്തെ പ്രതിസന്ധികളോടും ദുരന്തങ്ങളോടും മനുഷ്യൻ എങ്ങനെ പ്രതികരിക്കണമെന്നാണ് ഇമാം ശാഫി (റ) പഠിപ്പിക്കുന്നത്? വിശദമാക്കുക.",
    qEn: "How does Imam Al-Shafi'i teach us to deal with the calamities and incidents of the world? Explain in detail.",
    type: "descriptive",
    answerAr: "يبين الإمام الشافعي أن الدنيا مليئة بالمشاكل، ولكن يجب على الإنسان العاقل ألا يخاف أو يفقد الأمل (لا يجزع). السبب هو أن كل شيء مؤقت ولن يدوم أبداً. لذلك، يجب على الإنسان أن يرضى بقضاء الله، وأن يجعل نفسه هادئة.",
    answerMl: "ഈ ഭൗതിക ലോകം പ്രതിസന്ധികൾ നിറഞ്ഞതാണെങ്കിലും, മനുഷ്യൻ ഒരിക്കലും അതിൽ പരിഭ്രാന്തനാകുകയോ ഭയപ്പെടുകയോ ചെയ്യരുത് (الجزع) എന്ന് ഇമാം വ്യക്തമാക്കുന്നു. കാരണം, ഈ ലോകത്തെ എല്ലാ പ്രശ്നങ്ങളും താൽക്കാലികമാണ്; ഒന്നിനും ശാശ്വതമായ നിലനിൽപ്പില്ല. അതിനാൽ, അല്ലാഹുവിന്റെ വിധിയിൽ പൂർണ്ണമായും തൃപ്തിപ്പെടാനും മനസ്സിനെ ശാന്തമാക്കി നിർത്താനും നാം ശീലിക്കണം.",
    answerEn: "Imam Al-Shafi'i explains that while the world has problems, a wise person must never panic or lose hope (Jaza'). The reason is that everything in this world is temporary. Therefore, a person must be completely satisfied with God's destiny and keep their soul calm and at peace."
  },
  {
    id: 17,
    qAr: "ما هي المواصفات الدقيقة لـ \"الرجل القوي\" كما رسمها الشاعر في البيت الخامس والسادس؟",
    qMl: "അഞ്ച്, ആറ് വരികളിൽ കവി വരച്ചുകാട്ടുന്ന 'കരുത്തനായ മനുഷ്യന്റെ' കൃത്യമായ സവിശേഷതകൾ എന്തൊക്കെയാണ്?",
    qEn: "What are the precise characteristics of the \"strong man\" as portrayed by the poet in the 5th and 6th lines?",
    type: "descriptive",
    answerAr: "الشاعر يطلب توازناً دقيقاً. في الداخل، يجب أن يكون الإنسان قوياً وصابراً (جلداً) أمام الكوارث. ولكن في نفس الوقت، يجب أن يكون طبعه الأصلي (سجيته) مع الناس مليئاً باللين والتسامح (السماحة) والوفاء.",
    answerMl: "ഒരു മനുഷ്യന്റെ വ്യക്തിത്വത്തിൽ കൃത്യമായ ഒരു സന്തുലിതാവസ്ഥയാണ് കവി ആവശ്യപ്പെടുന്നത്. ദുരന്തങ്ങൾ വരുമ്പോൾ അവൻ ഉറച്ചുനിൽക്കുന്നവനും പതറാത്തവനും (الجلد) ആയിരിക്കണം. എന്നാൽ സമൂഹത്തോടുള്ള അവന്റെ അടിസ്ഥാന പ്രകൃതം (السجية) എപ്പോഴും കാരുണ്യവും വിട്ടുവീഴ്ചയും (السماحة), അതുപോലെ തികഞ്ഞ വിശ്വസ്തതയും നിറഞ്ഞതായിരിക്കണം.",
    answerEn: "The poet demands a precise balance. Internally, a person must be extremely strong and patient (Jald) facing disasters. However, his innate disposition (Sajiyyah) towards society must be full of gentleness, tolerance (Samahah), and unbreakable loyalty (Wafa')."
  },
  {
    id: 18,
    qAr: "اشرح بالتفصيل الصورة البلاغية في قوله: \"فما في النار للظمآن ماء\".",
    qMl: "\"ദാഹിക്കുന്നവന് തീയിൽ വെള്ളമില്ല\" എന്ന വരിയിലെ സാഹിത്യപരമായ ഉപമ (Simile) വിശദമാക്കുക.",
    qEn: "Explain in detail the rhetorical image in the phrase: \"For there is no water in the fire for the thirsty\".",
    type: "descriptive",
    answerAr: "هذه صورة تسمى (التشبيه الضمني). الشاعر يشبه الشخص الذي يطلب المساعدة من إنسان بخيل، برجل يموت من العطش ويبحث عن الماء داخل نار مشتعلة. النار لا يمكن أن تعطيه الماء بل ستحرقه، وكذلك البخيل لن يساعدك بل سيهينك.",
    answerMl: "ഇതൊരു അതിമനോഹരമായ സാഹിത്യ ഉപമയാണ് (التشبيه الضمني). സാമ്പത്തികമായി ബുദ്ധിമുട്ടുന്ന ഒരാൾ ഒരു പിശുക്കന്റെ അടുത്ത് പോയി സഹായം ചോദിക്കുന്നതിനെ, ദാഹിച്ചു വലഞ്ഞ ഒരാൾ തീക്കുണ്ഡത്തിൽ വെള്ളം അന്വേഷിക്കുന്നതിനോടാണ് കവി ഉപമിച്ചിരിക്കുന്നത്. തീ ഒരിക്കലും ദാഹം തീർക്കില്ല, അത് മനുഷ്യനെ ചുട്ടെരിക്കുകയേ ഉള്ളൂ. അതുപോലെയാണ് പിശുക്കനിൽ നിന്നുള്ള സഹായപ്രതീക്ഷയും.",
    answerEn: "This is an implicit simile (Tashbeeh Dhimni). The poet compares a person asking a miser for help to a desperately thirsty man looking for water inside a blazing fire. Fire will never quench thirst, it will only burn the person. Similarly, a miser will not help you; he will only humiliate you."
  },
  {
    id: 19,
    qAr: "هل يؤثر الركض المستمر والعمل الشاق بشكل مفرط (العناء) على زيادة الرزق المكتوب؟ وضح بناء على القصيدة.",
    qMl: "വിശ്രമമില്ലാതെയുള്ള അമിതമായ കഷ്ടപ്പാടും അധ്വാനവും (العناء) മുൻകൂട്ടി നിശ്ചയിക്കപ്പെട്ട ഉപജീവനം വർദ്ധിപ്പിക്കുമോ? കവിതയുടെ അടിസ്ഥാനത്തിൽ വ്യക്തമാക്കുക.",
    qEn: "Does continuous running and excessive hard work ('Ana) affect the increase of destined provision? Explain based on the poem.",
    type: "descriptive",
    answerAr: "لا، يقول الشاعر إن العمل بهدوء (التأني) لن يقلل من الرزق. وفي نفس الوقت، العمل بتعب شديد وهلع مستمر (العناء) لن يجعلك تحصل على أكثر مما هو مكتوب لك. الرزق محدد من الله.",
    answerMl: "ഇല്ല, കൃത്യമായ പ്ലാനിങ്ങോടെ ശാന്തമായി ജോലി ചെയ്യുന്നത് (التأني) നിങ്ങളുടെ ഉപജീവനം ഒട്ടും കുറയ്ക്കില്ല. മറുവശത്ത്, സ്വന്തം ആരോഗ്യവും സമാധാനവും നശിപ്പിച്ച് അമിതമായി കഷ്ടപ്പെടുന്നത് (العناء) മുൻനിശ്ചയിക്കപ്പെട്ട സമ്പത്തിന്റെ പരിധി വർദ്ധിപ്പിക്കുകയുമില്ല. സമ്പത്ത് അല്ലാഹു മുൻകൂട്ടി നിശ്ചയിച്ചതാണ്.",
    answerEn: "No, the poet states that working calmly (Ta'anni) will never decrease your provision. At the same time, frantic running and working with excessive exhaustion ('Ana) will not make you earn more than what is already written for you. Provision is fixed by God."
  },
  {
    id: 20,
    qAr: "اشرح بعمق معنى البيت: \"إذا ما كنت ذا قلب قنوع / فأنت ومالك الدنيا سواء\".",
    qMl: "\"നിനക്ക് സംതൃപ്തിയുള്ള ഒരു ഹൃദയമുണ്ടെങ്കിൽ, നീയും ലോകത്തിന്റെ ഉടമസ്ഥനും തുല്യരാണ്\" എന്ന വരിയുടെ അർത്ഥം വിശദമാക്കുക.",
    qEn: "Explain deeply the meaning of the line: \"If you have a contented heart, then you and the owner of the world are equal.\"",
    type: "descriptive",
    answerAr: "يعيد الشافعي تعريف \"الثروة\"؛ فالغنى ليس بكثرة الأموال، بل هو في القناعة. إذا كان الإنسان يرضى بما يملك، فإنه يصل إلى راحة نفسية تجعله متساوياً تماماً في السعادة مع الملك الذي يملك العالم كله.",
    answerMl: "സമ്പത്ത് എന്ന സങ്കൽപ്പത്തെ ഇമാം ശാഫി (റ) ഇവിടെ തിരുത്തിയെഴുതുകയാണ്. യഥാർത്ഥ സമ്പത്ത് എന്നത് മാനസികാവസ്ഥയാണ് (القناعة). തനിക്ക് ലഭിച്ചത് കൊണ്ട് സംതൃപ്തനായ ഒരു സാധാരണക്കാരന്, ഈ ലോകം മുഴുവൻ വെട്ടിപ്പിടിച്ച വലിയൊരു ചക്രവർത്തിക്ക് ലഭിക്കുന്ന അതേ മാനസിക സമാധാനവും പൂർണ്ണതയും ലഭിക്കുന്നു.",
    answerEn: "Al-Shafi'i redefines \"wealth\"; true richness is not an abundance of money, but absolute contentment (Qana'ah). If a person is satisfied with what they have, they achieve a psychological peace that makes them perfectly equal in happiness to a king who owns the entire world."
  },
  {
    id: 21,
    qAr: "في إدارة الأزمات، لماذا يعتبر فرح الأعداء (الشماتة) أسوأ وأقسى من المصيبة نفسها؟",
    qMl: "പ്രതിസന്ധികളുടെ സമയത്ത്, ശത്രുക്കളുടെ പരിഹാസം (الشماتة) യഥാർത്ഥ ദുരന്തത്തേക്കാൾ കഠിനമായ വിപത്തായി കണക്കാക്കപ്പെടുന്നത് എന്തുകൊണ്ട്?",
    qEn: "In crisis management, why is the gloating of enemies (Shamatah) considered worse and harsher than the calamity itself?",
    type: "descriptive",
    answerAr: "المصيبة العادية يمكن للإنسان تعويضها. ولكن، عندما تظهر ضعفك أمام أعدائك وترى في عيونهم الفرح بسقوطك (الشماتة)، فإن هذا يجرح الكرامة ويكسر عزة النفس، ويترك ألماً نفسياً كبيراً.",
    answerMl: "സാധാരണ ദുരന്തങ്ങൾ കാലക്രമേണ മനുഷ്യന് പരിഹരിക്കാൻ കഴിഞ്ഞേക്കാം. എന്നാൽ, സ്വന്തം പരാജയഘട്ടത്തിൽ ശത്രുക്കൾ നിങ്ങളുടെ വീഴ്ച കണ്ട് സന്തോഷിക്കുകയും പരിഹസിക്കുകയും (الشماتة) ചെയ്യുന്നത് ഒരു മനുഷ്യന്റെ ആത്മാഭിമാനത്തെ പൂർണ്ണമായും തകർക്കുന്ന ഒന്നാണ്. ഇത് വലിയ മാനസികാഘാതമാണ് സൃഷ്ടിക്കുന്നത്.",
    answerEn: "A normal calamity can eventually be recovered from. However, when you show vulnerability to your enemies and see the joy in their eyes at your downfall (Shamatah), it deeply wounds your dignity, breaks your self-respect, and leaves immense psychological pain."
  },
  {
    id: 22,
    qAr: "كيف يصف الشاعر التغير في إدراك الإنسان للمكان وللأرض عندما يأتي الموت (ينزل القضاء)؟",
    qMl: "മരണം (വിധി) വന്നെത്തുമ്പോൾ മനുഷ്യന്റെ സ്ഥലകാല ബോധത്തിന് സംഭവിക്കുന്ന മാറ്റത്തെ കവി എങ്ങനെയാണ് വിവരിക്കുന്നത്?",
    qEn: "How does the poet describe the change in a person's perception of space and the earth when death (destiny) arrives?",
    type: "descriptive",
    answerAr: "يقول إن أرض الله واسعة جداً. ولكن، عندما تأتي لحظة الموت، تتغير نفسية الإنسان ويشعر أن هذا الكون الواسع قد انكمش وأصبح ضيقاً جداً، لأنه لا يوجد أي مكان يختبئ فيه من الموت.",
    answerMl: "സാധാരണ സമയങ്ങളിൽ ഈ പ്രപഞ്ചം അനന്തവും അതിവിശാലവുമാണ് (واسعة). എന്നാൽ, അന്തിമവിധി (മരണം) വന്നെത്തുമ്പോൾ മനുഷ്യന്റെ മാനസികാവസ്ഥ പൂർണ്ണമായും മാറുന്നു. ആ അതിവിശാലമായ ലോകം അവന് മുന്നിൽ ശ്വാസംമുട്ടിക്കുന്ന ഒരിടമായി ഇടുങ്ങിയതായി (ضاق) മാറുന്നു. ഓടിയൊളിക്കാൻ ഒരിടവും അവന് കാണാൻ കഴിയില്ല.",
    answerEn: "He says that God's earth is infinitely vast. However, when the moment of death arrives, a person's psychology shifts and they feel that this entire vast universe has constricted and become incredibly narrow, because there is nowhere to hide from death."
  },
  {
    id: 23,
    qAr: "ما هي النظرة الفلسفية للشاعر تجاه التغيرات وتقلبات الحياة (الحزن، السرور، البؤس، الرخاء)؟",
    qMl: "മനുഷ്യജീവിതത്തിലെ മാറ്റങ്ങളെയും ഏറ്റക്കുറച്ചിലുകളെയും (ദുഃഖം, സന്തോഷം, ദാരിദ്ര്യം, സമൃദ്ധി) കവി ഏത് ദാർശനിക തലത്തിലാണ് നോക്കിക്കാണുന്നത്?",
    qEn: "What is the poet's philosophical view regarding the changes and fluctuations of life (sorrow, joy, misery, prosperity)?",
    type: "descriptive",
    answerAr: "يرى الشاعر أن القاعدة الأساسية في الدنيا هي \"التغير\". لا يوجد شيء يستمر إلى الأبد. الحزن ينتهي ويأتي السرور، والسرور أيضاً لا يدوم. هذا الفهم العميق لتقلبات الحياة يحمي الإنسان من الاكتئاب والغرور.",
    answerMl: "ഈ ഭൗതിക ലോകത്തെ ഏറ്റവും വലിയ അടിസ്ഥാന നിയമം 'മാറ്റം' ആണെന്നാണ് കവി വിശ്വസിക്കുന്നത്. ജീവിതത്തിലെ ഒരു അവസ്ഥയും ശാശ്വതമല്ല. ദുഃഖവും സന്തോഷവും ദാരിദ്ര്യവും സമൃദ്ധിയുമെല്ലാം മാറിമറിയും എന്ന ഈ തിരിച്ചറിവ്, സങ്കടങ്ങളിൽ തളർന്നുപോകാതിരിക്കാനും സന്തോഷങ്ങളിൽ അഹങ്കരിക്കാതിരിക്കാനും സഹായിക്കുന്നു.",
    answerEn: "The poet believes that the fundamental rule of worldly life is \"constant change\". Nothing lasts forever. Sorrow ends and joy comes, and joy also does not last. This deep understanding of life's fluctuations protects a person from depression and arrogance."
  },
  {
    id: 24,
    qAr: "ما هي الحقيقة القاطعة التي يختم بها الشاعر قصيدته بخصوص الطب والموت؟",
    qMl: "വൈദ്യശാസ്ത്രത്തെയും മരണത്തെയും കുറിച്ച് കവിതയുടെ അവസാനത്തിൽ കവി നൽകുന്ന അനിഷേധ്യമായ യാഥാർത്ഥ്യം എന്താണ്?",
    qEn: "What is the absolute truth with which the poet concludes his poem regarding medicine and death?",
    type: "descriptive",
    answerAr: "يختم الشاعر بحقيقة حتمية: مهما تقدم العلم والأدوية، فإنها تقف عاجزة تماماً أمام الموت. عندما ينتهي العمر المكتوب، فلا يوجد أي دواء في العالم يمكنه أن يوقف الموت.",
    answerMl: "മനുഷ്യന്റെ സാങ്കേതികവും വൈദ്യശാസ്ത്രപരവുമായ അഹങ്കാരങ്ങളെ തകർക്കുന്ന ഒരു പ്രഖ്യാപനമാണിത്. ശാസ്ത്രം എത്ര വളർന്നാലും, ഒരാളുടെ മുൻനിശ്ചയിക്കപ്പെട്ട സമയം കഴിഞ്ഞാൽ, മരണത്തെ ഒരു സെക്കൻഡ് നേരത്തേക്ക് പോലും പിടിച്ചുനിർത്താൻ ഈ ലോകത്തെ ഒരു മരുന്നിനും കഴിയില്ല.",
    answerEn: "The poet concludes with an inevitable truth: no matter how advanced science and medicines become, they stand completely powerless against death. When a person's decreed lifespan ends, absolutely no medicine in the world can stop death."
  },
  {
    id: 25,
    qAr: "لخص الرسالة الأساسية (الفكرة العامة) التي أراد الإمام الشافعي إيصالها من خلال هذه القصيدة.",
    qMl: "ഈ കവിതയിലൂടെ ഇമാം ശാഫി (റ) നൽകാൻ ഉദ്ദേശിച്ച അടിസ്ഥാന സന്ദേശം (General Idea) ചുരുക്കത്തിൽ വിവരിക്കുക.",
    qEn: "Summarize the main message (General Idea) that Imam Al-Shafi'i wanted to convey through this poem.",
    type: "descriptive",
    answerAr: "الرسالة الأساسية هي ضرورة الرضا بقضاء الله، وعدم التعلق بالدنيا لأنها متغيرة. يعلمنا الشاعر أن نواجه الصعاب بشجاعة، مع الحفاظ على الكرم والتسامح مع الناس وعزة النفس أمام الأعداء، وتذكر حتمية الموت دائماً.",
    answerMl: "അല്ലാഹുവിന്റെ വിധിയിൽ പൂർണ്ണമായി തൃപ്തിപ്പെട്ടുകൊണ്ട് മാനസിക സമാധാനം കണ്ടെത്തുക എന്നതാണ് പ്രധാന സന്ദേശം. പ്രതിസന്ധികളെ വലിയ ആത്മധൈര്യത്തോടെ നേരിടണം; അതോടൊപ്പം സമൂഹത്തോട് കാരുണ്യവും ഉദാരതയും കാണിക്കുകയും, ശത്രുക്കൾക്ക് മുന്നിൽ ആത്മാഭിമാനം സംരക്ഷിക്കുകയും വേണം. അവസാനം, മരണം അനിവാര്യമാണെന്ന യാഥാർത്ഥ്യം കവി ഓർമ്മിപ്പിക്കുന്നു.",
    answerEn: "The main message is the necessity of being content with God's destiny and not overly attaching to the changing world. The poet teaches us to face hardships with courage, maintain generosity towards people and dignity in front of enemies, and always remember the inevitability of death."
  }
];

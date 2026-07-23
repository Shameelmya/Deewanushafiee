const fs = require('fs');
const path = require('path');

// 1. Update questionsData.ts
const questionsPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'questionsData.ts');

const newQuestionsData = `import { QuestionItem } from '../../types';

export const questionsData: QuestionItem[] = [
  // SECTION 1: MCQs
  {
    id: 1,
    qAr: "ماذا يعني مصطلح 'الجزع' المستخدم في البيت الثاني؟",
    qMl: "രണ്ടാമത്തെ വരിയിൽ ഉപയോഗിച്ചിരിക്കുന്ന 'അൽ-ജസഅ്' (الجزع) എന്ന സാങ്കേതിക പദം കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?",
    qEn: "What does the technical term 'Al-Jaza\\'' mean as used in the second line?",
    type: "mcq",
    options: [
      "الشجاعة / ധൈര്യം / Courage",
      "فقدان الصبر والانهيار / ക്ഷമ നശിക്കുകയും പരിഭ്രാന്തനാകുകയും ചെയ്യുക / Losing patience and panicking",
      "التسامح / വിട്ടുവീഴ്ച / Tolerance"
    ],
    correctOptionIndex: 1,
    answerAr: "فقدان الصبر والانهيار",
    explanationMl: "ദുരന്തങ്ങൾ വരുമ്പോൾ പരിഭ്രമിക്കുകയും ക്ഷമ നശിക്കുകയും ചെയ്യുക എന്നാണ് 'ജസഅ്' എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത്.",
    explanationEn: "It means losing patience and panicking when facing calamities."
  },
  {
    id: 2,
    qAr: "وفقاً للقصيدة، ما هي الصفة التي تعمل كـ 'غطاء سوسيولوجي' لعيوب الإنسان؟",
    qMl: "കവിതയുടെ അടിസ്ഥാനത്തിൽ, മനുഷ്യന്റെ ന്യൂനതകൾക്ക് ഒരു 'സോഷ്യോളജിക്കൽ കവചമായി' (മറയായി) പ്രവർത്തിക്കുന്ന ഗുണം ഏതാണ്?",
    qEn: "According to the poem, which trait acts as a 'sociological camouflage' for human faults?",
    type: "mcq",
    options: [
      "الذكاء / ബുദ്ധി / Intelligence",
      "السخاء / ഔദാര്യം / Generosity",
      "الشجاعة / ധൈര്യം / Courage"
    ],
    correctOptionIndex: 1,
    answerAr: "السخاء",
    explanationMl: "കവിതയിൽ ഔദാര്യം (السخاء) മനുഷ്യന്റെ എല്ലാ പോരായ്മകളെയും മറയ്ക്കുന്ന കവചമായി പ്രവർത്തിക്കുന്നു എന്ന് പറയുന്നു.",
    explanationEn: "Generosity is described as covering all faults, acting as a sociological camouflage."
  },
  {
    id: 3,
    qAr: "ما هو التأثير الاقتصادي لـ 'العناء' (الاحتراق الوظيفي) على الرزق المكتوب؟",
    qMl: "അമിതമായ കഷ്ടപ്പാടുകൾക്ക് (العناء) മുൻകൂട്ടി നിശ്ചയിക്കപ്പെട്ട ഉപജീവനത്തിന്മേലുള്ള സ്വാധീനം എന്താണ്?",
    qEn: "What is the economic effect of frantic exhaustion (Al-'Ana') on one's ordained provision?",
    type: "mcq",
    options: [
      "يضاعفه / അതിനെ ഇരട്ടിയാക്കും / It doubles it",
      "لا يزيده / അത് വർദ്ധിപ്പിക്കുകയില്ല / It does not increase it",
      "يلغيه تماماً / അതിനെ പൂർണ്ണമായും ഇല്ലാതാക്കും / It completely cancels it"
    ],
    correctOptionIndex: 1,
    answerAr: "لا يزيده",
    explanationMl: "അമിതമായി കഷ്ടപ്പെടുന്നത് മുൻനിശ്ചയിക്കപ്പെട്ട സമ്പത്തിനെ വർദ്ധിപ്പിക്കുകയില്ല.",
    explanationEn: "Frantic exhaustion does not increase the provision that is already ordained."
  },
  {
    id: 4,
    qAr: "كيف يعيد الشاعر تعريف مفهوم 'الثروة' الحقيقية؟",
    qMl: "യഥാർത്ഥ 'സമ്പത്ത്' എന്ന സങ്കൽപ്പത്തെ കവി എങ്ങനെയാണ് പുനർനിർവചിക്കുന്നത്?",
    qEn: "How does the poet redefine the concept of true 'wealth'?",
    type: "mcq",
    options: [
      "بامتلاك الأراضي / ഭൂസ്വത്ത് ഉള്ളത് / Owning lands",
      "بحالة القناعة الإدراكية / മാനസികമായ പൂർണ്ണ സംതൃപ്തി (القناعة) / The cognitive state of absolute contentment",
      "بكثرة الأصدقاء / ധാരാളം സുഹൃത്തുക്കൾ ഉള്ളത് / Having many friends"
    ],
    correctOptionIndex: 1,
    answerAr: "بحالة القناعة الإدراكية",
    explanationMl: "സമ്പത്ത് എന്നത് പണം കൂട്ടിവെക്കലല്ല, മറിച്ച് പൂർണ്ണമായ മാനസിക സംതൃപ്തിയാണ് (القناعة).",
    explanationEn: "He redefines wealth as the cognitive state of absolute contentment (Qana'ah)."
  },
  {
    id: 5,
    qAr: "ما هو المعنى الحرفي لمصطلح 'المنايا'؟",
    qMl: "'അൽ-മനായാ' (المنايا) എന്ന പദത്തിന്റെ അക്ഷരാർത്ഥം എന്ത്?",
    qEn: "What is the literal meaning of the term 'Al-Manaya'?",
    type: "mcq",
    options: [
      "الأمنيات / ആഗ്രഹങ്ങൾ / Wishes",
      "الموت / മരണം / Death",
      "الأمراض / രോഗങ്ങൾ / Diseases"
    ],
    correctOptionIndex: 1,
    answerAr: "الموت",
    explanationMl: "മരണങ്ങൾ (അല്ലെങ്കിൽ അന്തിമവിധികൾ) എന്നാണ് ഇതിന്റെ അക്ഷരാർത്ഥം.",
    explanationEn: "It literally means deaths or ultimate fates."
  },
  {
    id: 6,
    qAr: "إلى ماذا يشير مصطلح 'السجية' (شيمتك) في السياق النفسي للقصيدة؟",
    qMl: "കവിതയുടെ മനഃശാസ്ത്രപരമായ പശ്ചാത്തലത്തിൽ 'സജിയ്യത്ത്' (شيمتك) എന്ന പദം സൂചിപ്പിക്കുന്നത് എന്തിനെയാണ്?",
    qEn: "In the psychological context of the poem, what does the term 'Sajiyyah' (Sheematuka) refer to?",
    type: "mcq",
    options: [
      "المظهر الخارجي / ബാഹ്യരൂപം / Physical appearance",
      "الطبع الأصيل المتأصل / ജന്മസിദ്ധവും മാറ്റമില്ലാത്തതുമായ പ്രകൃതം / Innate, deeply ingrained disposition",
      "الثروة المادية / ഭൗതിക സമ്പത്ത് / Material wealth"
    ],
    correctOptionIndex: 1,
    answerAr: "الطبع الأصيل المتأصل",
    explanationMl: "ഒരു മനുഷ്യന്റെ രക്തത്തിൽ അലിഞ്ഞുചേർന്ന, മാറ്റാൻ കഴിയാത്ത യഥാർത്ഥ പ്രകൃതമാണിത്.",
    explanationEn: "It refers to an innate, deeply ingrained disposition that is natural, not acted."
  },
  {
    id: 7,
    qAr: "لماذا يحذر الشاعر بشدة من إظهار الانكسار أمام الأعداء؟",
    qMl: "ശത്രുക്കൾക്ക് മുന്നിൽ ദൗർബല്യം കാണിക്കുന്നതിനെതിരെ കവി അതിശക്തമായി മുന്നറിയിപ്പ് നൽകാൻ കാരണമെന്ത്?",
    qEn: "Why does the poet strongly warn against showing vulnerability to enemies?",
    type: "mcq",
    options: [
      "لأن شماتتهم تسبب دماراً نفسياً أشد من المصيبة / അവരുടെ പരിഹാസം (شَمَاتَة) ദുരന്തത്തേക്കാൾ വലിയ മാനസികാഘാതം സൃഷ്ടിക്കും / Because their gloating causes psychological destruction worse than the calamity",
      "لأنهم سيهاجمون مرة أخرى / അവർ വീണ്ടും ആക്രമിക്കും / Because they will attack again",
      "لأن ذلك يقلل من الثروة / അത് സമ്പത്ത് കുറയ്ക്കും / Because it reduces wealth"
    ],
    correctOptionIndex: 0,
    answerAr: "لأن شماتتهم تسبب دماراً نفسياً أشد من المصيبة",
    explanationMl: "ശത്രുക്കളുടെ പരിഹാസം യഥാർത്ഥ പ്രതിസന്ധിയേക്കാൾ വലിയ മാനസിക തകർച്ചയുണ്ടാക്കും.",
    explanationEn: "Because the malicious joy of enemies inflicts psychological destruction far worse than the defeat itself."
  },
  {
    id: 8,
    qAr: "ما هو العلاج المعرفي (CBT) الذي يقدمه الشاعر لمواجهة حوادث الدنيا؟",
    qMl: "ഭൗതിക ലോകത്തെ പ്രതിസന്ധികളെ നേരിടാൻ കവി നൽകുന്ന കോഗ്നിറ്റീവ് തെറാപ്പി (CBT) എന്താണ്?",
    qEn: "What is the Cognitive Therapy (CBT) the poet offers to face worldly incidents?",
    type: "mcq",
    options: [
      "إدراك عدم بقائها المؤقت / ഒന്നിനും ശാശ്വതമായ നിലനിൽപ്പില്ലെന്ന തിരിച്ചറിവ് / Realizing their absolute lack of permanence",
      "البكاء المستمر / നിരന്തരമായ വിലാപം / Continuous crying",
      "العزلة المجتمعية / സമൂഹത്തിൽ നിന്നുള്ള ഒറ്റപ്പെടൽ / Social isolation"
    ],
    correctOptionIndex: 0,
    answerAr: "إدراك عدم بقائها المؤقت",
    explanationMl: "ഈ ലോകത്തെ ഒരു പ്രശ്നത്തിനും ശാശ്വതമായ നിലനിൽപ്പില്ല എന്ന തിരിച്ചറിവാണ് അദ്ദേഹം നൽകുന്നത്.",
    explanationEn: "Realizing the absolute lack of permanence of all worldly incidents."
  },
  
  // SECTION 2: Grammar & Balagha
  {
    id: 9,
    qAr: "الإعراب النحوي لكلمة 'رَجُلاً' في قوله: 'وَكُنْ رَجُلاً'.",
    qMl: "'وَكُنْ رَجُلاً' എന്ന വാചകത്തിലെ 'رَجُلاً' എന്ന പദത്തിന്റെ വ്യാകരണപരമായ സ്ഥാനം (إعراب) എന്താണ്?",
    qEn: "What is the grammatical parsing (I'rab) of the word 'Rajulan' in the phrase 'Wa kun Rajulan'?",
    type: "grammar",
    answerAr: "خبر 'كان' منصوب وعلامة نصبه الفتحة الظاهرة.",
    answerMl: "ഇത് 'കാന' (كان) എന്ന ക്രിയയുടെ 'ഖബർ' (خبر) ആണ്. അതുകൊണ്ട് ഇതിന് 'നസ്ബ്' (منصوب - ഫത്ഹ്) നൽകപ്പെട്ടിരിക്കുന്നു.",
    answerEn: "It is the predicate (Khabar) of the verb 'Kana' (to be), making it in the accusative case (Mansub)."
  },
  {
    id: 10,
    qAr: "لماذا جاء الفعل المضارع 'تَغْدِرْ' مجزوماً بالسكون في البيت الأخير؟",
    qMl: "അവസാന വരിയിലെ 'تَغْدِرْ' (തഗ്ദിർ) എന്ന ക്രിയയ്ക്ക് 'സുകൂൻ' (مجزوم) വരാനുള്ള വ്യാകരണ നിയമം എന്താണ്?",
    qEn: "Why is the present tense verb 'Taghdir' jussive (Majzum with Sukoon) in the last line?",
    type: "grammar",
    answerAr: "لأنه فعل مضارع واقع في جواب الطلب (فعل الأمر: دَعِ).",
    answerMl: "'دَعِ' (വിട്ടേക്കുക) എന്ന കൽപനാക്രിയയുടെ (فعل أمر) മറുപടിയായി (جواب الطلب) വന്നതുകൊണ്ടാണ് ഈ ക്രിയയ്ക്ക് സുകൂൻ നൽകിയത്.",
    answerEn: "Because it falls in the position of response to the imperative request (Jawab al-Talab) originating from the command 'Da\\' (Let)."
  },
  {
    id: 11,
    qAr: "ما هي الوظيفة النحوية لظرف الزمان 'قَطُّ'؟",
    qMl: "'قَطُّ' (ഖത്വ്) എന്ന പദത്തിന്റെ വ്യാകരണ ധർമ്മം (الوظيفة النحوية) എന്ത്?",
    qEn: "What is the grammatical function of the time adverb 'Qattu'?",
    type: "grammar",
    answerAr: "ظرف زمان مبني على الضم يفيد استغراق النفي القطعي.",
    answerMl: "ഒരു കാര്യത്തെ കർശനമായും പൂർണ്ണമായും നിഷേധിക്കാൻ (استغراق النفي) ഉപയോഗിക്കുന്ന സമയത്തെ കുറിക്കുന്ന പദം (ظرف زمان).",
    answerEn: "An adverb of time built on Damma, functioning as a particle of absolute, categorical negation for all time."
  },
  {
    id: 12,
    qAr: "الأسلوب البلاغي في قوله 'دَعِ الأَيَّامَ' حيث أسند الفعل للأيام يسمى:",
    qMl: "'دَعِ الأَيَّامَ' (കാലത്തെ വിട്ടേക്കുക) എന്ന പ്രയോഗത്തിൽ കാലത്തെ ഒരു വ്യക്തിയായി ചിത്രീകരിച്ചിരിക്കുന്ന അലങ്കാരശാസ്ത്രം ഏത്?",
    qEn: "The rhetorical device in 'Let the days...' where action is attributed to time is called:",
    type: "grammar",
    answerAr: "الاستعارة المكنية (التشخيص / Personification) أو مجاز عقلي.",
    answerMl: "ഇതിനെ 'അൽ-ഇസ്തിആറ അൽ-മക്നിയ്യ' (الاستعارة المكنية) അഥവാ വ്യക്തിവൽക്കരണം (Personification) എന്ന് വിളിക്കുന്നു.",
    answerEn: "Metaphorical Personification (Al-Isti'arah Al-Makniyyah), granting free will to an abstract concept like time."
  },
  {
    id: 13,
    qAr: "العلاقة اللفظية بين كلمتي 'واسعة' و 'ضاق' تسمى في علم البديع:",
    qMl: "അലങ്കാരശാസ്ത്രപ്രകാരം 'واسعة' (വിശാലമായ), 'ضاق' (ഇടുങ്ങിയ) എന്നീ വാക്കുകൾ തമ്മിലുള്ള ബന്ധം അറിയപ്പെടുന്നത്:",
    qEn: "In rhetorical science ('Ilm al-Badi'), the relationship between the words 'Wasi'ah' (vast) and 'Daqa' (narrowed) is called:",
    type: "grammar",
    answerAr: "الطباق الإيجابي (Antithesis).",
    answerMl: "'അത്ത്വിബാഖ്' (الطباق). വിപരീതാർത്ഥമുള്ള വാക്കുകൾ ഉപയോഗിച്ച് ആശയത്തിന് ശക്തി നൽകുന്ന രീതി.",
    answerEn: "Al-Tibaq (Antithesis), the deliberate juxtaposition of opposite concepts."
  },
  {
    id: 14,
    qAr: "طلب العون من شخص بخيل يمثل أسلوب:",
    qMl: "പിശുക്കനായ ഒരാളോട് സഹായം ചോദിക്കുന്നതിനെ തീയിൽ വെള്ളം അന്വേഷിക്കുന്നതിനോട് ഉപമിച്ച കാവ്യ സങ്കേതം ഏതാണ്?",
    qEn: "Comparing asking a miser for help to seeking water in fire represents which rhetorical style?",
    type: "grammar",
    answerAr: "التشبيه الضمني (Implicit Simile).",
    answerMl: "'അത്തശ്ബീഹ് അദ്ദിമ്നി' (التشبيه الضمني) അഥവാ മറഞ്ഞിരിക്കുന്ന ഉപമ.",
    answerEn: "Al-Tashbeeh Al-Dhimni (Implicit Simile), drawing a parallel without using direct comparative particles."
  },
  {
    id: 15,
    qAr: "ما الإعراب النحوي لكلمة 'دَوَاءُ' في عبارة 'فَمَا يُغْنِي عَنِ المَوْتِ الدَّوَاءُ'؟",
    qMl: "'فَمَا يُغْنِي عَنِ المَوْتِ الدَّوَاءُ' എന്ന വാചകത്തിലെ 'دَوَاءُ' എന്ന പദത്തിന്റെ ഇഅ്റാബ് എന്താണ്?",
    qEn: "What is the I'rab of the word 'Dawa'u' in the phrase 'Fama yughni \\'ani al-mawti al-dawa'u'?",
    type: "grammar",
    answerAr: "فاعل مرفوع وعلامة رفعه الضمة الظاهرة للفعل 'يغني'.",
    answerMl: "ഇത് 'يُغْنِي' (ഫലം ചെയ്യുക) എന്ന ക്രിയയുടെ 'ഫാഇൽ' (فاعل - Subject) ആണ്. അതിനാൽ ദമ്മ (ضمة) നൽകിയിരിക്കുന്നു.",
    answerEn: "It is the nominative subject (Fa'il, Marfu') of the verb 'Yughni'."
  },
  {
    id: 16,
    qAr: "إنهاء القصيدة بالرجوع إلى نفس فكرة البداية ('دع الأيام') يسمى بلاغياً بـ:",
    qMl: "കവിതയുടെ അവസാന വരിയെ ആദ്യ വരിയുമായി ബന്ധിപ്പിച്ച് അവസാനിപ്പിക്കുന്ന കാവ്യ സങ്കേതത്തിന് പറയുന്ന പേര്:",
    qEn: "Ending the poem by structurally looping back to the exact opening phrase is rhetorically called:",
    type: "grammar",
    answerAr: "رد العجز على الصدر (Structural Symmetry).",
    answerMl: "'റദ്ദുൽ അജ്സ് അല സ്വദ്ർ' (رد العجز على الصدر). കവിതയ്ക്ക് പൂർണ്ണമായ ഒരു സമമിതി (Symmetry) നൽകുന്ന രീതി.",
    answerEn: "Radd al-A'jaz 'ala al-Sadr, a technique establishing perfect cyclical symmetry."
  },

  // SECTION 3: Descriptive & Deep Analytical
  {
    id: 17,
    qAr: "اشرح التوازن القيادي الدقيق المذكور في البيت: 'وَكُنْ رَجُلاً عَلَى الأَهْوَالِ جَلْداً...'.",
    qMl: "'وَكُنْ رَجُلاً عَلَى الأَهْوَالِ جَلْداً' എന്ന വരിയിൽ പറയുന്ന കൃത്യമായ നേതൃത്വ സന്തുലിതാവസ്ഥ (Leadership Balance) വിശദമാക്കുക.",
    qEn: "Explain the precise leadership balance mentioned in the line: 'And be a man, totally unyielding against terrors...'.",
    type: "descriptive",
    answerAr: "يطالب الشاعر بموازنة الذكاء العاطفي؛ صلابة داخلية مفرطة (الجلد) لمواجهة الكوارث، مقترنة بلين متناهٍ وتسامح (السماحة) مع المجتمع، لمنع الصلابة من التحول إلى قسوة وطغيان. مفهوم 'رجل' هنا يعني (المروءة).",
    answerMl: "ഒരു പ്രതിഭയുടെ വൈകാരിക സന്തുലിതാവസ്ഥയാണ് കവി ആവശ്യപ്പെടുന്നത്; ദുരന്തങ്ങളെ നേരിടാൻ പാറപോലുള്ള ആന്തരിക കരുത്തും (الجلد), ആ കരുത്ത് ക്രൂരതയായി മാറാതിരിക്കാൻ സമൂഹത്തോട് തികഞ്ഞ കാരുണ്യവും വിട്ടുവീഴ്ചയും (السماحة). ഇവിടെ 'പുരുഷൻ' (رجل) എന്നത് ഉന്നതമായ മനുഷ്യത്വത്തെയും (المروءة) ധീരതയെയുമാണ് കുറിക്കുന്നത്.",
    answerEn: "The poet demands emotional intelligence balance: extreme internal fortitude (Al-Jald) to absorb crises, counterbalanced by hyper-empathetic external social grace (Al-Samahah) to prevent toughness from becoming cruelty. 'Man' here denotes classical Chivalry (Muru'ah)."
  },
  {
    id: 18,
    qAr: "كيف يعمل 'السخاء' كجهاز مناعي اجتماعي (تأثير الهالة) حسب القصيدة؟",
    qMl: "കവിതയുടെ അടിസ്ഥാനത്തിൽ, 'ഔദാര്യം' എങ്ങനെയാണ് ഒരു സാമൂഹിക പ്രതിരോധ കവചമായി (ഹാലോ ഇഫക്റ്റ്) പ്രവർത്തിക്കുന്നത്?",
    qEn: "How does 'Generosity' act as a social immune system (Halo Effect) according to the poem?",
    type: "descriptive",
    answerAr: "الكرم يخلق نقطة عمياء في الإدراك المجتمعي؛ فالمجتمع يميل إلى غض الطرف عن العيوب الشخصية للشخص المعطاء، مما يغطي النقص البشري الحتمي بطريقة سوسيولوجية ذكية.",
    answerMl: "ഔദാര്യം സമൂഹത്തിന്റെ കാഴ്ചയിൽ ഒരു വലിയ ബ്ലൈൻഡ് സ്പോട്ട് സൃഷ്ടിക്കുന്നു; ഒരു ഉദാരമനസ്കനായ വ്യക്തിയുടെ വ്യക്തിപരമായ കുറവുകൾ കണ്ടെത്താൻ സമൂഹം ശ്രമിക്കില്ല. അത് മനുഷ്യസഹജമായ പോരായ്മകളെ പൂർണ്ണമായും മറയ്ക്കുന്നു.",
    answerEn: "Generosity creates a cognitive blind spot in society; the public inherently overlooks the structural personal flaws of a major benefactor, acting as a flawless sociological camouflage for human imperfection."
  },
  {
    id: 19,
    qAr: "ما هي الفلسفة الاقتصادية (التوازن المهني) التي يطرحها الشاعر حول 'التأني' و 'العناء'؟",
    qMl: "'التأني' (ശാന്തത), 'العناء' (അമിതാധ്വാനം) എന്നിവയെക്കുറിച്ച് കവി മുന്നോട്ടുവെക്കുന്ന സാമ്പത്തിക തത്വശാസ്ത്രം (പ്രൊഫഷണൽ ബാലൻസ്) എന്താണ്?",
    qEn: "What is the economic philosophy (Professional Balance) the poet proposes regarding 'Ta\\'anni' (deliberation) and '\\'Ana' (burnout)?",
    type: "descriptive",
    answerAr: "العمل الهادئ والمخطط (التأني) لن ينقص الرزق المكتوب، والركض الجنوني والاحتراق الوظيفي (العناء) لن يكسر سقف الرزق الإلهي. إنها دعوة للإنتاجية المستدامة.",
    answerMl: "കൃത്യമായ പ്ലാനിങ്ങോടെ ശാന്തമായി ജോലി ചെയ്യുന്നത് (التأني) നിങ്ങളുടെ ഉപജീവനം കുറയ്ക്കില്ല, അതുപോലെ പരിഭ്രാന്തിയോടെ അമിതമായി കഷ്ടപ്പെടുന്നത് (العناء) നിങ്ങളുടെ മുൻനിശ്ചയിക്കപ്പെട്ട സമ്പത്തിന്റെ പരിധി വർദ്ധിപ്പിക്കുകയുമില്ല. മാനസിക സമാധാനത്തോടെയുള്ള പ്രൊഫഷണലിസമാണിത്.",
    answerEn: "Calm, strategic execution (Ta'anni) mathematically will not decrease destined outcomes, and toxic, frantic overexertion ('Ana) will not artificially break the algorithmic ceiling of ordained provision. It advocates for sustainable, anxiety-free productivity."
  },
  {
    id: 20,
    qAr: "لماذا تعتبر الشماتة (Schadenfreude) أسوأ من المصيبة ذاتها في علم النفس الإداري للشاعر؟",
    qMl: "കവിയുടെ കാഴ്ചപ്പാടിൽ ശമാതത്ത് അഥവാ ശത്രുക്കളുടെ പരിഹാസം (Schadenfreude), യഥാർത്ഥ ദുരന്തത്തേക്കാൾ വലിയ വിപത്തായി കണക്കാക്കപ്പെടുന്നത് എന്തുകൊണ്ട്?",
    qEn: "Why is Shamatah (Schadenfreude) considered worse than the calamity itself in the poet's psychological management?",
    type: "descriptive",
    answerAr: "لأن رؤية نشوة العدو بسقوطك تمثل حرباً نفسية تمزق الكرامة وتدمر (عزة النفس)، وهو جرح نرجسي أشد إيلاماً من الخسارة المادية المجردة.",
    answerMl: "സ്വന്തം പരാജയം കണ്ട് ശത്രുക്കൾക്കുണ്ടാകുന്ന ആനന്ദം ഒരു മനുഷ്യന്റെ ആത്മാഭിമാനത്തെ പൂർണ്ണമായും തകർക്കുന്ന ഒരു മാനസിക യുദ്ധമാണ്. സാമ്പത്തികമോ പദവിയോ നഷ്ടപ്പെടുന്നതിനേക്കാൾ വലിയ മാനസികാഘാതമാണ് ഇത് സൃഷ്ടിക്കുന്നത്.",
    answerEn: "Because witnessing an adversary's malicious joy at your downfall is psychological warfare that shatters ego integrity and dignity, inflicting trauma far more devastating than the objective material loss itself."
  },
  {
    id: 21,
    qAr: "حلل الاستخدام الأدبي لكلمة 'الليالي' بدلاً من 'الأيام' في التعبير عن الحوادث والمصائب.",
    qMl: "പ്രതിസന്ധികളെയും ദുരന്തങ്ങളെയും കുറിക്കാൻ കവി 'പകലുകൾ' എന്നതിന് പകരം 'രാത്രികൾ' (الليالي) എന്ന് സാഹിത്യപരമായി പ്രയോഗിച്ചതിന്റെ സവിശേഷത വിശകലനം ചെയ്യുക.",
    qEn: "Analyze the literary usage of the word 'Nights' (Al-Layali) instead of 'Days' in expressing calamities.",
    type: "descriptive",
    answerAr: "الليل في الأدب الكلاسيكي هو استعارة للوحشة، الغموض، والخطر غير المرئي. الحوادث التي تقع ليلاً تكون أشد وقعاً على النفس البشرية بسبب العزلة والضعف البشري.",
    answerMl: "ക്ലാസിക്കൽ സാഹിത്യത്തിൽ രാത്രി എന്നത് ഏകാന്തതയുടെയും, അനിശ്ചിതത്വത്തിന്റെയും, കാണാത്ത അപകടങ്ങളുടെയും രൂപകമാണ് (Metaphor). ഇരുട്ടിലെ ദുരന്തങ്ങൾ മനുഷ്യന്റെ നിസ്സഹായത വർദ്ധിപ്പിക്കുകയും മാനസികമായി കൂടുതൽ ഭയപ്പെടുത്തുകയും ചെയ്യുന്നു.",
    answerEn: "In classical literature, night is a powerful metaphor for isolation, ambiguity, and unseen danger. Calamities occurring at night inflict deeper psychological trauma due to heightened human vulnerability in darkness."
  },
  {
    id: 22,
    qAr: "كيف وظف الشاعر أسلوب 'التضمين' (الاقتباس) لتعزيز نظريته السوسيولوجية؟",
    qMl: "തന്റെ സോഷ്യോളജിക്കൽ തിയറിക്ക് കൂടുതൽ ബലം നൽകാൻ കവി 'തദ്മീൻ' (التضمين - നിലവിലുള്ള ഒരു ചൊല്ല് ഉപയോഗിക്കൽ) എന്ന ശൈലി എങ്ങനെയാണ് പ്രയോജനപ്പെടുത്തിയത്?",
    qEn: "How did the poet utilize the technique of 'Tadmin' (Incorporation) to reinforce his sociological theory?",
    type: "descriptive",
    answerAr: "باستخدام عبارة 'كما قيل'، لم يقدم الشاعر فكرة 'السخاء يغطي العيوب' كرأي شخصي، بل استدعى الحكمة البشرية المتراكمة، مما يعطي حجته سلطة مطلقة ومصداقية مجتمعية.",
    answerMl: "'പറയപ്പെട്ടതുപോലെ' (كما قيل) എന്ന് ഉപയോഗിച്ചതിലൂടെ, 'ഔദാര്യം ന്യൂനതകളെ മറയ്ക്കും' എന്ന ആശയത്തെ സ്വന്തം അഭിപ്രായമായിട്ടല്ല, മറിച്ച് നൂറ്റാണ്ടുകളുടെ മനുഷ്യാനുഭവത്തിൽ നിന്ന് തെളിയിക്കപ്പെട്ട മാറ്റമില്ലാത്ത സത്യമായിട്ടാണ് അദ്ദേഹം അവതരിപ്പിച്ചത്.",
    answerEn: "By utilizing the phrase 'as it was said,' the poet doesn't present the idea as a personal opinion. He invokes universally validated, historical human wisdom, lending absolute, indisputable authority to his argument."
  },
  {
    id: 23,
    qAr: "استنتج العلاقة بين 'القناعة' والمساواة مع 'مالك الدنيا' في فلسفة الزهد الشافعية.",
    qMl: "ശാഫീ തത്വചിന്തയിലെ (സൂഫിസം) 'ഖനാഅത്ത്' (സംതൃപ്തി), 'ലോകത്തിന്റെ ഉടമസ്ഥനുമായുള്ള തുല്യത' എന്നിവ തമ്മിലുള്ള ബന്ധം അപഗ്രഥിക്കുക.",
    qEn: "Deduce the relationship between 'Contentment' (Qana'ah) and equality with the 'Owner of the World' in Al-Shafi'i's ascetic philosophy.",
    type: "descriptive",
    answerAr: "الشافعي يفكك ارتباط الثروة بالمادة، ويربطها بالحالة الإدراكية. الإمبراطور والفقير القنوع متساويان سيكولوجياً لأن كليهما وصل إلى نقطة 'انعدام الرغبة في المزيد'، فالتفاوت المادي يتبخر.",
    answerMl: "സമ്പത്തിനെ ഭൗതികവസ്തുക്കളിൽ നിന്ന് വേർപെടുത്തി മാനസികാവസ്ഥയായി കവി നിർവചിക്കുന്നു. ഒരു ചക്രവർത്തിക്കും സംതൃപ്തനായ സാധാരണക്കാരനും ഇനി 'ഒന്നും ആവശ്യമില്ല' (Zero desires) എന്ന തോന്നലാണുള്ളത്. ആന്തരിക സംതൃപ്തിക്ക് മുന്നിൽ ഭൗതികമായ ഏറ്റക്കുറച്ചിലുകൾ അപ്രസക്തമാകുന്നു.",
    answerEn: "He decouples wealth from materialism, strictly defining it as a cognitive state. The emperor and the contented ascetic are psychologically equal because both have eliminated the friction of desire. Material disparity collapses before internal self-sufficiency."
  },
  {
    id: 24,
    qAr: "وضح 'المفارقة المكانية' (الطباق) في حالة نزول القضاء المذكورة في القصيدة.",
    qMl: "ദൈവവിധി (മരണം) സംഭവിക്കുന്ന സമയത്തെ കവിതയിൽ പറയുന്ന 'സ്പേഷ്യൽ പാരഡോക്സ്' (സ്ഥല-കാല വൈരുദ്ധ്യം) വ്യക്തമാക്കുക.",
    qEn: "Clarify the 'Spatial Paradox' (Antithesis) regarding the descent of destiny mentioned in the poem.",
    type: "descriptive",
    answerAr: "رغم أن الكون ماديًا لا متناهي الاتساع (واسعة)، إلا أنه ينكمش سيكولوجياً ويتحول إلى زنزانة خانقة (ضاق) عندما يحين الأجل، مما يدل على انهيار الإدراك المكاني للميت.",
    answerMl: "ഭൗതികമായി ഈ പ്രപഞ്ചം അനന്തവും വിശാലവുമാണെങ്കിലും (واسعة), അന്തിമവിധി വന്നെത്തുമ്പോൾ അത് മാനസികമായി ശ്വാസംമുട്ടിക്കുന്ന ഒരു ചെറിയ ഇടമായി (ضاق) ചുരുങ്ങുന്നു. മനുഷ്യന്റെ ഭൗതിക സുരക്ഷാ സംവിധാനങ്ങൾ അവിടെ പൂർണ്ണമായും തകർന്നുവീഴുന്നു.",
    answerEn: "Although the universe is physically infinite and expansive (Wasi'ah), it psychologically constricts into severe claustrophobia (Daqa) when ultimate destiny arrives, illustrating the absolute collapse of physical defenses."
  },
  {
    id: 25,
    qAr: "ناقش كيف تواجه هذه القصيدة وهم 'السيطرة التكنولوجية والطبية' الحديثة، مستنداً إلى البيت الأخير.",
    qMl: "അവസാന വരിയുടെ അടിസ്ഥാനത്തിൽ, ആധുനിക മനുഷ്യന്റെ 'സാങ്കേതിക-വൈദ്യശാസ്ത്ര നിയന്ത്രണങ്ങൾ' എന്ന അഹങ്കാരത്തെ ഈ കവിത എങ്ങനെയാണ് നേരിടുന്നത് എന്ന് ചർച്ച ചെയ്യുക.",
    qEn: "Discuss how this poem confronts the modern illusion of 'technological and medical control,' based on the final line.",
    type: "descriptive",
    answerAr: "يحطم البيت الأخير ('فما يغني عن الموت الدواء') الغطرسة البشرية؛ فرغم التقدم التكنولوجي أو الطبي، يبقى الإنسان عاجزاً تماماً أمام الحتمية البيولوجية (الموت). إنها تصفية قاسية لوهم السيطرة على الوجود.",
    answerMl: "'മരണത്തിന് പകരമായി യാതൊരു മരുന്നും ഫലം ചെയ്യുകയില്ല' എന്ന പ്രഖ്യാപനം മനുഷ്യന്റെ സാങ്കേതിക അഹങ്കാരങ്ങളെ തകർക്കുന്നു. ശാസ്ത്രം എത്ര വളർന്നാലും മനുഷ്യന്റെ അന്തിമവിധിയെ തടഞ്ഞു നിർത്താൻ കഴിയില്ല എന്ന യാഥാർത്ഥ്യം ബോധ്യപ്പെടുത്തി, ഭൗതികതയിലുള്ള അമിത ആശ്രിതത്വം ഒഴിവാക്കാൻ ഇത് ആവശ്യപ്പെടുന്നു.",
    answerEn: "The final decree ('For medicine absolutely does not avail against death') shatters human arrogance. Despite advanced pharmacological interventions, humanity remains powerless against biological determinism, brutally dismantling the illusion of micro-managing existence."
  }
];
`;
fs.writeFileSync(questionsPath, newQuestionsData);


// 2. Update balaghaData.ts
const balaghaPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'balaghaData.ts');

const newBalaghaData = `import { BalaghaItem } from '../../types';

export const balaghaData: BalaghaItem[] = [
  {
    id: 1,
    titleMl: "രൂപകവൽക്കരണം (മജാസ് മുർസൽ)",
    titleEn: "Synecdoche (Majaz Mursal)",
    titleAr: "مَجَازٌ مُرْسَلٌ",
    category: "مجاز",
    exampleAr: "الأَيَّامَ",
    explanationMl: "'ദിവസങ്ങൾ' എന്ന് പറയുകയും കാലത്തെ മുഴുവൻ ഉദ്ദേശിക്കുകയും ചെയ്യുന്ന ശൈലി. ഒരു വലിയ കാലയളവിന്റെ ഒരു ചെറിയ ഭാഗം മാത്രം പറഞ്ഞ് മുഴുവൻ കാര്യത്തെയും പ്രതിനിധീകരിക്കുന്നു.",
    explanationEn: "Using a part ('days') to represent the whole ('time/destiny'). This rhetorical device elegantly points to all uncontrollable events of time.",
    explanationAr: "إطلاق الجزء (الأيام) وإرادة الكل (الزمن أو الدهر). وهذا من باب المجاز المرسل بعلاقة الجزئية، للتعبير عن تقلبات الزمان الشاملة.",
    lineNumber: 1
  },
  {
    id: 2,
    titleMl: "വ്യക്തിവൽക്കരണം (ഇസ്തിആറ മക്നിയ്യ)",
    titleEn: "Personification (Isti'arah Makniyyah)",
    titleAr: "اِسْتِعَارَةٌ مَكْنِيَّةٌ",
    category: "استعارة",
    exampleAr: "دَعِ الأَيَّامَ تَفْعَل مَا تَشَاءُ",
    explanationMl: "കാലത്തിന് ജീവനും ബുദ്ധിയുമുള്ള ഒരു മനുഷ്യന്റെ സ്വഭാവം (ഇഷ്ടമുള്ളത് ചെയ്യുക) നൽകിയിരിക്കുന്നു. ഉപമേയമായ മനുഷ്യനെ മറച്ചുവെച്ചതിനാൽ ഇത് ഇസ്തിആറ മക്നിയ്യ ആണ്.",
    explanationEn: "Personifying 'time' by giving it a human will ('do as they please'). The poet omitted the human being but kept a human attribute.",
    explanationAr: "شبه الأيام بإنسان له إرادة ويفعل ما يشاء، وحذف المشبه به (الإنسان) وأبقى شيئاً من لوازمه (تفعل ما تشاء) على سبيل الاستعارة المكنية.",
    lineNumber: 1
  },
  {
    id: 3,
    titleMl: "രൂപകം (ഇസ്തിആറ തസ്വ്‌രീഹിയ്യ)",
    titleEn: "Explicit Metaphor (Isti'arah)",
    titleAr: "اِسْتِعَارَةٌ",
    category: "استعارة",
    exampleAr: "حَادِثَةِ اللَّيَالِي",
    explanationMl: "പ്രതിസന്ധികളെയും ദുരന്തങ്ങളെയും ഭയപ്പെടുത്തുന്ന 'രാത്രികൾ' എന്ന് ഉപമിച്ചിരിക്കുന്നു. പ്രതിസന്ധികളിലെ അനിശ്ചിതത്വത്തെ സൂചിപ്പിക്കാനാണിത്.",
    explanationEn: "Metaphorically using 'Nights' to represent terrifying calamities, as darkness traditionally conceals unknown dangers.",
    explanationAr: "استعارة حيث عبر بكلمة (الليالي) لتدل على المصائب المجهولة والمخيفة، لأن الليل بطبيعته يوحي بالوحشة وانعدام الرؤية الواضحة.",
    lineNumber: 3
  },
  {
    id: 4,
    titleMl: "ശബ്ദാലങ്കാരം (ജിനാസ് ഇശ്തിഖാഖി)",
    titleEn: "Derivational Paronomasia (Jinas Ishtiqaqi)",
    titleAr: "جِنَاسٌ اِشْتِقَاقِيٌّ",
    category: "جناس",
    exampleAr: "حَادِثَةِ / حَوَادِثِ",
    explanationMl: "ഒരേ അടിസ്ഥാനത്തിൽ (Root) നിന്നുണ്ടായ രണ്ട് പദങ്ങൾ അടുത്തടുത്ത് വന്നത് കവിതയ്ക്ക് പ്രത്യേക സംഗീതാത്മകത നൽകുന്നു.",
    explanationEn: "Using two words derived from the exact same root creates a beautiful phonetic harmony and rhythm in the poetry.",
    explanationAr: "اتفاق الكلمتين (حادثة) و (حوادث) في حروف الجذر (ح د ث)، مما يعطي جرساً موسيقياً يطرب الأذن ويلفت الانتباه.",
    lineNumber: 3
  },
  {
    id: 5,
    titleMl: "ഉദ്ധരണി (തദ്മീൻ)",
    titleEn: "Incorporation (Tadmin)",
    titleAr: "تَضْمِينٌ",
    category: "بديع",
    exampleAr: "كَمَا قِيلَ السَّخَاءُ",
    explanationMl: "കാലാകാലങ്ങളായി സമൂഹത്തിൽ നിലനിൽക്കുന്ന ഒരു തത്വത്തെയോ പഴഞ്ചൊല്ലിനെയോ സ്വന്തം കവിതയിലേക്ക് വിദഗ്ദ്ധമായി വിളക്കിച്ചേർക്കുന്ന രീതിയാണിത്.",
    explanationEn: "The technique of embedding an ancient, universally accepted proverb into the poet's own verses to reinforce his argument.",
    explanationAr: "استدعاء حكمة مأثورة أو مثل سائر ودمجه في أبيات القصيدة (تغطية العيوب بالسخاء) لتعزيز الفكرة وإعطائها سلطة مجتمعية.",
    lineNumber: 10
  },
  {
    id: 6,
    titleMl: "മറഞ്ഞിരിക്കുന്ന ഉപമ (തശ്ബീഹ് ളിമ്നി)",
    titleEn: "Implicit Simile (Tashbeeh Dhimni)",
    titleAr: "تَشْبِيهٌ ضِمْنِيٌّ",
    category: "تشبيه",
    exampleAr: "وَلا تَرْجُ السَّمَاحَةَ مِنْ بَخِيلٍ / فَمَا فِي النَّارِ لِلظَّمْآنِ مَاءُ",
    explanationMl: "ഉപമാവാചകങ്ങൾ ഉപയോഗിക്കാതെ, പിശുക്കനിൽ നിന്ന് ഔദാര്യം പ്രതീക്ഷിക്കുന്നതിനെ തീയിൽ നിന്ന് വെള്ളം അന്വേഷിക്കുന്നതിനോട് യുക്തിഭദ്രമായി ഉപമിച്ചിരിക്കുന്നു.",
    explanationEn: "An implicit comparison that doesn't use 'like' or 'as'. Expecting generosity from a miser is paralleled to seeking water in a fire.",
    explanationAr: "تشبيه خفي لا يصرح فيه بأركان التشبيه. فقد شبه الشاعر حالة من يرجو الكرم من البخيل بحالة العطشان الذي يبحث عن الماء في النار المشتعلة، والنتيجة في الحالتين: الخيبة التامة.",
    lineNumber: 13
  },
  {
    id: 7,
    titleMl: "സമാന്തര വിപരീതം (അൽ-മുഖാബല)",
    titleEn: "Juxtaposition (Al-Muqabalah)",
    titleAr: "المُقَابَلَةُ",
    category: "طباق",
    exampleAr: "يُنْقِصُهُ التَّأَنِّي / يَزِيدُ فِي الرِّزْقِ العَنَاءُ",
    explanationMl: "'കുറയുക/കൂടുക', 'ശാന്തത/അമിതാധ്വാനം' എന്നീ വിപരീതാശയങ്ങളുടെ ജോഡികളെ ഒരുമിച്ചു കൊണ്ടുവന്ന് ആശയത്തിന് കരുത്തുപകരുന്നു.",
    explanationEn: "Contrasting two pairs of opposites (decrease/increase, calmness/hardship) in a parallel structure to solidify the truth about destiny.",
    explanationAr: "الجمع بين معنيين (ينقص / التأني) والإتيان بما يقابلهما على الترتيب (يزيد / العناء) لتأكيد حتمية الرزق مهما اختلفت أسباب السعي.",
    lineNumber: 15
  },
  {
    id: 8,
    titleMl: "വിപരീതാർത്ഥ പ്രയോഗം (തിബാഖ്)",
    titleEn: "Antithesis (Tibaq)",
    titleAr: "طِبَاقٌ",
    category: "طباق",
    exampleAr: "حُزْنٌ × سُرُورٌ / بُؤْسٌ × رَخَاءُ",
    explanationMl: "ദുഃഖം-സന്തോഷം, ദാരിദ്ര്യം-സമൃദ്ധി എന്നിങ്ങനെ വിപരീത പദങ്ങൾ അടുത്തടുത്ത് പ്രയോഗിച്ച് ലോകത്തിന്റെ മാറ്റങ്ങളെ അടയാളപ്പെടുത്തുന്നു.",
    explanationEn: "Bringing words of exact opposite meanings together to beautifully illustrate that nothing in this world is permanent.",
    explanationAr: "الجمع بين المتضادات اللفظية في بيت واحد لتأكيد قانون التقلب وعدم ثبات أحوال الدنيا.",
    lineNumber: 17
  },
  {
    id: 9,
    titleMl: "കരുതൽ പ്രയോഗം (കിനായത്ത്)",
    titleEn: "Metonymy (Kinayah)",
    titleAr: "كِنَايَةٌ",
    category: "كناية",
    exampleAr: "ضَاقَ الفَضَاءُ",
    explanationMl: "മനുഷ്യന്റെ നിസ്സഹായതയെയും രക്ഷപ്പെടാൻ ഒരിടത്തുമില്ല എന്ന അവസ്ഥയെയും 'ഇടം ഇടുങ്ങിയതാകും' എന്ന പ്രയോഗത്തിലൂടെ അർത്ഥമാക്കുന്നു.",
    explanationEn: "Using 'the space narrows' as a metonymy to express extreme human helplessness and the impossibility of escaping death.",
    explanationAr: "كناية عن العجز التام وانقطاع الحيل عند نزول قضاء الله المبرم.",
    lineNumber: 24
  },
  {
    id: 10,
    titleMl: "വിപരീതാർത്ഥ പ്രയോഗം (തിബാഖ്)",
    titleEn: "Antithesis (Tibaq)",
    titleAr: "طِبَاقٌ",
    category: "طباق",
    exampleAr: "وَاسِعَةٌ / ضَاقَ",
    explanationMl: "ഭൂമിയുടെ 'വിശാലതയും', വിധി വരുമ്പോഴുണ്ടാകുന്ന 'ഇടുക്കവും' തമ്മിലുള്ള വൈരുദ്ധ്യം മനുഷ്യന്റെ നിസ്സഹായത വ്യക്തമാക്കുന്നു.",
    explanationEn: "The spatial contrast of the 'vast' universe suddenly becoming severely 'narrow' during death highlights psychological collapse.",
    explanationAr: "طباق إيجاب لتصوير المفارقة المكانية بين سعة الأرض فيزيائياً وضيقها سيكولوجياً عند نزول الموت.",
    lineNumber: 24
  },
  {
    id: 11,
    titleMl: "കാവ്യ സമമിതി (റദ്ദുൽ അജസ് അലസ്സ്വദ്ർ)",
    titleEn: "Cyclical Symmetry (Radd al-A'jaz 'ala al-Sadr)",
    titleAr: "رَدُّ العَجُزِ عَلَى الصَّدْرِ",
    category: "بديع",
    exampleAr: "دَعِ الأَيَّامَ (في البداية والنهاية)",
    explanationMl: "കവിതയുടെ അവസാന വരിയെ ആദ്യ വരിയിലെ വാക്കുകൾ തന്നെ ഉപയോഗിച്ച് അവസാനിപ്പിച്ച് കവിതയ്ക്ക് പൂർണ്ണമായ ഒരു സമമിതി നൽകുന്ന രീതി.",
    explanationEn: "A masterclass rhetorical device where the poet ends the poem by looping directly back to the very first opening command.",
    explanationAr: "إعادة اللفظة التي بدأ بها مطلع القصيدة (دع الأيام) في ختامها، ليعطي للنص إغلاقاً متيناً وتأكيداً نهائياً على التسليم الوجودي.",
    lineNumber: 25
  }
];
`;

fs.writeFileSync(balaghaPath, newBalaghaData);
console.log('Updated questionsData.ts and balaghaData.ts');

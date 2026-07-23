import { Poem } from '../../types';

export const poemData: Poem = {
  id: 'shafiee-sitata',
  titleAr: 'شروط طلب العلم (أخي لن تنال العلم)',
  titleMl: 'അറിവ് നേടാനുള്ള ആറ് നിബന്ധനകൾ',
  titleEn: 'The Six Conditions of Knowledge',
  poetAr: 'الإمام الشافعي',
  poetMl: 'ഇമാം ശാഫിഈ (റ)',
  meter: 'البحر الوافر',
  totalLines: 4,
  lines: [
    {
      id: 1,
      ar: 'أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ',
      words: [
        { ar: 'أَخِي', ml: 'എന്റെ സഹോദരാ', en: 'My brother', irab: 'منادى مضاف منصوب وعلامة نصبه الفتحة المقدرة' },
        { ar: 'لَنْ', ml: 'ഒരിക്കലുമില്ല', en: 'Will not', irab: 'حرف نفي ونصب واستقبال' },
        { ar: 'تَنَالَ', ml: 'നീ നേടുക', en: 'You attain', irab: 'فعل مضارع منصوب بلن' },
        { ar: 'العِلْمَ', ml: 'അറിവ്', en: 'Knowledge', irab: 'مفعول به منصوب' },
        { ar: 'إِلاَّ', ml: 'ഒഴികെ', en: 'Except', irab: 'أداة حصر واستثناء' },
        { ar: 'بِسِتَّةٍ', ml: 'ആറ് കാര്യങ്ങൾ കൊണ്ട്', en: 'With six (things)', irab: 'جار ومجرور' }
      ]
    },
    {
      id: 2,
      ar: 'سَأُنْبِيكَ عَنْ تَفْصِيلِهَا بِبَيَانِ',
      words: [
        { ar: 'سَأُنْبِيكَ', ml: 'ഞാൻ നിന്നെ അറിയിക്കാം', en: 'I will inform you', irab: 'السين للمستقبل، أنبي: فعل مضارع، والكاف: مفعول به' },
        { ar: 'عَنْ', ml: 'കുറിച്ച്', en: 'About', irab: 'حرف جر' },
        { ar: 'تَفْصِيلِهَا', ml: 'അവയുടെ വിശദീകരണം', en: 'Their details', irab: 'اسم مجرور وعلامة جره الكسرة، والهاء: مضاف إليه' },
        { ar: 'بِبَيَانِ', ml: 'വ്യക്തമായി', en: 'With clarity', irab: 'جار ومجرور متعلقان بالفعل (أنبي)' }
      ]
    },
    {
      id: 3,
      ar: 'ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَبُلْغَةٌ',
      words: [
        { ar: 'ذَكَاءٌ', ml: 'ബുദ്ധിശക്തി', en: 'Intelligence', irab: 'بدل تفصيل من (ستة) مجرور، أو خبر لمبتدأ محذوف تقديره (هي ذكاء) مرفوع' },
        { ar: 'وَحِرْصٌ', ml: 'അതിയായ ആഗ്രഹം', en: 'And eagerness', irab: 'الواو حرف عطف، حرص: معطوف' },
        { ar: 'وَاجْتِهَادٌ', ml: 'കഠിനാധ്വാനം', en: 'And diligence', irab: 'معطوف' },
        { ar: 'وَبُلْغَةٌ', ml: 'ഉപജീവനത്തിനുള്ളത്', en: 'And sustenance', irab: 'معطوف' }
      ]
    },
    {
      id: 4,
      ar: 'وَصُحْبَةُ أُسْتَاذٍ وَطُولُ زَمَانِ',
      words: [
        { ar: 'وَصُحْبَةُ', ml: 'സഹവാസം', en: 'And companionship', irab: 'معطوف' },
        { ar: 'أُسْتَاذٍ', ml: 'അധ്യാപകന്റെ', en: 'Of a teacher', irab: 'مضاف إليه مجرور' },
        { ar: 'وَطُولُ', ml: 'ദീർഘമായ', en: 'And length', irab: 'معطوف' },
        { ar: 'زَمَانِ', ml: 'കാലം', en: 'Of time', irab: 'مضاف إليه مجرور' }
      ],
      noteMl: 'അറിവ് നേടുന്നതിന് പ്രധാനമായും ആറ് നിബന്ധനകളാണുള്ളതെന്ന് ഇമാം വ്യക്തമാക്കുന്നു. ഇതിൽ ഒന്നെങ്കിലും കുറഞ്ഞാൽ പരിപൂർണ്ണത ലഭിക്കില്ല.',
      noteEn: 'The Imam clarifies that there are six primary conditions for attaining knowledge. True mastery is impossible without all six.'
    }
  ],
  couplets: [
    {
      id: 0,
      lineIndices: [0, 1],
      mlMeaning: 'എന്റെ സഹോദരാ, ആറ് കാര്യങ്ങൾ കൊണ്ടല്ലാതെ നിനക്ക് അറിവ് നേടാനാവില്ല. ഞാൻ അവ വ്യക്തമായി പറഞ്ഞുതരാം.',
      enMeaning: 'My brother, you will not attain knowledge except through six things. I will clearly inform you of their details.',
      arSharah: 'ينصح الإمام طالب العلم بأنه لن يدرك العلم ويصل إلى درجاته العالية إلا إذا توفرت فيه ستة شروط أساسية، ويعده بأن يفصلها له بوضوح وجلاء حتى تكون له دستوراً في حياته الأكاديمية.'
    },
    {
      id: 1,
      lineIndices: [2, 3],
      mlMeaning: 'ബുദ്ധിശക്തി, അതിയായ താല്പര്യം, കഠിനാധ്വാനം, ജീവിക്കാനുള്ള സാമ്പത്തിക ശേഷി, നല്ലൊരു ഗുരുവുമായുള്ള സഹവാസം, ദീർഘകാലത്തെ പഠനം എന്നിവയാണവ.',
      enMeaning: 'Intelligence, eagerness, diligence, sustenance, the companionship of a teacher, and a long length of time.',
      arSharah: 'يفصل الإمام الشروط الستة وهي: الفهم السليم والذكاء الطبيعي والمكتسب، والرغبة الشديدة في التعلم، وبذل الجهد والتعب في طلبه، وامتلاك ما يكفي من المال للعيش وعدم الانشغال بطلب الرزق، وملازمة معلم خبير يأخذ عنه المنهج والأدب، وأخيراً تخصيص وقت طويل لذلك، فالعلم لا ينال بين يوم وليلة بل هو رحلة عمر كاملة.'
    }
  ],
  sections: [
    {
      id: 1,
      startLine: 1,
      endLine: 4,
      titleAr: "الشروط الستة لتحصيل العلم الحقيقي",
      titleMl: "യഥാർത്ഥ വിജ്ഞാനം നേടാനുള്ള ആറ് അടിസ്ഥാന നിബന്ധനകൾ",
      titleEn: "The Six Foundational Conditions for Attaining True Knowledge",
      arSummary: "هذه الأبيات الأربعة تمثل منهجاً تربوياً متكاملاً ودستوراً لطالب العلم. الإمام الشافعي لا يتحدث هنا عن مجرد قراءة الكتب أو جمع المعلومات، بل عن 'تحصيل العلم الحقيقي' وبناء العقلية المعرفية الراسخة. يقسم الشافعي هذه الشروط الستة ببراعة فائقة إلى ثلاثة أبعاد أساسية: البعد الأول هو 'القدرات الذاتية والنفسية'، وتتمثل في الذكاء الفطري والمكتسب، والحرص الشديد والشغف الداخلي الذي لا ينطفئ، والاجتهاد والمثابرة التي تتحدى الصعاب. البعد الثاني هو 'المتطلبات المادية'، وتتمثل في البلغة، أي توفر ما يكفي من الرزق والعيش الكريم الذي يضمن للطالب استقرار صحته النفسية وتفرغ ذهنه بعيداً عن هموم الحياة اليومية. أما البعد الثالث فهو 'المتطلبات الاجتماعية والزمنية'، وتتمثل في ضرورة ملازمة أستاذ خبير يوجهه ويعلمه الأدب قبل العلم، ثم إعطاء هذا المشروع المعرفي حقه من 'طول الزمان'؛ لأن بناء العقل يحتاج إلى تدرج وتراكم ولا يقبل الاستعجال. لا يمكن لطالب العلم أن يصل إلى الإبداع والرسوخ إلا باجتماع هذه العناصر الستة معاً، فأي خلل في أحدها سيؤدي حتماً إلى نقص وضعف في التكوين العلمي.",
      mlSummary: "ഈ നാല് വരികൾ ഒരു സമ്പൂർണ്ണ വിദ്യാഭ്യാസ പദ്ധതിയെയും വിദ്യാർത്ഥികൾക്കുള്ള ഒരു ഭരണഘടനയെയും പ്രതിനിധീകരിക്കുന്നത്. കേവലം പുസ്തകം വായിക്കുന്നതിനെക്കുറിച്ചോ വിവരങ്ങൾ ശേഖരിക്കുന്നതിനെക്കുറിച്ചോ അല്ല, മറിച്ച് 'യഥാർത്ഥ അറിവ്' നേടിയെടുക്കുന്നതിനെക്കുറിച്ചും ഒരു വൈജ്ഞാനിക ചിന്താഗതി കെട്ടിപ്പടുക്കുന്നതിനെക്കുറിച്ചും ആണ് ഇമാം സംസാരിക്കുന്നത്. ഈ ആറ് നിബന്ധനകളെ ഇമാം അതിവിദഗ്ദ്ധമായി മൂന്ന് പ്രധാന തലങ്ങളായി തിരിക്കുന്നു: 1. വ്യക്തിപരവും മാനസികവുമായ കഴിവുകൾ: ജന്മനായുള്ളതും ആർജ്ജിച്ചെടുക്കുന്നതുമായ ബുദ്ധിശക്തി, അടങ്ങാത്ത താല്പര്യം, പ്രതിസന്ധികളെ തരണം ചെയ്യുന്ന കഠിനാധ്വാനം എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു. 2. ഭൗതിക ആവശ്യങ്ങൾ: വിദ്യാർത്ഥിക്ക് തന്റെ പഠനത്തിൽ മാത്രം ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ ആവശ്യമായ സാമ്പത്തിക ഭദ്രതയും ജീവിത സാഹചര്യവും (بلغة). 3. സാമൂഹിക-കാലിക ആവശ്യങ്ങൾ: കേവലം അറിവ് മാത്രമല്ല, അച്ചടക്കവും ചിന്താരീതിയും പഠിപ്പിച്ചുതരുന്ന ഒരു നല്ല ഗുരുവുമായുള്ള നിരന്തര സമ്പർക്കം, കൂടാതെ വിജ്ഞാനം പക്വത പ്രാപിക്കാൻ ആവശ്യമായ ദീർഘകാലത്തെ സമയം. ചുരുക്കത്തിൽ, ഈ ആറ് കാര്യങ്ങളും ഒത്തുചേർന്നാൽ മാത്രമേ ഒരാൾക്ക് വിജ്ഞാനത്തിൽ ഉന്നത നിലവാരത്തിലും പൂർണ്ണതയിലും എത്താൻ കഴിയൂ. ഇതിൽ ഒന്നിന്റെയെങ്കിലും അഭാവം വിജ്ഞാന സമ്പാദനത്തെ സാരമായി ബാധിക്കും.",
      enSummary: "These four lines represent a complete pedagogical methodology and a universal constitution for any seeker of knowledge. Imam Al-Shafi'i elegantly categorizes the requirements for true scholarship into three fundamental domains: First, 'Internal & Psychological Capabilities'—encompassing intelligence (both innate and acquired), unyielding eagerness and internal passion, and extreme diligence to overcome obstacles. Second, 'Material Prerequisites'—represented by sufficient sustenance, ensuring the student's psychological stability and freeing their mind from the daily anxieties of survival. Third, 'Socio-Temporal Conditions'—highlighting the absolute necessity of close mentorship under a master teacher who imparts wisdom and etiquette alongside raw knowledge, coupled with a vast expanse of time. True intellectual maturity and neural consolidation require immense time and patience; there are no shortcuts to wisdom. Mastery is only achieved when all six conditions synthesize harmoniously. A deficiency in any single element will inevitably lead to a flawed educational foundation."
    }
  ]
};

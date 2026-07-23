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
      arSummary: "هذه الأبيات الأربعة تمثل منهجاً تربوياً متكاملاً. الإمام الشافعي لا يتحدث هنا عن مجرد قراءة الكتب، بل عن 'تحصيل العلم' وبناء العقلية المعرفية. يقسم الشافعي هذه الشروط ببراعة إلى: قدرات ذاتية (الذكاء والحرص والاجتهاد)، ومتطلبات مادية (البلغة أي ما يكفي من العيش)، ومتطلبات اجتماعية وزمنية (ملازمة الأستاذ وتكريس وقت طويل). لا يمكن لطالب العلم أن يصل إلى الإبداع والرسوخ إلا باجتماع هذه العناصر الستة، فأي خلل في أحدها سيؤدي إلى نقص في التكوين العلمي.",
      mlSummary: "ഈ നാല് വരികൾ ഒരു സമ്പൂർണ്ണ വിദ്യാഭ്യാസ പദ്ധതിയെയാണ് പ്രതിനിധീകരിക്കുന്നത്. കേവലം പുസ്തകം വായിക്കുന്നതിനെക്കുറിച്ചല്ല, മറിച്ച് യഥാർത്ഥ അറിവ് നേടിയെടുക്കുന്നതിനെക്കുറിച്ചാണ് ഇമാം സംസാരിക്കുന്നത്. ഈ ആറ് നിബന്ധനകളെ മൂന്നായി തിരിക്കാം: 1. വ്യക്തിപരമായ കഴിവുകൾ (ബുദ്ധി, താല്പര്യം, കഠിനാധ്വാനം), 2. ഭൗതിക ആവശ്യങ്ങൾ (ഉപജീവനത്തിനുള്ള വക), 3. സാമൂഹിക-കാലിക ആവശ്യങ്ങൾ (ഗുരുവുമായുള്ള സഹവാസം, ദീർഘകാലത്തെ സമയം). ഈ ആറ് കാര്യങ്ങളും ഒത്തുചേർന്നാൽ മാത്രമേ ഒരാൾക്ക് വിജ്ഞാനത്തിൽ ഉന്നത നിലവാരത്തിൽ എത്താൻ കഴിയൂ.",
      enSummary: "These four lines represent a complete pedagogical methodology. Imam Al-Shafi'i elegantly categorizes the requirements for true scholarship into three domains: Internal capabilities (intelligence, eagerness, and extreme diligence), material prerequisites (sufficient sustenance to survive without being completely distracted by labor), and socio-temporal conditions (the close mentorship of a master teacher and a vast expanse of time). Mastery is only achieved when all six conditions synthesize."
    }
  ]
};

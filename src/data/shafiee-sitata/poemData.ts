import { Poem } from '../../types';

export const poemData: Poem = {
  id: 'shafiee-sitata',
  titleAr: 'شروط طلب العلم (أخي لن تنال العلم)',
  titleMl: 'അറിവ് നേടാനുള്ള ആറ് നിബന്ധനകൾ',
  titleEn: 'The Six Conditions of Knowledge',
  poetAr: 'الإمام الشافعي',
  poetMl: 'ഇമാം ശാഫിഈ (റ)',
  meter: 'البحر الوافر',
  totalLines: 2,
  lines: [
    {
      id: 1,
      ar: 'أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ\nسَأُنْبِيكَ عَنْ تَفْصِيلِهَا بِبَيَانِ',
      words: [
        { ar: 'أَخِي', ml: 'എന്റെ സഹോദരാ', en: 'My brother', irab: 'منادى مضاف' },
        { ar: 'لَنْ', ml: 'ഒരിക്കലുമില്ല', en: 'Will not', irab: 'حرف نفي ونصب' },
        { ar: 'تَنَالَ', ml: 'നീ നേടുക', en: 'You attain', irab: 'فعل مضارع منصوب' },
        { ar: 'العِلْمَ', ml: 'അറിവ്', en: 'Knowledge', irab: 'مفعول به' },
        { ar: 'إِلاَّ', ml: 'ഒഴികെ', en: 'Except', irab: 'أداة حصر' },
        { ar: 'بِسِتَّةٍ', ml: 'ആറ് കാര്യങ്ങൾ കൊണ്ട്', en: 'With six', irab: 'جار ومجرور' },
        { ar: 'سَأُنْبِيكَ', ml: 'ഞാൻ നിന്നെ അറിയിക്കാം', en: 'I will inform you', irab: 'فعل مضارع ومفعول به' },
        { ar: 'عَنْ', ml: 'കുറിച്ച്', en: 'About', irab: 'حرف جر' },
        { ar: 'تَفْصِيلِهَا', ml: 'അവയുടെ വിശദീകരണം', en: 'Their details', irab: 'اسم مجرور ومضاف إليه' },
        { ar: 'بِبَيَانِ', ml: 'വ്യക്തമായി', en: 'With clarity', irab: 'جار ومجرور' }
      ],
      noteMl: 'അറിവ് നേടുന്നതിന് പ്രധാനമായും ആറ് നിബന്ധനകളാണുള്ളതെന്ന് ഇമാം വ്യക്തമാക്കുന്നു.',
      noteEn: 'The Imam clarifies that there are six primary conditions for attaining knowledge.'
    },
    {
      id: 2,
      ar: 'ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَبُلْغَةٌ\nوَصُحْبَةُ أُسْتَاذٍ وَطُولُ زَمَانِ',
      words: [
        { ar: 'ذَكَاءٌ', ml: 'ബുദ്ധിശക്തി', en: 'Intelligence', irab: 'بدل' },
        { ar: 'وَحِرْصٌ', ml: 'അതിയായ ആഗ്രഹം', en: 'And eagerness', irab: 'معطوف' },
        { ar: 'وَاجْتِهَادٌ', ml: 'കഠിനാധ്വാനം', en: 'And diligence', irab: 'معطوف' },
        { ar: 'وَبُلْغَةٌ', ml: 'ഉപജീവനത്തിനുള്ളത്', en: 'And sustenance', irab: 'معطوف' },
        { ar: 'وَصُحْبَةُ', ml: 'സഹവാസം', en: 'And companionship', irab: 'معطوف' },
        { ar: 'أُسْتَاذٍ', ml: 'അധ്യാപകന്റെ', en: 'Of a teacher', irab: 'مضاف إليه' },
        { ar: 'وَطُولُ', ml: 'ദീർഘമായ', en: 'And length', irab: 'معطوف' },
        { ar: 'زَمَانِ', ml: 'കാലം', en: 'Of time', irab: 'مضاف إليه' }
      ]
    }
  ],
  couplets: [
    {
      id: 1,
      lineIndices: [1, 2],
      mlMeaning: 'എന്റെ സഹോദരാ, ആറ് കാര്യങ്ങൾ കൊണ്ടല്ലാതെ നിനക്ക് അറിവ് നേടാനാവില്ല. ഞാൻ അവ വ്യക്തമായി പറഞ്ഞുതരാം: ബുദ്ധിശക്തി, അതിയായ താല്പര്യം, കഠിനാധ്വാനം, സാമ്പത്തിക ശേഷി, നല്ലൊരു ഗുരുവുമായുള്ള സഹവാസം, ദീർഘകാലത്തെ പഠനം എന്നിവയാണവ.',
      enMeaning: 'My brother, you will not attain knowledge except through six things, I will clearly inform you of their details: Intelligence, eagerness, diligence, sustenance, the companionship of a teacher, and a long length of time.',
      arSharah: 'ينصح الإمام طالب العلم بأنه لن يدرك العلم ويصل إلى درجاته العالية إلا إذا توفرت فيه ستة شروط، وهي: الذكاء والفهم، والحرص الشديد على التعلم، وبذل الجهد والتعب في طلبه، وامتلاك ما يكفي من المال للعيش وعدم الانشغال بطلب الرزق، وملازمة معلم خبير يأخذ عنه، وأخيراً تخصيص وقت طويل لذلك، فالعلم لا ينال بين يوم وليلة.'
    }
  ]
};

import { Poem } from '../../types';

export const poemData: Poem = {
  id: 'shafiee-lisan',
  titleAr: 'احْفَظْ لِسَانَكَ (خطورة الكلمة)',
  titleMl: 'നാവിനെ സൂക്ഷിക്കുക',
  titleEn: 'Guard Your Tongue',
  poetAr: 'الإمام الشافعي',
  poetMl: 'ഇമാം ശാഫിഈ (റ)',
  meter: 'البحر الكامل',
  totalLines: 4,
  lines: [
    {
      id: 1,
      ar: 'احْفَظْ لِسَانَكَ أَيُّهَا الإِنْسَانُ',
      words: [
        { ar: 'احْفَظْ', ml: 'നീ സൂക്ഷിക്കുക', en: 'Guard / Protect', irab: 'فعل أمر مبني على السكون، والفاعل أنت' },
        { ar: 'لِسَانَكَ', ml: 'നിന്റെ നാവിനെ', en: 'Your tongue', irab: 'مفعول به منصوب وعلامة نصبه الفتحة، والكاف مضاف إليه' },
        { ar: 'أَيُّهَا', ml: 'ഹേ', en: 'O', irab: 'منادى مبني على الضم في محل نصب، والهاء للتنبيه' },
        { ar: 'الإِنْسَانُ', ml: 'മനുഷ്യാ', en: 'Human / Person', irab: 'بدل أو عطف بيان مرفوع بالضمة' }
      ]
    },
    {
      id: 2,
      ar: 'لا يَلْدَغَنَّكَ إِنَّهُ ثُعْبَانُ',
      words: [
        { ar: 'لا', ml: 'അരുത്', en: 'Do not (Let it not)', irab: 'ناهية جازمة' },
        { ar: 'يَلْدَغَنَّكَ', ml: 'അത് നിന്നെ കടിക്ക(രുത്)', en: 'Bite you / Sting you', irab: 'فعل مضارع مبني على الفتح لاتصاله بنون التوكيد في محل جزم، والكاف مفعول به' },
        { ar: 'إِنَّهُ', ml: 'തീർച്ചയായും അത്', en: 'Indeed it is', irab: 'إن حرف توكيد ونصب، والهاء اسمها' },
        { ar: 'ثُعْبَانُ', ml: 'ഒരു പാമ്പാണ്', en: 'A snake / Serpent', irab: 'خبر إن مرفوع بالضمة' }
      ]
    },
    {
      id: 3,
      ar: 'كَمْ فِي المَقَابِرِ مِنْ قَتِيلِ لِسَانِهِ',
      words: [
        { ar: 'كَمْ', ml: 'എത്രയെത്ര', en: 'How many', irab: 'خبرية تكثيرية مبنية على السكون في محل رفع مبتدأ' },
        { ar: 'فِي', ml: 'ൽ', en: 'In', irab: 'حرف جر' },
        { ar: 'المَقَابِرِ', ml: 'ഖബറിടങ്ങളി', en: 'The graveyards', irab: 'اسم مجرور والجار والمجرور خبر (أو متعلق بالخبر)' },
        { ar: 'مِنْ', ml: 'നിന്നും (ആയി)', en: 'Of (as)', irab: 'حرف جر زائد للتأكيد (أو لبيان التمييز)' },
        { ar: 'قَتِيلِ', ml: 'കൊല്ലപ്പെട്ടവർ', en: 'Killed / Victims', irab: 'تمييز مجرور (مضاف)' },
        { ar: 'لِسَانِهِ', ml: 'തന്റെ നാവുകാരണം', en: 'By his tongue', irab: 'مضاف إليه مجرور، والهاء مضاف إليه' }
      ]
    },
    {
      id: 4,
      ar: 'كَانَتْ تَهَابُ لِقَاءَهُ الشُّجْعَانُ',
      words: [
        { ar: 'كَانَتْ', ml: 'ആയിരുന്നു', en: 'Were (Used to)', irab: 'فعل ماض ناقص، والتاء للتأنيث' },
        { ar: 'تَهَابُ', ml: 'ഭയപ്പെട്ടിരുന്നു', en: 'Fear / Dread', irab: 'فعل مضارع مرفوع، والجملة خبر كان' },
        { ar: 'لِقَاءَهُ', ml: 'അവനെ കണ്ടുമുട്ടാൻ', en: 'Meeting him', irab: 'مفعول به منصوب، والهاء مضاف إليه' },
        { ar: 'الشُّجْعَانُ', ml: 'ധീരന്മാർ (പോലും)', en: 'The brave ones', irab: 'اسم كان مرفوع (أو فاعل لتهاب والجملة خبر كان)' }
      ]
    }
  ],
  couplets: [
    {
      id: 0,
      lineIndices: [0, 1],
      mlMeaning: 'ഹേ മനുഷ്യാ, നീ നിന്റെ നാവിനെ സൂക്ഷിക്കുക. അത് നിന്നെ കൊത്താൻ അനുവദിക്കരുത്, കാരണം അതൊരു വിഷപ്പാമ്പാണ്.',
      enMeaning: 'O human, guard your tongue! Do not let it bite you, for it is indeed a venomous snake.',
      arSharah: 'ينادي الشافعي الإنسان محذراً إياه من خطورة الكلمة. يشبه اللسان بالثعبان السام، لأن الكلمة السيئة التي تخرج من الفم قد ترتد على صاحبها بالمهالك وتلدغه كما يلدغ الثعبان صاحبه.'
    },
    {
      id: 1,
      lineIndices: [2, 3],
      mlMeaning: 'തന്റെ സ്വന്തം നാവുകാരണം കൊലചെയ്യപ്പെട്ട എത്രയെത്ര ആളുകളാണ് ഖബറിടങ്ങളിൽ ഉറങ്ങുന്നത്! ജീവിച്ചിരുന്നപ്പോൾ എത്ര വലിയ ധീരന്മാർ പോലും അവരെ നേരിടാൻ ഭയപ്പെട്ടിരുന്നു (എന്നിട്ടും സ്വന്തം നാവ് അവരെ കൊന്നുകളഞ്ഞു).',
      enMeaning: 'How many victims of their own tongues lie in the graveyards! These were men whose encounters even the bravest warriors used to fear (yet they were killed by a careless word).',
      arSharah: 'يضرب الشافعي مثلاً واقعياً ببيان أن المقابر مليئة بأشخاص أبطال وأقوياء كانت الشجعان تخاف مواجهتهم في المعارك، ولكنهم سقطوا قتلى بسبب كلمة طائشة أو زلة لسان جرت عليهم عداوات لم يقدروا عليها.'
    }
  ],
  sections: [
    {
      id: 1,
      startLine: 1,
      endLine: 4,
      titleAr: "الكلمة كأداة تدمير ذاتي: خطورة زلة اللسان",
      titleMl: "വാക്കുകൾ വരുത്തുന്ന വിനകൾ: നാവിനെ സൂക്ഷിക്കേണ്ടതിന്റെ ആവശ്യകത",
      titleEn: "Words as Weapons of Self-Destruction: The Danger of a Slip of the Tongue",
      arSummary: "في هذه الأبيات الأربعة، يطرح الإمام الشافعي قضية أمنية واجتماعية خطيرة تتعلق بـ 'ضبط اللسان'. يشبه اللسان بأخطر الكائنات (الثعبان)، لأن الكلمة إذا خرجت لا يمكن استردادها، وقد تحمل سماً قاتلاً يدمر العلاقات، أو يشعل الحروب، أو يتسبب في هلاك صاحبها. يبرز الشافعي مفارقة عجيبة: القوة البدنية والشجاعة لا تكفي لحماية الإنسان إذا كان يفتقر إلى الحكمة في كلامه. فكم من بطل مغوار لا يقهر في ساحة المعركة، قُتل بسبب زلة لسان غبية جلبت له عداوة قاتلة.",
      mlSummary: "നമ്മുടെ വാക്കുകൾ എത്രത്തോളം അപകടകരമാണെന്ന് ഈ കവിത നമ്മെ ഓർമ്മിപ്പിക്കുന്നു. നാവിനെ ഒരു പാമ്പിനോടാണ് ഇമാം ഉപമിച്ചിരിക്കുന്നത്. പാമ്പ് കൊത്തിയാൽ മരണം സംഭവിക്കുന്നത് പോലെത്തന്നെ, സൂക്ഷിക്കാതെ ഉപയോഗിക്കുന്ന നാവ് മനുഷ്യനെ നാശത്തിലേക്ക് നയിക്കും. സ്വന്തം നാവുകാരണം ജീവൻ നഷ്ടപ്പെട്ട എത്രയോ ആളുകൾ ഖബറിടങ്ങളിലുണ്ട്. അവരിൽ പലരും വലിയ ധീരന്മാരായിരുന്നു. യുദ്ധക്കളത്തിൽ ആർക്കും അവരെ തോൽപ്പിക്കാൻ കഴിഞ്ഞിരുന്നില്ല. പക്ഷേ, ഒരൊറ്റ മോശം വാക്ക് അവരെ മരണത്തിലേക്ക് നയിച്ചു. അതിനാൽ ആയുധങ്ങളേക്കാൾ കൂടുതൽ നാം സൂക്ഷിക്കേണ്ടത് സ്വന്തം നാവിനെയാണെന്ന് ഈ വരികൾ പഠിപ്പിക്കുന്നു.",
      enSummary: "In these four powerful verses, Imam Al-Shafi'i addresses the critical issue of 'tongue control'. He metaphorically transforms the tongue into a venomous snake, emphasizing that once a word is released, it cannot be retracted and may carry a fatal poison that destroys relationships, incites wars, or kills its owner. Al-Shafi'i highlights a profound paradox: physical strength and battlefield bravery are useless if a person lacks verbal wisdom. Many legendary, invincible warriors lie in their graves not because they were bested in combat, but because a careless slip of the tongue brought upon them fatal enmity."
    }
  ]
};

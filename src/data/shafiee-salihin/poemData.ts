import { Poem } from '../../types';

export const poemData: Poem = {
  id: 'shafiee-salihin',
  titleAr: 'أُحِبُّ الصَّالِحِينَ وَلَسْتُ مِنْهُمْ',
  titleMl: 'ഞാൻ സജ്ജനങ്ങളെ സ്നേഹിക്കുന്നു, എങ്കിലും ഞാൻ അവരിൽ പെട്ടവനല്ല',
  titleEn: 'I Love the Righteous, Though I am Not of Them',
  poetAr: 'الإمام الشافعي',
  poetMl: 'ഇമാം ശാഫിഈ (റ)',
  meter: 'البحر الوافر',
  totalLines: 4,
  lines: [
    {
      id: 1,
      ar: 'أُحِبُّ الصَّالِحِينَ وَلَسْتُ مِنْهُمْ',
      words: [
        { ar: 'أُحِبُّ', ml: 'ഞാൻ സ്നേഹിക്കുന്നു', en: 'I love', irab: 'فعل مضارع مرفوع، والفاعل مستتر تقديره أنا' },
        { ar: 'الصَّالِحِينَ', ml: 'സജ്ജനങ്ങളെ / നല്ലവരെ', en: 'The righteous', irab: 'مفعول به منصوب وعلامة نصبه الياء لأنه جمع مذكر سالم' },
        { ar: 'وَلَسْتُ', ml: 'ഞാനല്ലെങ്കിലും', en: 'And I am not', irab: 'الواو حالية، ليس: فعل ماض ناقص، والتاء اسم ليس' },
        { ar: 'مِنْهُمْ', ml: 'അവരിൽ പെട്ടവൻ', en: 'Of them', irab: 'جار ومجرور شبه جملة في محل نصب خبر ليس' }
      ]
    },
    {
      id: 2,
      ar: 'لَعَلِّي أَنْ أَنَالَ بِهِمْ شَفَاعَةْ',
      words: [
        { ar: 'لَعَلِّي', ml: 'എനിക്ക് കഴിഞ്ഞേക്കാം', en: 'Perhaps I', irab: 'لعل: حرف ترج ونصب، والياء اسمها' },
        { ar: 'أَنْ', ml: 'എന്ന്', en: 'That', irab: 'حرف مصدري ونصب' },
        { ar: 'أَنَالَ', ml: 'എനിക്ക് നേടാൻ', en: 'I may attain', irab: 'فعل مضارع منصوب بأن' },
        { ar: 'بِهِمْ', ml: 'അവർ മുഖേന', en: 'Through them', irab: 'جار ومجرور متعلقان بـ(أنال)' },
        { ar: 'شَفَاعَةْ', ml: 'ശുപാർശ', en: 'Intercession', irab: 'مفعول به منصوب بالفتحة (وسكن للوقف)' }
      ]
    },
    {
      id: 3,
      ar: 'وَأَكْرَهُ مَنْ تِجَارَتُهُ المَعَاصِي',
      words: [
        { ar: 'وَأَكْرَهُ', ml: 'ഞാൻ വെറുക്കുകയും ചെയ്യുന്നു', en: 'And I hate', irab: 'الواو عاطفة، أكره: فعل مضارع مرفوع' },
        { ar: 'مَنْ', ml: 'ഏതൊരുവനെയാണോ', en: 'Whoever', irab: 'اسم موصول مبني في محل نصب مفعول به' },
        { ar: 'تِجَارَتُهُ', ml: 'അവന്റെ കച്ചവടം (പ്രവർത്തി)', en: 'His trade (deeds)', irab: 'مبتدأ مرفوع، والهاء مضاف إليه' },
        { ar: 'المَعَاصِي', ml: 'പാപങ്ങൾ', en: 'Sins', irab: 'خبر المبتدأ، والجملة صلة الموصول لا محل لها' }
      ]
    },
    {
      id: 4,
      ar: 'وَإِنْ كُنَّا سَوَاءً فِي البِضَاعَةْ',
      words: [
        { ar: 'وَإِنْ', ml: 'എങ്കിലും', en: 'Even if', irab: 'الواو حالية، إن: حرف شرط جازم' },
        { ar: 'كُنَّا', ml: 'നാമാണെങ്കിലും', en: 'We were', irab: 'كان: فعل ماض ناقص مبني على السكون، و(نا) اسم كان' },
        { ar: 'سَوَاءً', ml: 'തുല്യർ', en: 'Equal / Same', irab: 'خبر كان منصوب وعلامة نصبه الفتحة' },
        { ar: 'فِي', ml: 'ൽ', en: 'In', irab: 'حرف جر' },
        { ar: 'البِضَاعَةْ', ml: 'ചരക്കുകളിൽ', en: 'The merchandise / Goods', irab: 'اسم مجرور (وسكن للوقف)' }
      ]
    }
  ],
  couplets: [
    {
      id: 0,
      lineIndices: [0, 1],
      mlMeaning: 'ഞാൻ സജ്ജനങ്ങളെയും നല്ല ആളുകളെയും സ്നേഹിക്കുന്നു, ഞാൻ അവരെപ്പോലെ വലിയ പുണ്യവാളനല്ലെങ്കിലും. നാളെ പരലോകത്ത് അവർ മുഖേന എനിക്ക് വല്ല ശുപാർശയും ലഭിച്ചാലോ എന്ന് ഞാൻ ആശിക്കുന്നു.',
      enMeaning: 'I love the righteous, even though I do not consider myself to be at their level. I do this hoping that through them, I may attain intercession on the Day of Judgment.',
      arSharah: 'يعبر الإمام الشافعي بتواضع جم عن حبه الصادق للصالحين من عباد الله، رغم أنه لا يرى نفسه في نفس درجتهم من التقوى والعبادة. وهو يفعل ذلك طمعاً في أن يشفعوا له يوم القيامة بفضل منزلتهم عند الله.'
    },
    {
      id: 1,
      lineIndices: [2, 3],
      mlMeaning: 'പാപങ്ങൾ മാത്രം ചെയ്യുന്ന ആളുകളെ ഞാൻ വെറുക്കുന്നു, ഒരുപക്ഷേ ഞാനും അവരും ഒരേപോലെ പാപങ്ങൾ ചെയ്യുന്നവരാണെങ്കിൽ പോലും.',
      enMeaning: 'And I hate those whose entire trade (deeds) revolves around sins, even if we are equal in having such terrible merchandise.',
      arSharah: 'وعلى النقيض، يبغض الشافعي من يتجرأ على المعاصي ويجعلها بضاعته في الحياة. ومع استمراره في تواضعه الشديد، يقول: حتى لو كنت أنا أيضاً عاصياً ومقصراً مثلهم في "البضاعة" (أي العمل السيء)، فإني أرفض الانتماء القلبي لهم.'
    }
  ],
  sections: [
    {
      id: 1,
      startLine: 1,
      endLine: 4,
      titleAr: "عقيدة الحب في الله وقمة التواضع",
      titleMl: "അല്ലാഹുവിനുവേണ്ടിയുള്ള സ്നേഹവും വിനയവും",
      titleEn: "The Creed of Loving for Allah's Sake and Ultimate Humility",
      arSummary: "هذه الأبيات تعتبر من أروع ما قيل في 'التواضع' و'الحب في الله'. الإمام الشافعي، وهو من هو في علمه وعبادته، ينكر ذاته تماماً ويخرج نفسه من زمرة الصالحين، لا نفاقاً، بل شعوراً حقيقياً بالتقصير أمام عظمة الله. يؤسس الشافعي هنا لمبدأ عظيم: الانتماء القلبي. قد لا تكون أعمالك كاملة، لكن قلبك يجب أن ينبض بحب الصالحين وبغض الفاسدين. هذا الحب القلبي هو طوق النجاة ورأس مال المؤمن الذي يرجو به شفاعة الأخيار يوم القيامة.",
      mlSummary: "ഇമാം ശാഫിഈ(റ)യുടെ അങ്ങേയറ്റത്തെ വിനയവും വിട്ടുവീഴ്ചയുമാണ് ഈ വരികളിൽ തെളിയുന്നത്. വലിയ പണ്ഡിതനും പുണ്യവാളനുമായിരുന്നിട്ടും താൻ സജ്ജനങ്ങളിൽ പെട്ടവനല്ല എന്ന് അദ്ദേഹം സ്വയം വിലയിരുത്തുന്നു. അല്ലാഹുവിനോടുള്ള ഭയഭക്തിയാണ് ഇതിന് കാരണം. ഒരാളുടെ പ്രവർത്തനങ്ങൾ പൂർണ്ണമല്ലെങ്കിലും, സജ്ജനങ്ങളോട് സ്നേഹവും പാപികളോട് വെറുപ്പും ഹൃദയത്തിൽ കാത്തുസൂക്ഷിക്കേണ്ടത് നിർബന്ധമാണെന്ന് ഈ വരികൾ പഠിപ്പിക്കുന്നു. നാളെ പരലോകത്ത് രക്ഷപ്പെടാൻ ഈ സ്നേഹം ഉപകരിച്ചേക്കാം.",
      enSummary: "These verses are among the most exquisite expressions of profound humility and 'Loving for the sake of Allah'. Despite being one of the greatest scholars and most pious figures in history, Imam Al-Shafi'i strips away his ego, excluding himself from the ranks of the righteous out of sheer humility before God. He establishes a critical spiritual principle: Heartfelt Affiliation. Even if your actions fall short, your heart must be unconditionally aligned with the righteous and repulsed by corruption. This genuine love is the believer's safety net and hope for intercession in the Hereafter."
    }
  ]
};

import { Poem } from '../../types';

export const poemData: Poem = {
  id: 'shafiee-tawakkul',
  titleAr: 'تَوَكَّلْتُ فِي رِزْقِي عَلَى اللَّهِ (التوكل في الرزق)',
  titleMl: 'ഉപജീവനത്തിലെ തവക്കുൽ (ദൈവാശ്രയം)',
  titleEn: 'Trust in Allah for Sustenance',
  poetAr: 'الإمام الشافعي',
  poetMl: 'ഇമാം ശാഫിഈ (റ)',
  meter: 'البحر الطويل',
  totalLines: 4,
  lines: [
    {
      id: 1,
      ar: 'تَوَكَّلْتُ فِي رِزْقِي عَلَى اللَّهِ خَالِقِي',
      words: [
        { ar: 'تَوَكَّلْتُ', ml: 'ഞാൻ ഭരമേൽപ്പിച്ചു', en: 'I trusted / relied', irab: 'فعل ماض والتاء فاعل' },
        { ar: 'فِي', ml: 'ൽ', en: 'In / Regarding', irab: 'حرف جر' },
        { ar: 'رِزْقِي', ml: 'എന്റെ ഉപജീവനത്തി', en: 'My sustenance', irab: 'اسم مجرور والياء مضاف إليه' },
        { ar: 'عَلَى', ml: 'മേൽ', en: 'Upon', irab: 'حرف جر' },
        { ar: 'اللَّهِ', ml: 'അല്ലാഹുവിന്റെ', en: 'Allah', irab: 'اسم الجلالة مجرور' },
        { ar: 'خَالِقِي', ml: 'എന്നെ സൃഷ്ടിച്ചവനായ', en: 'My Creator', irab: 'نعت أو بدل مجرور والياء مضاف إليه' }
      ]
    },
    {
      id: 2,
      ar: 'وَأَيْقَنْتُ أَنَّ اللَّهَ لا شَكَّ رَازِقِي',
      words: [
        { ar: 'وَأَيْقَنْتُ', ml: 'ഞാൻ ഉറപ്പിച്ചു വിശ്വസിച്ചു', en: 'And I am certain', irab: 'الواو عاطفة، فعل وفاعل' },
        { ar: 'أَنَّ', ml: 'തീർച്ചയായും എന്ന്', en: 'That', irab: 'حرف توكيد ونصب' },
        { ar: 'اللَّهَ', ml: 'അല്ലാഹു', en: 'Allah', irab: 'اسم الجلالة اسم أن منصوب' },
        { ar: 'لا شَكَّ', ml: 'യാതൊരു സംശയവുമില്ലാതെ', en: 'Without a doubt', irab: 'لا نافية للجنس، شك اسمها' },
        { ar: 'رَازِقِي', ml: 'എനിക്ക് ഭക്ഷണം നൽകുന്നവനാണ്', en: 'Is my Provider', irab: 'خبر أن مرفوع والياء مضاف إليه' }
      ]
    },
    {
      id: 3,
      ar: 'وَمَا يَكُ مِنْ رِزْقِي فَلَيْسَ يَفُوتُنِي',
      words: [
        { ar: 'وَمَا', ml: 'എന്തൊന്നുണ്ടോ', en: 'And whatever', irab: 'الواو عاطفة، ما شرطية جازمة' },
        { ar: 'يَكُ', ml: 'ആയിട്ടുണ്ടോ (ആകുന്നുവോ)', en: 'Is', irab: 'فعل مضارع ناقص مجزوم بحذف النون للتخفيف' },
        { ar: 'مِنْ', ml: 'നിന്നുള്ള', en: 'Of', irab: 'حرف جر' },
        { ar: 'رِزْقِي', ml: 'എന്റെ ഉപജീവനത്തിൽ', en: 'My sustenance', irab: 'اسم مجرور' },
        { ar: 'فَلَيْسَ', ml: 'അത് ഒരിക്കലും ഇല്ല', en: 'Then it will not', irab: 'الفاء واقعة في جواب الشرط، ليس فعل ماض ناقص' },
        { ar: 'يَفُوتُنِي', ml: 'എനിക്ക് നഷ്ടപ്പെടുക', en: 'Pass me by / Miss me', irab: 'فعل مضارع مرفوع والنون للوقاية والياء مفعول به' }
      ]
    },
    {
      id: 4,
      ar: 'وَلَوْ كَانَ فِي قَاعِ البِحَارِ العَوَامِقِ',
      words: [
        { ar: 'وَلَوْ', ml: 'എങ്കിലും', en: 'Even if', irab: 'الواو حالية، لو حرف شرط' },
        { ar: 'كَانَ', ml: 'അത് ആണ', en: 'It were', irab: 'فعل ماض ناقص، واسمها مستتر' },
        { ar: 'فِي', ml: 'ൽ', en: 'In', irab: 'حرف جر' },
        { ar: 'قَاعِ', ml: 'അടിത്തട്ടി', en: 'The bottom', irab: 'اسم مجرور' },
        { ar: 'البِحَارِ', ml: 'സമുദ്രങ്ങളുടെ', en: 'Of the oceans', irab: 'مضاف إليه مجرور' },
        { ar: 'العَوَامِقِ', ml: 'ആഴമേറിയ', en: 'The deep', irab: 'نعت (صفة) مجرور' }
      ]
    }
  ],
  couplets: [
    {
      id: 0,
      lineIndices: [0, 1],
      mlMeaning: 'എന്റെ ഉപജീവനത്തിന്റെ കാര്യത്തിൽ എന്നെ സൃഷ്ടിച്ചവനായ അല്ലാഹുവിൽ ഞാൻ പൂർണ്ണമായും ഭരമേൽപ്പിച്ചിരിക്കുന്നു. യാതൊരു സംശയവുമില്ലാതെ അല്ലാഹു തന്നെയാണ് എനിക്ക് ഭക്ഷണം നൽകുന്നവൻ എന്ന് ഞാൻ ഉറപ്പിച്ചു വിശ്വസിക്കുകയും ചെയ്യുന്നു.',
      enMeaning: 'I have completely trusted in Allah, my Creator, regarding my sustenance. And I am absolutely certain, without a doubt, that Allah is my Provider.',
      arSharah: 'يعلن الإمام الشافعي تفويضه الكامل لله في مسألة الرزق. فهو يثق تمام الثقة أن خالقه لن يضيعه، وأن الله وحده هو المتكفل برزقه ورزق جميع المخلوقات دون أدنى شك.'
    },
    {
      id: 1,
      lineIndices: [2, 3],
      mlMeaning: 'എനിക്കായി നിശ്ചയിക്കപ്പെട്ട ഭക്ഷണം ഒരിക്കലും എനിക്ക് നഷ്ടപ്പെടുകയില്ല. അതിനി ആഴമേറിയ സമുദ്രങ്ങളുടെ അടിത്തട്ടിലാണെങ്കിൽ പോലും അത് എന്നെ തേടിയെത്തും.',
      enMeaning: 'Whatever is destined as my sustenance will never pass me by (will never miss me), even if it were at the bottom of the deepest oceans.',
      arSharah: 'يؤكد الشافعي عقيدة القضاء والقدر في الرزق. فالرزق المكتوب للإنسان سيصله حتماً ولن يأخذه غيره، حتى لو كان هذا الرزق مخبأً في أعمق وأظلم قيعان البحار، فإن قدرة الله ستسوقه إليه.'
    }
  ],
  sections: [
    {
      id: 1,
      startLine: 1,
      endLine: 4,
      titleAr: "الطمأنينة القلبية وعقيدة الرزق المضمون",
      titleMl: "ഉപജീവനത്തിലുള്ള വിശ്വാസവും മനസ്സമാധാനവും",
      titleEn: "Peace of Mind and the Creed of Guaranteed Sustenance",
      arSummary: "تقدم هذه الأبيات أعظم وصفة لعلاج القلق والتوتر الذي يصيب الإنسان بسبب الخوف على مستقبله ورزقه. يربط الشافعي بين 'الخلق' و'الرزق'، فمن خلقك لن يتركك جائعاً. يعلمنا الشافعي أن الرزق مقسوم ومكتوب بدقة متناهية، وأن ما كُتب لك لن يخطئك أبداً، ولن يأخذه غيرك، حتى لو كان في أبعد نقطة في الكون (قاع البحار). هذا اليقين يمنح المؤمن طمأنينة لا مثيل لها، ويحرره من الحسد، والطمع، والذل للناس من أجل لقمة العيش.",
      mlSummary: "ഭാവിയിലെ ഭക്ഷണത്തെക്കുറിച്ചും ജീവിതത്തെക്കുറിച്ചും ആലോചിച്ച് വിഷമിക്കുന്നവർക്ക് വലിയൊരു ആശ്വാസമാണ് ഈ വരികൾ. നമ്മെ സൃഷ്ടിച്ച അല്ലാഹു നമുക്കുള്ള ഭക്ഷണം നൽകാൻ ബാധ്യസ്ഥനാണ്. ഈ ലോകത്ത് നമുക്ക് ലഭിക്കാൻ വിധിച്ച ഒരു സാധനവും മറ്റൊരാളും കൊണ്ടുപോകില്ല. അത് ആഴക്കടലിന്റെ അടിയിലാണെങ്കിൽ പോലും അല്ലാഹു അത് നമ്മുടെ അടുത്തെത്തിക്കും. ഈയൊരു ബോധം മനസ്സിലുണ്ടെങ്കിൽ മനുഷ്യന് ആരോടും അസൂയ തോന്നില്ല, പണത്തിന് വേണ്ടി മറ്റുള്ളവരുടെ മുന്നിൽ തലകുനിക്കേണ്ടിയും വരില്ല. അത് വലിയൊരു മനസ്സമാധാനമാണ്.",
      enSummary: "These verses provide the greatest prescription for anxiety and stress regarding one's future and livelihood. Al-Shafi'i elegantly connects 'Creation' with 'Provision'—the One who created you will not leave you to starve. He teaches that sustenance is precisely decreed and destined. What is written for you will never miss you, nor can anyone else take it, even if it were hidden at the very bottom of the deepest oceans. This profound certainty grants the believer unparalleled peace of mind, freeing them from envy, greed, and the humiliation of begging others for their livelihood."
    }
  ]
};

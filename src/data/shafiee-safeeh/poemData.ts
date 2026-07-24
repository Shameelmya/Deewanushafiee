import { Poem } from '../../types';

export const poemData: Poem = {
  id: 'shafiee-safeeh',
  titleAr: 'إِذَا نَطَقَ السَّفِيهُ فَلا تُجِبْهُ (الصمت عن الجاهل)',
  titleMl: 'വിഡ്ഢിയോട് നിശബ്ദത പാലിക്കുക',
  titleEn: 'Silence Towards the Fool',
  poetAr: 'الإمام الشافعي',
  poetMl: 'ഇമാം ശാഫിഈ (റ)',
  meter: 'البحر الوافر',
  totalLines: 4,
  lines: [
    {
      id: 1,
      ar: 'إِذَا نَطَقَ السَّفِيهُ فَلا تُجِبْهُ',
      words: [
        { ar: 'إِذَا', ml: 'എങ്കിൽ / സമയത്ത്', en: 'If / When', irab: 'ظرف زمان مبني يتضمن معنى الشرط' },
        { ar: 'نَطَقَ', ml: 'സംസാരിച്ചാൽ', en: 'Speaks', irab: 'فعل ماض مبني على الفتح في محل جزم فعل الشرط' },
        { ar: 'السَّفِيهُ', ml: 'വിഡ്ഢി', en: 'The fool', irab: 'فاعل مرفوع وعلامة رفعه الضمة' },
        { ar: 'فَلا', ml: 'അതിനാൽ അരുത്', en: 'Then do not', irab: 'الفاء واقعة في جواب الشرط، لا: الناهية' },
        { ar: 'تُجِبْهُ', ml: 'നീ അവന് മറുപടി നൽക(രുത്)', en: 'Answer him', irab: 'فعل مضارع مجزوم بلا الناهية، والهاء مفعول به' }
      ]
    },
    {
      id: 2,
      ar: 'فَخَيْرٌ مِنْ إِجَابَتِهِ السُّكُوتُ',
      words: [
        { ar: 'فَخَيْرٌ', ml: 'ഏറ്റവും നല്ലത്', en: 'For better', irab: 'الفاء تعليلية، خير: خبر مقدم مرفوع' },
        { ar: 'مِنْ', ml: 'നേക്കാൾ', en: 'Than', irab: 'حرف جر' },
        { ar: 'إِجَابَتِهِ', ml: 'അവന് മറുപടി നൽകുന്നതി(നേക്കാൾ)', en: 'Answering him', irab: 'اسم مجرور والهاء مضاف إليه' },
        { ar: 'السُّكُوتُ', ml: 'നിശബ്ദതയാണ്', en: 'Is silence', irab: 'مبتدأ مؤخر مرفوع وعلامة رفعه الضمة' }
      ]
    },
    {
      id: 3,
      ar: 'فَإِنْ كَلَّمْتَهُ فَرَّجْتَ عَنْهُ',
      words: [
        { ar: 'فَإِنْ', ml: 'എങ്കിൽ', en: 'And if', irab: 'الفاء استئنافية، إن: حرف شرط جازم' },
        { ar: 'كَلَّمْتَهُ', ml: 'നീ അവനോട് സംസാരിച്ചാൽ', en: 'You speak to him', irab: 'فعل ماض والتاء فاعل والهاء مفعول به، في محل جزم فعل الشرط' },
        { ar: 'فَرَّجْتَ', ml: 'നീ അവന് ആശ്വാസം നൽകി', en: 'You relieve (relieved) him', irab: 'فعل ماض والتاء فاعل، في محل جزم جواب الشرط' },
        { ar: 'عَنْهُ', ml: 'അവനിൽ നിന്ന്', en: 'From him', irab: 'جار ومجرور' }
      ]
    },
    {
      id: 4,
      ar: 'وَإِنْ خَلَّيْتَهُ كَمَداً يَمُوتُ',
      words: [
        { ar: 'وَإِنْ', ml: 'എങ്കിൽ', en: 'And if', irab: 'الواو عاطفة، إن: حرف شرط جازم' },
        { ar: 'خَلَّيْتَهُ', ml: 'നീ അവനെ അവഗണിച്ചാൽ (വിട്ടാൽ)', en: 'You leave him (ignore him)', irab: 'فعل ماض والتاء فاعل والهاء مفعول به، فعل الشرط' },
        { ar: 'كَمَداً', ml: 'ദുഃഖത്താൽ (ദേഷ്യത്താൽ)', en: 'Out of grief / intense anger', irab: 'مفعول لأجله (أو تمييز/حال) منصوب' },
        { ar: 'يَمُوتُ', ml: 'അവൻ മരിക്കും', en: 'He dies', irab: 'فعل مضارع مرفوع جواب الشرط (والأصل أن يُجزم، لكنه رفع للضرورة الشعرية)' }
      ]
    }
  ],
  couplets: [
    {
      id: 0,
      lineIndices: [0, 1],
      mlMeaning: 'ഒരു വിഡ്ഢി നിന്നോട് മോശമായി സംസാരിക്കുകയാണെങ്കിൽ നീ അവന് മറുപടി നൽകരുത്. കാരണം, അവന് മറുപടി നൽകുന്നതിനേക്കാൾ ഏറ്റവും നല്ലത് നിശബ്ദത പാലിക്കുന്നതാണ്.',
      enMeaning: 'If a fool speaks (ignorantly to you), do not answer him. For silence is far better than answering him.',
      arSharah: 'ينصح الإمام الشافعي بتجاهل السفهاء والجهال عندما يتطاولون بالكلام. الرد على الجاهل يضعه في نفس مستواك، ولذلك فإن الصمت هو أبلغ رد وأكرم لك من الدخول في جدال لا طائل منه.'
    },
    {
      id: 1,
      lineIndices: [2, 3],
      mlMeaning: 'നീ അവനോട് സംസാരിച്ച് മറുപടി നൽകുകയാണെങ്കിൽ, അത് അവന് വലിയൊരു സന്തോഷവും ആശ്വാസവും നൽകും. എന്നാൽ നീ അവനെ അവഗണിച്ച് നിശബ്ദനാവുകയാണെങ്കിൽ ദേഷ്യവും സങ്കടവും കാരണം അവൻ ഉള്ളുരുകി മരിക്കും.',
      enMeaning: 'If you speak to him, you give him relief and satisfaction. But if you ignore him, he will die from his own contained anger and grief.',
      arSharah: 'يعلل الشافعي نصيحته مبيناً أن السفيه يستمتع باستفزاز الآخرين وجرهم لمعركة كلامية، فإذا رددت عليه حققت له غايته وأرحت صدره. أما إذا تجاهلته وتكبرت عن الرد عليه، فسيحترق غيظاً ويموت كمداً في داخله.'
    }
  ],
  sections: [
    {
      id: 1,
      startLine: 1,
      endLine: 4,
      titleAr: "فن إدارة الاستفزاز وسيكولوجية الصمت",
      titleMl: "പ്രകോപനങ്ങളെ നേരിടാനുള്ള കലയും നിശബ്ദതയുടെ മനഃശാസ്ത്രവും",
      titleEn: "The Art of Managing Provocation and the Psychology of Silence",
      arSummary: "تقدم هذه الأبيات استراتيجية نفسية واجتماعية راقية في التعامل مع 'السفهاء' (الجهال الذين يفتقرون للأدب والحكمة). في عالم مليء بالاستفزازات، يبين الشافعي أن 'الرد' ليس دائماً دليل قوة، بل غالباً ما يكون فخاً ينجح السفيه في استدراجك إليه. الصمت هنا ليس ضعفاً، بل هو أقوى سلاح عقابي. عندما تتجاهل المستفز، فإنك تحرمه من القيمة والاعتراف الذي يبحث عنه، مما يجعله يغلي غضباً ويحترق بنار حقده الداخلي دون أن تبذل أنت أي مجهود.",
      mlSummary: "വിഡ്ഢികളായ ആളുകൾ നമ്മെ പ്രകോപിപ്പിക്കാൻ ശ്രമിക്കുമ്പോൾ അവരെ എങ്ങനെ നേരിടണം എന്നാണ് ഈ വരികൾ നമ്മെ പഠിപ്പിക്കുന്നത്. ഒരാൾ നമ്മെ ചീത്ത പറയുമ്പോൾ തിരിച്ച് മറുപടി പറയുന്നത് നമ്മുടെ കഴിവല്ല; മറിച്ച് അത് ആ വിഡ്ഢിയുടെ വിജയമാണ്. കാരണം നമ്മെ ദേഷ്യം പിടിപ്പിക്കുക എന്നത് മാത്രമാണ് അവന്റെ ലക്ഷ്യം. എന്നാൽ നമ്മൾ തികഞ്ഞ നിശബ്ദത പാലിക്കുമ്പോൾ അവന് യാതൊരു വിലയും ലഭിക്കുന്നില്ല. ആ അവഗണന അവനെ കൂടുതൽ ദേഷ്യം പിടിപ്പിക്കുകയും ഉള്ളുരുകി നശിക്കാൻ കാരണമാവുകയും ചെയ്യും. നിശബ്ദത ഒരു വലിയ ആയുധമാണെന്ന് ഇമാം നമ്മെ പഠിപ്പിക്കുന്നു.",
      enSummary: "These verses present a highly sophisticated psychological and social strategy for dealing with 'fools' (ignorant people lacking manners and wisdom). In a world full of provocations, Al-Shafi'i clarifies that 'reacting' is not always a sign of strength; rather, it is often a trap set by the provocateur. Silence here is not weakness—it is the ultimate punitive weapon. When you ignore the provocateur, you deny them the validation and attention they crave, causing them to burn in their own suppressed rage and frustration without you expending any effort."
    }
  ]
};

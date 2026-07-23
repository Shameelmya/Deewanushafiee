const fs = require('fs');
const path = require('path');

const poemPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'poemData.ts');
let content = fs.readFileSync(poemPath, 'utf8');

// 1. We will replace the couplets array entirely.
const newCouplets = [
  {
    id: 1,
    lineIndices: [0, 1],
    mlMeaning: "കാലം അതിനിഷ്ടമുള്ളത് ചെയ്യാൻ നീ അനുവദിക്കുക. വിധി നിർണ്ണയിക്കപ്പെടുമ്പോൾ നീ മനസ്സുകൊണ്ട് പൂർണ്ണസംതൃപ്തനാവുക.",
    enMeaning: "Let the days do as they please. And be completely pleased in soul when the decree is ordained."
  },
  {
    id: 2,
    lineIndices: [2, 3],
    mlMeaning: "രാത്രികളിലെ ദുരന്തങ്ങളിൽ നീ ഒരിക്കലും പരിഭ്രാന്തനാകരുത്. കാരണം, ഈ ലോകത്തെ പ്രതിസന്ധികൾക്ക് ശാശ്വതമായ നിലനിൽപ്പില്ല.",
    enMeaning: "And do not panic over the calamities of the nights. For the incidents of the world have no permanence."
  },
  {
    id: 3,
    lineIndices: [4, 5],
    mlMeaning: "ഭയാനകമായ പ്രതിസന്ധികൾക്ക് മുന്നിൽ പതറാത്ത ഒരു പുരുഷനാകുക നീ. വിട്ടുവീഴ്ചയും വിശ്വസ്തതയുമായിരിക്കണം നിന്റെ പ്രകൃതം.",
    enMeaning: "And be a man, totally unyielding against terrors. And let your intrinsic nature be tolerance and loyalty."
  },
  {
    id: 4,
    lineIndices: [6, 7],
    mlMeaning: "സൃഷ്ടികൾക്കിടയിൽ നിന്റെ ന്യൂനതകൾ വർദ്ധിക്കുകയും, അതിനൊരു മറ ഉണ്ടായിരിക്കാൻ നീ ആഗ്രഹിക്കുകയും ചെയ്യുന്നുവെങ്കിൽ.",
    enMeaning: "And if your faults become numerous among the creations. And it pleases you that there is a cover for them."
  },
  {
    id: 5,
    lineIndices: [8, 9],
    mlMeaning: "നിസ്സീമമായ ഔദാര്യം കൊണ്ട് നീ അതിനെ മറയ്ക്കുക. കാരണം പറയപ്പെടുന്നതുപോലെ, ഔദാര്യം എല്ലാ ന്യൂനതകളെയും മറച്ചുകൊള്ളും.",
    enMeaning: "Cover yourself with generosity. For generosity covers every fault, just as it was said."
  },
  {
    id: 6,
    lineIndices: [10, 11],
    mlMeaning: "ശത്രുക്കൾക്ക് മുന്നിൽ നീ ഒരിക്കലും നിസ്സഹായത കാണിക്കരുത്. കാരണം ശത്രുക്കളുടെ പരിഹാസം വലിയൊരു ദുരന്തമാണ്.",
    enMeaning: "And absolutely never show the enemies any humiliation. For indeed, the gloating of the enemies is a devastating affliction."
  },
  {
    id: 7,
    lineIndices: [12, 13],
    mlMeaning: "ഒരു പിശുക്കനിൽ നിന്നും നീ ഔദാര്യം പ്രതീക്ഷിക്കരുത്. കാരണം തീയിൽ ദാഹിക്കുന്നവന് യാതൊരു വെള്ളവുമില്ല.",
    enMeaning: "And do not expect generosity from a miser. For there is no water in the fire for the thirsty."
  },
  {
    id: 8,
    lineIndices: [14, 15],
    mlMeaning: "നിന്റെ ഉപജീവനം, സാവധാനം പ്രവർത്തിക്കുന്നത് അതിനെ കുറയ്ക്കുകയില്ല. കഷ്ടപ്പാടുകൾ ഉപജീവനത്തിൽ വർദ്ധനവ് ഉണ്ടാക്കുകയുമില്ല.",
    enMeaning: "And your provision, deliberation does not decrease it. And hardship does not increase the provision."
  },
  {
    id: 9,
    lineIndices: [16, 17],
    mlMeaning: "ഒരു ദുഃഖവും ശാശ്വതമല്ല, ഒരു സന്തോഷവും. നിന്റെ മേലുള്ള ഒരു ദാരിദ്ര്യവും, ഒരു സമൃദ്ധിയും.",
    enMeaning: "And no sorrow lasts, and no joy. And no misery upon you, and no prosperity."
  },
  {
    id: 10,
    lineIndices: [18, 19],
    mlMeaning: "നീ സംതൃപ്തിയുള്ള ഒരു ഹൃദയത്തിന്റെ ഉടമയാണെങ്കിൽ. അപ്പോൾ നീയും ഈ ലോകത്തിന്റെ ഉടമസ്ഥനും തുല്യരാണ്.",
    enMeaning: "If you are the possessor of a contented heart. Then you and the owner of the world are completely equal."
  },
  {
    id: 11,
    lineIndices: [20, 21],
    mlMeaning: "ഏതൊരാളുടെ മുറ്റത്താണോ മരണം വന്നിറങ്ങിയത്. അപ്പോൾ ഒരു ഭൂമിക്കും അവനെ രക്ഷിക്കാനാകില്ല, ഒരു ആകാശത്തിനും.",
    enMeaning: "And whoever deaths descend into his courtyard. Then no earth protects him, nor any sky."
  },
  {
    id: 12,
    lineIndices: [22, 23],
    mlMeaning: "അല്ലാഹുവിന്റെ ഭൂമി വിശാലമാണ്, എങ്കിലും. വിധി വന്നിറങ്ങിയാൽ ആ വിശാലമായ ഇടം ഇടുങ്ങിയതാകും.",
    enMeaning: "And the earth of Allah is vast, but. When the decree descends, the space significantly narrows."
  },
  {
    id: 13,
    lineIndices: [24, 25],
    mlMeaning: "എല്ലാ സമയത്തും കാലം ചതിക്കാൻ നീ വിട്ടേക്കുക. കാരണം മരണത്തിന് പകരമായി യാതൊരു മരുന്നും ഫലം ചെയ്യുകയില്ല.",
    enMeaning: "Let the days betray at every moment. For medicine absolutely does not avail against death."
  }
];

// We don't have arSharah for couplets anymore, the user provided them for SECTIONS.
const newSections = [
  {
    id: 1,
    titleMl: "ഭാഗം 1 (വരികൾ 1-6)",
    titleEn: "Section 1 (Lines 1-6)",
    titleAr: "المقطع الأول (١-٦)",
    startLine: 1,
    endLine: 6,
    mlSummary: "മനുഷ്യന്റെ വൈകാരിക നിയന്ത്രണത്തെക്കുറിച്ചുള്ള അതിഗഹനമായ ഒരു അക്കാദമിക് തത്വചിന്തയാണ് ഈ ആറ് വരികളിലുള്ളത്. കാലത്തെയും സാഹചര്യങ്ങളെയും സ്വതന്ത്രമായി പ്രവർത്തിക്കാൻ അനുവദിക്കുക എന്ന കാവ്യാത്മകമായ പ്രയോഗത്തിലൂടെ, നമ്മുടെ നിയന്ത്രണത്തിന് അതീതമായ കാര്യങ്ങളെച്ചൊല്ലി ഉത്കണ്ഠപ്പെടുന്നത് അവസാനിപ്പിക്കാൻ ഇമാം ആവശ്യപ്പെടുന്നു. ഈ ലോകത്തെ ഒരു സംഭവത്തിനും ശാശ്വതമായ നിലനിൽപ്പില്ല (عدم البقاء) എന്ന തിരിച്ചറിവാണ് ഉത്കണ്ഠകൾക്കും ഭയത്തിനും എതിരെയുള്ള ഏറ്റവും മികച്ച കോഗ്നിറ്റീവ് തെറാപ്പി. മനുഷ്യന്റെ ഏകാന്തതയെയും അപ്രതീക്ഷിതമായി കടന്നുവരുന്ന ദുരന്തങ്ങളെയും കുറിക്കാൻ സാഹിത്യത്തിൽ എപ്പോഴും 'രാത്രികളെ' (اللَّيَالِي) ആണ് ഉപയോഗിക്കുന്നത്.\nതുടർന്ന്, അഞ്ചാമത്തെ വരിയിൽ 'നീയൊരു പുരുഷനാകുക' (رَجُلاً) എന്ന് കവി ആവശ്യപ്പെടുന്നു. അറബി സാഹിത്യത്തിൽ ഇതൊരു പുരുഷമേധാവിത്വ പ്രയോഗമോ കേവലം ഒരു ലിംഗത്തെയോ (Gender) കുറിക്കുന്ന പദമല്ല; മറിച്ച് അറബികളുടെ ഏറ്റവും ഉയർന്ന മൂല്യമായ 'മുറൂഅത്ത്' (المروءة) അഥവാ അചഞ്ചലമായ ധീരത, ഉത്തരവാദിത്തബോധം, പ്രതിസന്ധികളിൽ തളരാത്ത മനസ്സ് എന്നിവയെയാണ് ഇതിലൂടെ അർത്ഥമാക്കുന്നത്. ലോകം മുഴുവൻ തകർന്നുവീണാലും പരാതികളില്ലാതെ ഉറച്ചുനിൽക്കുന്ന ഒരുവനെ മാത്രമേ കാവ്യശാസ്ത്രത്തിൽ 'റജുൽ' എന്ന് വിളിക്കൂ. എന്നാൽ ആ കാഠിന്യം ഒരു മനുഷ്യനെ ക്രൂരനാക്കാതിരിക്കാൻ, അവനിലുള്ള ജന്മസിദ്ധമായ പ്രകൃതം അഥവാ 'സജിയ്യത്ത്' (السجية) എപ്പോഴും കാരുണ്യവും വിട്ടുവീഴ്ചയും (السماحة) നിറഞ്ഞതായിരിക്കണം എന്ന് കവി കൃത്യമായി നിർദ്ദേശിക്കുന്നു. അചഞ്ചലമായ കരുത്തും (Resilience) തികഞ്ഞ വിട്ടുവീഴ്ചാ മനോഭാവവും (Empathy) സമന്വയിപ്പിച്ച ഉത്തമ വ്യക്തിത്വത്തിന്റെ ബ്ലൂപ്രിന്റാണിത്.",
    enSummary: "In this breathtaking opening movement, Imam Al-Shafi'i lays down a masterclass in psychological resilience and cognitive reframing. By employing dynamic personification—instructing the reader to \"let the days do what they please\"—he advocates for radical existential acceptance. He addresses human anxiety by dismantling the logic of panic (Jaza') through the fundamental thesis of temporality: no worldly crisis possesses the structural integrity for permanence (Baqa').\nIn the third couplet, he constructs the ultimate blueprint for a premium executive persona using the highly charged term Rajulan (\"a man\"). In classical Arabic literary theory, this is not a biological gender marker. It represents the pinnacle of Muru'ah (المروءة)—the ancient Arabian code of chivalry, absolute reliability, and unbreakable fortitude in the face of systemic collapse. A true Rajul absorbs existential terrors (Ahwal) without complaint. However, to prevent this immense internal toughness (Jald) from calcifying into toxicity or cruelty, the poet meticulously demands that the individual's Sajiyyah (السجية - deep, genetically encoded innate disposition) must strictly consist of profound tolerance (Samahah) and unbreakable loyalty (Wafa'). This creates an elite, academically perfect equilibrium between impenetrable internal armor and hyper-empathetic external social grace.",
    arSummary: "يفتتح الإمام الشافعي هذه المنظومة الفلسفية بتأسيس \"الصلابة النفسية\" (Psychological Resilience). يستخدم تقنية (التشخيص - Personification) في قوله \"دَعِ الأَيَّامَ\"، حيث يمنح الزمن إرادة حرة ليفعل ما يشاء، وهذا يمثل أعلى درجات التسليم الوجودي. من منظور (علم المعاني)، يأتي النهي في \"لا تجزع\" مدعوماً بتعليل منطقي قاطع: \"فما لحوادث الدنيا بقاء\". استخدام \"الليالي\" توظيف للرموز؛ فالليل يعكس وحشة المجهول.\nثم يرتقي الشاعر إلى رسم النموذج الأرقى للكمال البشري، مستخدماً لفظة \"رَجُلاً\". في القاموس الأدبي العربي، الرجولة هنا لا تعني الذكورة البيولوجية، بل هي تجسيد لمفهوم (المروءة)، وهي القدرة على تحمل الصدمات (الأهوال) بثبات (جلداً) دون شكوى أو انهيار. ولكي لا يتحول هذا الثبات إلى قسوة وجفاء، اشترط الشاعر أن تكون (السجية) الأصيلة والعميقة لهذا الإنسان هي (السماحة والوفاء). إنه التوازن الأكاديمي الدقيق بين القوة الباطنية المطلقة والرحمة الظاهرية."
  },
  {
    id: 2,
    titleMl: "ഭാഗം 2 (വരികൾ 7-12)",
    titleEn: "Section 2 (Lines 7-12)",
    titleAr: "المقطع الثاني (٧-١٢)",
    startLine: 7,
    endLine: 12,
    mlSummary: "മനുഷ്യന്റെ വ്യക്തിത്വത്തിലെ പോരായ്മകളെ സമൂഹത്തിൽ എങ്ങനെ തന്ത്രപരമായി കൈകാര്യം ചെയ്യാം എന്നതിന്റെ ഒരു സോഷ്യോളജിക്കൽ മാസ്റ്റർ ക്ലാസ്സാണിത് (Sociological Camouflage). സമൂഹമധ്യത്തിൽ ഒരാളുടെ പ്രതിച്ഛായ (Public Image) സംരക്ഷിക്കാനുള്ള ഏറ്റവും വലിയ ആയുധം 'ഔദാര്യം' (Generosity) ആണെന്ന് ഇമാം വ്യക്തമാക്കുന്നു. മനഃശാസ്ത്രത്തിൽ ഇതിനെ 'ഹാലോ ഇഫക്റ്റ്' (Halo Effect) എന്ന് വിളിക്കുന്നു. ഔദാര്യം എന്ന ഒറ്റ സവിശേഷത ഒരാളുടെ ബാക്കിയുള്ള വ്യക്തിത്വ ദോഷങ്ങളെ പൂർണ്ണമായും മറച്ചുവെക്കുന്ന സ്ക്രീനായി പ്രവർത്തിക്കുന്നു. നൂറ്റാണ്ടുകളായി മനുഷ്യസമൂഹത്തിൽ നിലനിൽക്കുന്ന ഈ തത്വത്തെ 'പറയപ്പെടുന്നതുപോലെ' (كَمَا قِيلَ) എന്ന 'തദ്മീൻ' (التضمين) പ്രയോഗത്തിലൂടെ കവിതയിലേക്ക് അദ്ദേഹം മനോഹരമായി സന്നിവേശിപ്പിച്ചിരിക്കുന്നു. തുടർന്ന്, സ്വന്തം ആത്മാഭിമാനം (Ego Integrity) എന്ത് വിലകൊടുത്തും സംരക്ഷിക്കപ്പെടേണ്ടതിന്റെ ആവശ്യകതയാണ് പറയുന്നത്. ജീവിതത്തിൽ എന്ത് തകർച്ച നേരിട്ടാലും ശത്രുക്കൾക്ക് മുന്നിൽ ദൗർബല്യം കാണിക്കരുത് (عزة النفس). കാരണം, നിങ്ങളുടെ വീഴ്ച കണ്ട് ശത്രുക്കൾക്കുണ്ടാകുന്ന ആനന്ദവും പരിഹാസവും (الشماتة) സാമ്പത്തിക നഷ്ടത്തേക്കാൾ വലുതും, ഒരു മനുഷ്യന്റെ മാനസികാവസ്ഥയെ പൂർണ്ണമായും തകർക്കുന്നതുമായ മാനസിക യുദ്ധമാണ് (Psychological Warfare).",
    enSummary: "In this highly narrative section, Al-Shafi'i transitions from internal psychology to elite Reputation Management and external social dynamics. Acknowledging human imperfection as an empirical reality, he prescribes a tactical sociological camouflage: Generosity (Sakha'). He expertly leverages the psychological phenomenon of the \"Halo Effect,\" noting that grand-scale benevolence creates a cognitive blind spot in the public's perception, effectively masking structural personal flaws. He brilliantly authenticates this by using Tadmin (\"as it was said\"), invoking ancient social wisdom. He then abruptly shifts gears to address the brutal mechanics of psychological warfare and ego preservation. With surgical precision, using the absolute negation particle Qattu, he categorically outlaws the display of any vulnerability, distress, or defeat before adversaries. The rationale is profound: Shamatah (Schadenfreude). The psychological trauma inflicted by witnessing an adversary derive pleasure from your structural failure is infinitely more devastating than the objective failure itself.",
    arSummary: "ينتقل الشاعر من البناء النفسي الداخلي إلى (الديناميكية الاجتماعية - Social Dynamics) وإدارة السمعة (Reputation Management). يقدم استراتيجية (التمويه السوسيولوجي - Sociological Camouflage) من خلال التأكيد على أن \"السخاء\" هو أقوى جهاز مناعي اجتماعي للعيوب. الكرم يخلق ما يعرف في علم النفس بـ (تأثير الهالة - Halo Effect)، حيث أن نور العطاء الإنساني يمنع المجتمع من التدقيق في العيوب الشخصية. يستخدم تقنية (التضمين) في \"كما قيل\" ليثبت أن هذه حقيقة مجتمعية مطلقة. وفي البيتين الأخيرين، يقدم درساً نقدياً في الدفاع النفسي و(عزة النفس). يحرّم الشافعي تحريماً قاطعاً (باستخدام ظرف النفي \"قط\") إظهار الانكسار أمام الخصم، مبرراً ذلك سيكولوجياً بأن (الشماتة) تمثل (حرباً نفسية - Psychological Warfare) مدمرة، وألمها الوجداني يفوق حجم الخسارة الهيكلية ذاتها."
  },
  {
    id: 3,
    titleMl: "ഭാഗം 3 (വരികൾ 13-18)",
    titleEn: "Section 3 (Lines 13-18)",
    titleAr: "المقطع الثالث (١٣-١٨)",
    startLine: 13,
    endLine: 18,
    mlSummary: "മനുഷ്യന്റെ സാമ്പത്തിക വ്യവഹാരങ്ങളെക്കുറിച്ചുള്ള വളരെ അഡ്വാൻസ്ഡ് ആയ നിരീക്ഷണമാണിത്. അതിമനോഹരമായ ഒരു സാഹിത്യ ഉപമയിലൂടെ (التشبيه الضمني - Implicit Simile), അടിസ്ഥാനപരമായി പിശുക്കനായ ഒരാളോട് സാമ്പത്തിക സഹായം ചോദിക്കുന്നത്, ദാഹിച്ചു വലഞ്ഞ ഒരാൾ തീക്കുണ്ഡത്തിലേക്ക് എടുത്തുചാടുന്നതിന് തുല്യമാണെന്ന് അദ്ദേഹം സമർത്ഥിക്കുന്നു. തീ ഒരിക്കലും ദാഹം തീർക്കില്ല എന്ന് മാത്രമല്ല, അത് ആ മനുഷ്യനെ പൂർണ്ണമായും നശിപ്പിക്കുകയും ചെയ്യും. അതുപോലെയാണ് പിശുക്കനിൽ നിന്നുള്ള സഹായപ്രതീക്ഷയും. തുടർന്ന്, ആധുനിക മനുഷ്യനെ വേട്ടയാടുന്ന കരിയർ ഉത്കണ്ഠകളെയും അമിതാധ്വാനത്തെയും (Burnout) അദ്ദേഹം അഭിസംബോധന ചെയ്യുന്നു. കൃത്യമായ പ്ലാനിങ്ങോടെ ശാന്തമായി ജോലി ചെയ്യുന്നത് (التأني) ഒരു മനുഷ്യന്റെയും പ്രതിഫലം കുറയ്ക്കില്ല. മറുവശത്ത്, സ്വന്തം ആരോഗ്യം നശിപ്പിച്ച് പരിഭ്രാന്തിയോടെ അമിതമായി കഷ്ടപ്പെടുന്നത് (العناء) നിങ്ങളുടെ സമ്പത്ത് അസാധാരണമായി വർദ്ധിപ്പിക്കുകയുമില്ല. അധ്വാനവും മാനസിക സമാധാനവും തമ്മിലുള്ള ഒരു 'പ്രൊഫഷണൽ ബാലൻസിങ് ആക്ട്' ആണിത്. അവസാന വരികളിൽ പ്രപഞ്ചത്തിന്റെ മാറ്റത്തിന്റെ നിയമം (Fluctuation) ഓർമ്മിപ്പിക്കുന്നു. വിപരീതാർത്ഥമുള്ള പദങ്ങൾ (الطباق) അടുത്തടുത്ത് പ്രയോഗിച്ചുകൊണ്ട്, വൈകാരികമായോ (സന്തോഷം/ദുഃഖം), ഭൗതികമായോ (സമ്പത്ത്/ദാരിദ്ര്യം) ഇവിടെ ഒരു അവസ്ഥയും ശാശ്വതമല്ലെന്ന് അദ്ദേഹം അടിവരയിടുന്നു. ഈ യാഥാർത്ഥ്യം ഉൾക്കൊള്ളുന്നതാണ് മനുഷ്യന്റെ ഏറ്റവും വലിയ മാനസിക സമാധാനം.",
    enSummary: "These verses function as a sophisticated theoretical framework for navigating socio-economic limitations. Al-Shafi'i deploys a master-level literary device (Tashbeeh Dhimni—implicit simile) to illustrate the absolute paradox of seeking capital from a fundamentally miserly entity, paralleling it with the suicidal absurdity of plunging into fire for hydration. Fire destroys rather than sustains; exactly like begging from a miser destroys dignity. He then brilliantly addresses modern economic anxiety and destructive burnout culture. He establishes a profound law of equilibrium using semantic contrast (Muqabalah): operating with calm, calculated execution (Ta'anni) mathematically will not decrease your destined outcomes, and frantic, toxic overexertion ('Ana') will not artificially break the algorithmic ceiling of your ordained metrics. Finally, he outlines the fundamental physical law of worldly existence using direct antithesis (Tibaq). By cementing the reality of constant fluctuation—that joy, sorrow, absolute misery, and immense prosperity are inherently volatile, temporary states—he provides a premium emotional stabilizer anchoring the mind in objective reality.",
    arSummary: "يغوص الشاعر في أعماق (الاقتصاد السلوكي - Behavioral Economics). يستخدم تقنية (التشبيه الضمني) المذهلة ليرسم غباء الموقف لمن يطلب الفضل من البخيل؛ فالنار التي تناقض طبيعة الماء، لا تروي الظمأ بل تحرق، وكذلك البخيل يهين كرامتك ولا يعطيك شيئاً. ثم يعالج أزمة (الاحتراق الوظيفي - Burnout) والقلق المهني، مقدراً قانوناً حتمياً من خلال (المقابلة) بين التأني والعناء: (التأني) والتنفيذ الاستراتيجي الهادئ لا يُنقص الفرص، و(العناء) والهلع الجنوني لا يكسر سقف الرزق المحدد سلفاً. إنها دعوة رياضية واضحة للإنتاجية المستدامة التي تحافظ على توازن الإنسان. ويختتم الفقرة بقانون (التداول والنسبية - Fluctuation) في العالم المادي، مستخدماً (الطباق) بين الحزن والسرور، والبؤس والرخاء، ليؤكد أن الديناميكية الكونية لا تسمح بثبات أي حالة شعورية أو مادية، وهذا الإدراك يشكل دفاعاً نفسياً ممتازاً."
  },
  {
    id: 4,
    titleMl: "ഭാഗം 4 (വരികൾ 19-26)",
    titleEn: "Section 4 (Lines 19-26)",
    titleAr: "المقطع الرابع (١٩-٢٦)",
    startLine: 19,
    endLine: 26,
    mlSummary: "കവിതയുടെ ഉപസംഹാരത്തിൽ ഇമാം ശാഫി (റ) മിനിമലിസത്തിന്റെ (Minimalism / الزهد) ഏറ്റവും ഉയർന്ന തലമാണ് ആവിഷ്കരിക്കുന്നത്. സമ്പത്ത് എന്നത് ബാഹ്യമായ കൂട്ടിവെക്കലുകളല്ല, മറിച്ച് അത് മാനസികമായ ഒരു അവസ്ഥയാണ് (Cognitive State). ഈ ലോകം മുഴുവൻ വെട്ടിപ്പിടിച്ച വലിയൊരു ചക്രവർത്തിക്കും, തനിക്ക് ലഭിച്ചത് കൊണ്ട് മാത്രം സംതൃപ്തനായ ഒരു സാധാരണക്കാരനും ലഭിക്കുന്ന ആന്തരിക സമാധാനം തികച്ചും തുല്യമാണ്; കാരണം രണ്ടുപേരുടെയും ഹൃദയത്തിൽ 'ഇനി വേറെയൊന്നും ആവശ്യമില്ല' (القناعة) എന്ന പൂർണ്ണതയാണുള്ളത്. തുടർന്ന്, മനുഷ്യന്റെ എല്ലാ അഹങ്കാരങ്ങളെയും ഇല്ലാതാക്കുന്ന മരണമെന്ന പരമമായ യാഥാർത്ഥ്യത്തെ (Existential Reality) അദ്ദേഹം അവതരിപ്പിക്കുന്നു. അന്തിമവിധി വന്നെത്തിയാൽ ഭൗമശാസ്ത്രപരമായോ സാങ്കേതികമായോ ഉള്ള ഒരു സുരക്ഷാ സംവിധാനങ്ങൾക്കും അവനെ രക്ഷിക്കാൻ കഴിയില്ല. അതിവിശാലമായ ഈ പ്രപഞ്ചം മുഴുവൻ (وَاسِعَةٌ) അവന് മുന്നിൽ ഒരു ഇരുട്ടുമുറിപോലെ ശ്വാസംമുട്ടിക്കുന്നതായി (ضَاقَ) മാറും. സ്ഥലവും കാലവും തമ്മിലുള്ള മനുഷ്യന്റെ ബോധം അവിടെ പൂർണ്ണമായും തകർന്നുവീഴുന്നു. കവിതയുടെ തുടക്കത്തിൽ പറഞ്ഞതുപോലെ കാലം അതിന്റെ രീതിയിൽ മാറിക്കോട്ടെ, കാരണം എത്ര വലിയ മെഡിക്കൽ സയൻസിനും മരണത്തിന് മുന്നിൽ മറുപടിയില്ല എന്ന യാഥാർത്ഥ്യം ഉൾക്കൊണ്ട്, ഭൗതിക ലോകത്തോടുള്ള അമിതമായ ആശ്രിതത്വം ഒഴിവാക്കി മാനസികമായ പൂർണ്ണ സ്വാതന്ത്ര്യം (Absolute liberation) നേടാനാണ് ഈ കാവ്യം ആഹ്വാനം ചെയ്യുന്നത്.",
    enSummary: "In this grand conclusion, Al-Shafi'i executes a complete structural teardown of the concept of \"wealth,\" attaching it strictly to cognitive framing: absolute contentment (Qana'ah). A person completely saturated with their baseline lot achieves a state of internal equilibrium mathematically identical to that of an emperor—material disparity is entirely neutralized by cognitive equality. He then shifts the analytical lens to Existential Determinism (Al-Manaya). When the ultimate decree touches down, all spatial, technological, and defensive infrastructures instantaneously collapse. He constructs a brilliant spatial paradox (Tibaq): the infinite vastness of the universe psychologically constricts into severe claustrophobia. Bringing the narrative full circle with flawless structural symmetry (Radd al-A'jaz 'ala al-Sadr), he seamlessly echoes the opening line. Let the unpredictable algorithms of time operate as they will, for ultimately, absolutely no advanced medical intervention or pharmacology can cure mortality. This is a highly sophisticated, premium academic mandate to unshackle oneself from the futile obsession with micro-managing a fundamentally temporary existence, achieving true spiritual liberation.",
    arSummary: "يصل الشاعر في هذه الخاتمة الملحمية إلى قمة (فلسفة الزهد - Spiritual Asceticism). يقوم بهندسة عكسية لمفهوم \"الثروة\"؛ فالغنى ليس تراكماً مادياً، بل هو (حالة إدراكية - Cognitive State) تسمى القناعة. عندما يمتلك الإنسان قلباً قنوعاً (Zero Desires)، يصل إلى نفس الإشباع النفسي والراحة لإمبراطور يحكم العالم بأكمله. التفاوت المادي يسقط تماماً أمام التساوي الشعوري. ثم يحول العدسة نحو (الحتمية الوجودية - Existential Determinism): الموت. عندما تحين النهاية، تتهاوى كل الأنظمة الدفاعية الجغرافية والفضائية. يصور ببراعة (المفارقة المكانية - Spatial Paradox) المذهلة بتقنية (الطباق) بين السعة والضيق؛ فالأرض الواسعة تنكمش سيكولوجياً وتتحول إلى زنزانة خانقة عندما ينفذ القضاء. يختتم المنظومة بعودة هيكلية متقنة (رد العجز على الصدر) إلى نقطة البداية \"دع الأيام\"، ليقرر في النهاية أن لا تكنولوجيا طبية أو دواء قادر على اختراق قانون الموت. إنها دعوة للتحرر المطلق من وهم السيطرة على الحياة وتفويض الأمر للخالق."
  }
];

const notesMap = {
  2: { // line 2 (Couplet 1)
    noteMl: "**الأَيَّامَ (Al-Ayyam):** 'ദിവസങ്ങൾ' എന്ന് പദാർത്ഥം. അലങ്കാരശാസ്ത്രത്തിലെ 'മജാസ് മുർസൽ' (مجاز مرسل - Synecdoche) പ്രയോഗമാണിത്. ചരിത്രമുഹൂർത്തങ്ങളെയും സാഹചര്യങ്ങളെയും മൊത്തത്തിൽ പ്രതിനിധീകരിക്കാനാണ് ഈ പദം ഉപയോഗിച്ചിരിക്കുന്നത്.",
    noteEn: "**الأَيَّامَ (Al-Ayyam):** This employs the rhetorical device *Majaz Mursal* (Synecdoche). By mentioning \"the days,\" the poet is referencing the totality of uncontrollable circumstances."
  },
  4: { // line 4 (Couplet 2)
    noteMl: "**اللَّيَالِي (Al-Layali - രാത്രികൾ):** കാവ്യശാസ്ത്രത്തിൽ ഇരുട്ടിന്റെയും, അപ്രതീക്ഷിതമായി കടന്നുവരുന്ന പ്രതിസന്ധികളുടെയും പ്രതീകമായാണ് 'രാത്രികളെ' ഉപയോഗിക്കാറുള്ളത് (الاستعارة - Metaphor).\n**حَادِثَةِ / حَوَادِثِ (Haditha / Hawadith):** ഒരേ ധാതുവിൽ നിന്നുള്ള പദങ്ങളുടെ ആവർത്തനം (الجناس الاشتقاقي - Al-Jinas Al-Ishtiqaqi).",
    noteEn: "**اللَّيَالِي (Al-Layali - രാത്രികൾ):** \"Nights\" are utilized as a classic literary metaphor symbolizing unforeseen darkness, uncertainty, and psychological terror.\n**حَادِثَةِ / حَوَادِثِ (Haditha / Hawadith):** (Al-Jinas Al-Ishtiqaqi)."
  },
  6: { // line 6 (Couplet 3)
    noteMl: "**رَجُلاً (Rajulan - ഒരു പുരുഷൻ / A man):** അറബി കാവ്യശാസ്ത്രത്തിൽ ഇതൊരു കേവല ലിംഗസൂചകമല്ല (Not merely a biological gender). മറിച്ച്, ക്ലാസിക്കൽ അറബി സാഹിത്യത്തിലെ ഏറ്റവും ഉന്നതമായ മാനുഷിക ഗുണമായ 'മുറൂഅത്ത്' (المروءة - Chivalry / Magnanimity / Fortitude) ആണ് ഇതിലൂടെ വിവക്ഷിക്കുന്നത്. കടുത്ത പ്രതിസന്ധികളിൽ ഉത്തരവാദിത്തം ഏറ്റെടുക്കാനും, പരാതികളില്ലാതെ പതറാതെ നിൽക്കാനുമുള്ള ഉന്നത വ്യക്തിത്വത്തെയും ആത്മധൈര്യത്തെയുമാണ് സാഹിത്യത്തിൽ 'റജുൽ' എന്ന് വിളിക്കുന്നത്.\n**شِيمَتُكَ (Sheematuka):** ഒരാളുടെ ജന്മസിദ്ധവും മാറ്റമില്ലാത്തതുമായ പ്രകൃതം. ഇതിനെ അറബി സാങ്കേതിക പദപ്രയോഗത്തിൽ 'അസ്സജിയ്യത്ത്' (السجية) എന്ന് വിളിക്കുന്നു. കൃത്രിമമായി ഉണ്ടാക്കിയെടുക്കുന്ന മുഖംമൂടിയല്ല, മറിച്ച് ജീനുകളിൽ അലിഞ്ഞുചേർന്ന സ്വഭാവമാണിത്.",
    noteEn: "**رَجُلاً (Rajulan - ഒരു പുരുഷൻ / A man):** In classical Arabic literature, *Rajulan* does not denote mere biological gender. It invokes the supreme concept of *Muru'ah* (المروءة - Chivalry, unyielding fortitude, and absolute reliability during crises). It is the archetype of perfect character, responsibility, and emotional maturity.\n**شِيمَتُكَ (Sheematuka):** Refers to an intrinsic, genetically embedded behavioral baseline. In Arabic technical terminology, this is known as *Al-Sajiyyah* (السجية - innate disposition)."
  },
  8: { // line 8 (Couplet 4)
    noteMl: "**البَرَايَا (Al-Baraya):** സൃഷ്ടികൾ (The creations). അനേകം മനുഷ്യർ അടങ്ങുന്ന വിശാലമായ സമൂഹത്തെയും അവരുടെ നിരന്തരമായ നിരീക്ഷണങ്ങളെയും സൂചിപ്പിക്കുന്നു. മനുഷ്യൻ എപ്പോഴും നിരീക്ഷിക്കപ്പെടുന്ന ഒരു വ്യവസ്ഥയുടെ (Social Panopticon) ഭാഗമാണെന്ന് ഈ വാക്ക് ദ്യോതിപ്പിക്കുന്നു.",
    noteEn: "**البَرَايَا (Al-Baraya):** Derived from the root Bara'a (to create), highlighting the universal scale of social observation and scrutiny."
  },
  10: { // line 10 (Couplet 5)
    noteMl: "**كَمَا قِيلَ (Kama Qeela):** \"പറയപ്പെട്ടതുപോലെ\". സമൂഹത്തിൽ പരമ്പരാഗതമായി നിലനിൽക്കുന്ന ഒരു തത്വത്തെ കാവ്യഘടനയിലേക്ക് വിദഗ്ദ്ധമായി വിളക്കിച്ചേർക്കുന്ന രീതിയാണിത്. അറബി സാഹിത്യത്തിൽ ഇതിനെ 'തദ്മീൻ' (التضمين - Tadmin) എന്ന് വിളിക്കുന്നു.",
    noteEn: "**كَمَا قِيلَ (Kama Qeela):** \"As it was said.\" The classical rhetorical technique of Tadmin (Incorporation), seamlessly weaving existing universal wisdom or proverbs into the poem's structural meter."
  },
  12: { // line 12 (Couplet 6)
    noteMl: "**قَطُّ (Qattu):** ഒരിക്കലും (Never / Ever). ഭാഷാശാസ്ത്രത്തിൽ ഒരു പ്രവൃത്തിയെ പൂർണ്ണമായും നിഷേധിക്കാൻ ഉപയോഗിക്കുന്ന പദമാണിത് (ظرف زمان لاستغراق النفي). ശത്രുവിന് മുന്നിലെ കീഴടങ്ങലിനെ ഇത് അസന്ദിഗ്ധമായി വിലക്കുന്നു.\n**شَمَاتَةَ (Shamatah):** ശത്രുക്കളുടെ വീഴ്ചയിലുള്ള ആനന്ദം (Schadenfreude). മാനസികമായി ഒരു മനുഷ്യനെ തകർക്കുന്ന ഏറ്റവും മൂർച്ചയേറിയ ആയുധമാണിത്.",
    noteEn: "**قَطُّ (Qattu):** A highly specialized linguistic particle (Zarf Zaman) used for absolute, categorical negation.\n**شَمَاتَةَ (Shamatah):** Schadenfreude (malicious joy derived from an adversary's total misfortune)."
  },
  14: { // line 14 (Couplet 7)
    noteMl: "**التشبيه الضمني (Tashbeeh Dhimni):** മറഞ്ഞിരിക്കുന്ന ഉപമ (Implicit Simile). രണ്ട് വ്യത്യസ്ത കാര്യങ്ങളെ ഉപമാവാചകങ്ങളില്ലാതെ ലയിപ്പിച്ച് അവതരിപ്പിക്കുന്ന അലങ്കാര പ്രയോഗം. പിശുക്കനിൽ നിന്ന് സഹായം ചോദിക്കുന്നത് ഫലം തരില്ല എന്ന് മാത്രമല്ല, അത് തീ പോലെ നിങ്ങളെ അപമാനത്തിൽ ചുട്ടെരിക്കുകയും ചെയ്യും.",
    noteEn: "**التشبيه الضمني (Tashbeeh Dhimni):** A master-level rhetorical construct (Implicit Simile) paralleling the futility of seeking charity from a miser with plunging into fire for hydration."
  },
  16: { // line 16 (Couplet 8)
    noteMl: "**المقابلة (Al-Muqabalah):** 'അത്തഅന്നി' (التَّأَنِّي - കൃത്യമായ പ്ലാനിങ്ങോടെയുള്ള ശാന്തമായ പ്രവർത്തനം) എന്ന പദവും 'അൽ-അനാഅ്' (العَنَاءُ - പരിഭ്രാന്തിയോടെയുള്ള അമിതാധ്വാനവും കഷ്ടപ്പാടും) എന്ന പദവും തമ്മിലുള്ള വിപരീതാർത്ഥം പ്രൊഫഷണൽ ജീവിതത്തിലെ സന്തുലിതാവസ്ഥയെ വരച്ചുകാട്ടുന്നു.",
    noteEn: "**المقابلة (Al-Muqabalah):** The precise semantic contrast (Al-Muqabalah) between calm deliberation and frantic exhaustion."
  },
  18: { // line 18 (Couplet 9)
    noteMl: "**الطباق (Tibaq - Antithesis):** പരസ്പരം വിപരീതാർത്ഥമുള്ള പദങ്ങൾ ഒരുമിച്ചു കൊണ്ടുവരുന്ന കാവ്യതന്ത്രം (ദുഃഖം/സന്തോഷം, ദാരിദ്ര്യം/സമൃദ്ധി). പ്രപഞ്ചത്തിന്റെ ദ്വന്ദ്വാത്മക സ്വഭാവത്തെ (Dualistic nature) ഇത് അടയാളപ്പെടുത്തുന്നു.",
    noteEn: "**الطباق (Tibaq - Antithesis):** Employing Tibaq (Antithesis) by structuring opposite conceptual binaries together to highlight reality's dualistic nature."
  },
  20: { // line 20 (Couplet 10)
    noteMl: "**قَنُوعٍ (Qanu'):** തികഞ്ഞ സംതൃപ്തി. സമ്പത്തിനെ ബാഹ്യമായ കൂട്ടിവെക്കലുകൾക്ക് പകരം ആന്തരികമായ മാനസികാവസ്ഥയായി (Cognitive state) നിർവചിക്കുന്ന സൂഫിസത്തിലെ ശക്തമായ ആശയം (القناعة).",
    noteEn: "**قَنُوعٍ (Qanu'):** Derived from absolute contentment. Redefining wealth purely as an internal cognitive state rather than external accumulation."
  },
  22: { // line 22 (Couplet 11)
    noteMl: "**بِسَاحَتِهِ (Bisahatihi):** മുറ്റത്ത് (In his courtyard). മരണം അനിവാര്യമായി പടിക്കൽ വന്നെത്തുന്നതിനെ കുറിക്കുന്ന മൂർച്ചയേറിയ രൂപകം (الاستعارة).",
    noteEn: "**بِسَاحَتِهِ (Bisahatihi):** A highly tangible spatial metaphor denoting the unescapable, physical arrival of mortality at one's personal threshold."
  },
  24: { // line 24 (Couplet 12)
    noteMl: "**وَاسِعَةٌ / ضَاقَ (Wasi'ah / Daqa):** വിശാലമായതും ഇടുങ്ങിയതും തമ്മിലുള്ള വൈരുദ്ധ്യം (Spatial Paradox - الطباق). മരണസമയത്തെ മനുഷ്യന്റെ ശ്വാസംമുട്ടലിനെ ദൃശ്യവൽക്കരിക്കുന്നു.",
    noteEn: "**وَاسِعَةٌ / ضَاقَ (Wasi'ah / Daqa):** The masterful spatial juxtaposition (Tibaq) of infinite expansiveness against claustrophobic constriction, illustrating ultimate psychological collapse."
  },
  26: { // line 26 (Couplet 13)
    noteMl: "**رد العجز على الصدر (Radd al-A'jaz 'ala al-Sadr):** അവസാന വരിയെ ആദ്യ വരിയുമായി (\"دع الأيام\") ബന്ധിപ്പിച്ച് കവിതയ്ക്ക് പൂർണ്ണത നൽകുന്ന കാവ്യ സമമിതി.",
    noteEn: "**رد العجز على الصدر (Radd al-A'jaz 'ala al-Sadr):** A masterclass in structural poetic symmetry, looping the conclusion directly back to the opening command."
  }
};

// Replace couplets and sections in the source content
// We look for "couplets: [" and "sections: ["
const coupletsRegex = /couplets:\s*\[[\s\S]*?\],\s*sections:/;
content = content.replace(coupletsRegex, `couplets: ${JSON.stringify(newCouplets, null, 4)},\n  sections:`);

const sectionsRegex = /sections:\s*\[[\s\S]*?\],\s*quatrains:/;
content = content.replace(sectionsRegex, `sections: ${JSON.stringify(newSections, null, 4)},\n  quatrains:`);

// Add notes to lines
for (const lineId of Object.keys(notesMap)) {
  const note = notesMap[lineId];
  const idStr = `id: ${lineId},`;
  // We'll replace the end of the line block
  const blockRegex = new RegExp(`(id:\\s*${lineId},[\\s\\S]*?words:\\s*\\[[\\s\\S]*?\\]\\s*})`, 'g');
  
  content = content.replace(blockRegex, (match, p1) => {
    // Inject notes before the closing brace
    const insertion = `,\n      noteMl: ${JSON.stringify(note.noteMl)},\n      noteEn: ${JSON.stringify(note.noteEn)}\n    }`;
    return p1.replace(/\s*}$/, insertion);
  });
}

fs.writeFileSync(poemPath, content);
console.log('Done!');

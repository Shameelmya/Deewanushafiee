const fs = require('fs');
const path = require('path');

const poemPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'poemData.ts');
let content = fs.readFileSync(poemPath, 'utf8');

// 1. Fix couplet IDs from 1-based to 0-based
// We need to match { id: 1, lineIndices: [0, 1] } and change to { id: 0, lineIndices: [0, 1] }
// But only inside the couplets array.
let coupletsMatch = content.match(/couplets:\s*\[([\s\S]*?)\],\s*sections:/);
if (coupletsMatch) {
  let coupletsStr = coupletsMatch[1];
  
  // Replace `id: X,` with `id: X-1,`
  // And also inject `arSharah`!
  // Section 1: Lines 1-6 -> Couplets id 0,1,2
  // Section 2: Lines 7-12 -> Couplets id 3,4,5
  // Section 3: Lines 13-18 -> Couplets id 6,7,8
  // Section 4: Lines 19-26 -> Couplets id 9,10,11,12

  const arSharah1 = "يفتتح الإمام الشافعي هذه المنظومة الفلسفية بتأسيس \"الصلابة النفسية\" (Psychological Resilience). يستخدم تقنية (التشخيص - Personification) في قوله \"دَعِ الأَيَّامَ\"، حيث يمنح الزمن إرادة حرة ليفعل ما يشاء، وهذا يمثل أعلى درجات التسليم الوجودي. من منظور (علم المعاني)، يأتي النهي في \"لا تجزع\" مدعوماً بتعليل منطقي قاطع: \"فما لحوادث الدنيا بقاء\". استخدام \"الليالي\" توظيف للرموز؛ فالليل يعكس وحشة المجهول.\\nثم يرتقي الشاعر إلى رسم النموذج الأرقى للكمال البشري، مستخدماً لفظة \"رَجُلاً\". في القاموس الأدبي العربي، الرجولة هنا لا تعني الذكورة البيولوجية، بل هي تجسيد لمفهوم (المروءة)، وهي القدرة على تحمل الصدمات (الأهوال) بثبات (جلداً) دون شكوى أو انهيار. ولكي لا يتحول هذا الثبات إلى قسوة وجفاء، اشترط الشاعر أن تكون (السجية) الأصيلة والعميقة لهذا الإنسان هي (السماحة والوفاء). إنه التوازن الأكاديمي الدقيق بين القوة الباطنية المطلقة والرحمة الظاهرية.";

  const arSharah2 = "ينتقل الشاعر من البناء النفسي الداخلي إلى (الديناميكية الاجتماعية - Social Dynamics) وإدارة السمعة (Reputation Management). يقدم استراتيجية (التمويه السوسيولوجي - Sociological Camouflage) من خلال التأكيد على أن \"السخاء\" هو أقوى جهاز مناعي اجتماعي للعيوب. الكرم يخلق ما يعرف في علم النفس بـ (تأثير الهالة - Halo Effect)، حيث أن نور العطاء الإنساني يمنع المجتمع من التدقيق في العيوب الشخصية. يستخدم تقنية (التضمين) في \"كما قيل\" ليثبت أن هذه حقيقة مجتمعية مطلقة. وفي البيتين الأخيرين، يقدم درساً نقدياً في الدفاع النفسي و(عزة النفس). يحرّم الشافعي تحريماً قاطعاً (باستخدام ظرف النفي \"قط\") إظهار الانكسار أمام الخصم، مبرراً ذلك سيكولوجياً بأن (الشماتة) تمثل (حرباً نفسية - Psychological Warfare) مدمرة، وألمها الوجداني يفوق حجم الخسارة الهيكلية ذاتها.";

  const arSharah3 = "يغوص الشاعر في أعماق (الاقتصاد السلوكي - Behavioral Economics). يستخدم تقنية (التشبيه الضمني) المذهلة ليرسم غباء الموقف لمن يطلب الفضل من البخيل؛ فالنار التي تناقض طبيعة الماء، لا تروي الظمأ بل تحرق، وكذلك البخيل يهين كرامتك ولا يعطيك شيئاً. ثم يعالج أزمة (الاحتراق الوظيفي - Burnout) والقلق المهني، مقدراً قانوناً حتمياً من خلال (المقابلة) بين التأني والعناء: (التأني) والتنفيذ الاستراتيجي الهادئ لا يُنقص الفرص، و(العناء) والهلع الجنوني لا يكسر سقف الرزق المحدد سلفاً. إنها دعوة رياضية واضحة للإنتاجية المستدامة التي تحافظ على توازن الإنسان. ويختتم الفقرة بقانون (التداول والنسبية - Fluctuation) في العالم المادي، مستخدماً (الطباق) بين الحزن والسرور، والبؤس والرخاء، ليؤكد أن الديناميكية الكونية لا تسمح بثبات أي حالة شعورية أو مادية، وهذا الإدراك يشكل دفاعاً نفسياً ممتازاً.";

  const arSharah4 = "يصل الشاعر في هذه الخاتمة الملحمية إلى قمة (فلسفة الزهد - Spiritual Asceticism). يقوم بهندسة عكسية لمفهوم \"الثروة\"؛ فالغنى ليس تراكماً مادياً، بل هو (حالة إدراكية - Cognitive State) تسمى القناعة. عندما يمتلك الإنسان قلباً قنوعاً (Zero Desires)، يصل إلى نفس الإشباع النفسي والراحة لإمبراطور يحكم العالم بأكمله. التفاوت المادي يسقط تماماً أمام التساوي الشعوري. ثم يحول العدسة نحو (الحتمية الوجودية - Existential Determinism): الموت. عندما تحين النهاية، تتهاوى كل الأنظمة الدفاعية الجغرافية والفضائية. يصور ببراعة (المفارقة المكانية - Spatial Paradox) المذهلة بتقنية (الطباق) بين السعة والضيق؛ فالأرض الواسعة تنكمش سيكولوجياً وتتحول إلى زنزانة خانقة عندما ينفذ القضاء. يختتم المنظومة بعودة هيكلية متقنة (رد العجز على الصدر) إلى نقطة البداية \"دع الأيام\"، ليقرر في النهاية أن لا تكنولوجيا طبية أو دواء قادر على اختراق قانون الموت. إنها دعوة للتحرر المطلق من وهم السيطرة على الحياة وتفويض الأمر للخالق.";

  // A function to get sharah by 1-based couplet ID
  function getSharah(id) {
    if (id <= 3) return arSharah1;
    if (id <= 6) return arSharah2;
    if (id <= 9) return arSharah3;
    return arSharah4;
  }

  // Parse and replace
  let newCoupletsStr = coupletsStr.replace(/{\s*id:\s*(\d+),([\s\S]*?)(?=\n\s*})/g, (match, idStr, rest) => {
    let oldId = parseInt(idStr, 10);
    let newId = oldId - 1;
    // Add arSharah if not exists
    let newRest = rest;
    if (!newRest.includes('arSharah:')) {
      newRest = rest + `,\n        arSharah: "${getSharah(oldId)}"\n`;
    }
    return `{
        id: ${newId},${newRest}`;
  });

  content = content.replace(coupletsMatch[0], `couplets: [${newCoupletsStr}\n    ],\n  sections:`);
}

// 2. Remove ** and * from noteMl and noteEn
// We can just use a global replace for `noteMl: "..."` and `noteEn: "..."`
content = content.replace(/noteMl:\s*"([^"]+)"/g, (match, p1) => {
  let cleaned = p1.replace(/\*\*/g, '').replace(/\*/g, '').trim();
  return `noteMl: "${cleaned}"`;
});

content = content.replace(/noteEn:\s*"([^"]+)"/g, (match, p1) => {
  let cleaned = p1.replace(/\*\*/g, '').replace(/\*/g, '').trim();
  
  // 3. Remove Malayalam characters/phrases from English notes
  // " - രാത്രികൾ" -> ""
  cleaned = cleaned.replace(/\s*-\s*രാത്രികൾ/g, '');
  // " - ഒരു പുരുഷൻ \/ A man" -> " - A man"
  cleaned = cleaned.replace(/\s*-\s*ഒരു പുരുഷൻ\s*\/\s*A man/g, ' - A man');
  // Just in case there are other Malayalam characters remaining, this is targeted enough.
  return `noteEn: "${cleaned}"`;
});

fs.writeFileSync(poemPath, content);
console.log('Fixed poem data!');

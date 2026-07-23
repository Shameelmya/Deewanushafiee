const fs = require('fs');
const path = require('path');

const poemPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'poemData.ts');
let content = fs.readFileSync(poemPath, 'utf8');

const simpleSharahs = [
  "يأمر الشاعر بترك الأمور لمجاريها والتسليم المطلق لقضاء الله وقدره، فلا ينبغي للإنسان أن يقلق مما تخبئه الأيام، بل عليه أن يطمئن ويرضى بما قسمه الله له.", 
  "ينهى الشاعر عن الخوف والجزع من مصائب الزمان ونوائبه، لأن كل محنة في هذه الدنيا مؤقتة وزائلة، ولا يوجد فيها حزن دائم ولا بلاء مستمر.", 
  "يحث الشاعر على التحلي بالصبر والشجاعة في مواجهة الشدائد، مع ضرورة الحفاظ على مكارم الأخلاق كالتسامح والوفاء بالعهود في كل الظروف.", 
  "يوضح الشاعر أن الإنسان بطبيعته غير معصوم وقد تكثر عيوبه وأخطاؤه بين الناس، ولكنه يرشد إلى طريقة فعالة لستر هذه العيوب وإخفائها.", 
  "يبين الشاعر أن الكرم والسخاء هو أفضل غطاء لعيوب الإنسان؛ فالناس تتغاضى عن زلات الشخص الكريم لحسن صنيعه، وكما قيل قديماً: الكرم يستر العيوب.", 
  "يحذر الشاعر تحذيراً شديداً من إظهار الضعف والانكسار أمام الأعداء؛ لأن فرحهم وشماتتهم بسقوطك أشد إيلاماً على النفس من المصيبة ذاتها.", 
  "يضرب الشاعر مثلاً بليغاً في عدم الجدوى من طلب العطاء من البخيل، فشأنه كشأن العطشان الذي يبحث عن الماء في وسط النار المشتعلة، فلن يجد إلا الهلاك.", 
  "يرسخ الشاعر عقيدة الإيمان بالرزق المقسوم؛ فالعمل بهدوء لا ينقص من رزقك شيئاً، والكدح المفرط لا يزيد فيه، فكل إنسان سيأخذ نصيبه المقدر له.", 
  "يؤكد الشاعر على قانون التغير وعدم الثبات في هذه الحياة؛ فدوام الحال من المحال، لا الحزن يستمر ولا الفرح يبقى، وتتبدل الأيام بين العسر واليسر.", 
  "يرفع الشاعر من قيمة القناعة، معتبراً إياها الغنى الحقيقي. فمن رضي بما عنده واكتفى به، تساوى في راحة البال مع من يملك كنوز الأرض كلها.", 
  "يذكر الشاعر بحتمية الموت الذي لا مفر منه؛ فإذا حان أجل الإنسان ونزل الموت بساحته، فلن تنفعه أسباب الأرض ولا حصونها، ولا يمكن لأي قوة أن ترده.", 
  "يبين الشاعر مدى عجز الإنسان أمام قضاء الله؛ فرغم اتساع الأرض وعظمتها، إلا أنها تضيق على المرء وتنسد أمامه كل السبل إذا نزل به القدر المحتوم.", 
  "يعود الشاعر في الختام ليؤكد على تسليمه المطلق للزمن وتقلباته؛ ففي النهاية لا يوجد دواء أو علاج يمكنه أن يدفع حتمية الموت عن الإنسان." 
];

let coupletsMatch = content.match(/couplets:\s*\[([\s\S]*?)\],\s*sections:/);
if (coupletsMatch) {
  let coupletsStr = coupletsMatch[1];
  
  // Here we carefully replace just the "arSharah": "..." part
  let newCoupletsStr = coupletsStr.replace(/"arSharah":\s*"[^"\\]*(?:\\.[^"\\]*)*"/g, (match, offset, string) => {
    // We need a way to know WHICH couplet this is.
    // Instead of simple global regex on the whole string, let's parse block by block.
    return match; // placeholder
  });

  // Better approach: regex to match each couplet block
  let blockRegex = /{\s*"id":\s*(\d+),[\s\S]*?"arSharah":\s*"[^"\\]*(?:\\.[^"\\]*)*"\s*}/g;
  newCoupletsStr = coupletsStr.replace(blockRegex, (match, idStr) => {
    let id = parseInt(idStr, 10);
    let shortSharah = simpleSharahs[id];
    
    // Replace the old arSharah line in this block with the new one
    return match.replace(/"arSharah":\s*"[^"\\]*(?:\\.[^"\\]*)*"/, `"arSharah": ${JSON.stringify(shortSharah)}`);
  });

  content = content.replace(coupletsMatch[0], `couplets: [${newCoupletsStr}\n    ],\n  sections:`);
  fs.writeFileSync(poemPath, content);
  console.log('Successfully updated couplets with simple Arabic Sharah!');
} else {
  console.log('Failed to match couplets array.');
}

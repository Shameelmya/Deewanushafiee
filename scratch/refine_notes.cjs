const fs = require('fs');
const path = require('path');

const poemPath = path.join(process.cwd(), 'src', 'data', 'shafiee-da-al-ayyam', 'poemData.ts');
let content = fs.readFileSync(poemPath, 'utf8');

const notesDict = {
  1: {
    ml: "الأَيَّامَ (Al-Ayyam): ഇതിന്റെ യഥാർത്ഥ അർത്ഥം 'ദിവസങ്ങൾ' എന്നാണ്. എന്നാൽ ഇവിടെ ഉദ്ദേശിക്കുന്നത് വിശാലമായ 'കാലം' (Time / Era) എന്നാണ്. അറബി അലങ്കാരശാസ്ത്രത്തിൽ ഇതിന് 'മജാസ് മുർസൽ' (مجاز مرسل) എന്ന് പറയുന്നു. അതായത്, കാലത്തിന്റെ ഒരു ഭാഗമായ 'ദിവസങ്ങൾ' എന്ന് പറയുകയും, അതിലൂടെ കാലത്തെ മുഴുവനായി ഉദ്ദേശിക്കുകയും ചെയ്യുന്ന കാവ്യാത്മക ശൈലിയാണിത്.",
    en: "الأَيَّامَ (Al-Ayyam): The literal meaning is \"the days.\" However, the poet uses it to refer to \"time\" or \"destiny\" as a whole. In Arabic rhetoric, this is called 'Majaz Mursal' (Synecdoche)—mentioning a part (days) to represent the whole (time and its unfolding events)."
  },
  3: {
    ml: "اللَّيَالِي (Al-Layali): 'രാത്രികൾ' എന്നാണ് അർത്ഥം. വെളിച്ചമില്ലാത്ത, എന്തും സംഭവിക്കാൻ സാധ്യതയുള്ള ഭയാനകമായ പ്രതിസന്ധികളെ സൂചിപ്പിക്കാൻ കാവ്യശാസ്ത്രത്തിൽ എപ്പോഴും 'രാത്രികളെ' പ്രതീകമായി ഉപയോഗിക്കാറുണ്ട് (الاستعارة - Metaphor). حَادِثَةِ / حَوَادِثِ (Haditha / Hawadith): ഒരേ അടിസ്ഥാനത്തിൽ (Root) നിന്നുണ്ടായ രണ്ട് പദങ്ങൾ അടുത്തടുത്ത് വന്നത് കവിതയ്ക്ക് പ്രത്യേക താളം നൽകുന്നു. ഇതിന് 'ജിനാസ് ഇശ്തിഖാഖി' (الجناس الاشتقاقي) എന്ന് പറയുന്നു.",
    en: "اللَّيَالِي (Al-Layali): Literally \"the nights.\" In Arabic literature, nights are metaphorically (الاستعارة) used to symbolize dark, terrifying, and unforeseen calamities because darkness conceals the unknown. حَادِثَةِ / حَوَادِثِ (Haditha / Hawadith): Using two words derived from the exact same root creates a beautiful phonetic harmony known as 'Al-Jinas Al-Ishtiqaqi'."
  },
  5: {
    ml: "رَجُلاً (Rajulan): വെറുമൊരു 'പുരുഷൻ' എന്നതിലുപരി, അറബി സാഹിത്യത്തിലെ ഏറ്റവും ഉന്നതമായ മാനുഷിക ഗുണമായ 'മുറൂഅത്ത്' (المروءة - Chivalry) എന്നതിനെയാണ് ഇത് കുറിക്കുന്നത്. കടുത്ത പ്രതിസന്ധികളിൽ തളരാതെ, പരാതികളില്ലാതെ ഉത്തരവാദിത്തം ഏറ്റെടുക്കുന്ന ധീരമായ വ്യക്തിത്വത്തെയാണ് ഇവിടെ 'റജുൽ' എന്ന് വിളിക്കുന്നത്. شِيمَتُكَ (Sheematuka): ഒരാളുടെ ജന്മസിദ്ധമായ പ്രകൃതം (السجية). അഥവാ, അഭിനയിച്ചുണ്ടാക്കുന്നതല്ല, മറിച്ച് രക്തത്തിൽ അലിഞ്ഞുചേർന്ന യഥാർത്ഥ സ്വഭാവം.",
    en: "رَجُلاً (Rajulan): Beyond just \"a man,\" this word evokes the supreme Arabian ideal of 'Muru\\'ah' (المروءة - Chivalry and Fortitude). It refers to a person of unyielding courage who takes responsibility during crises without complaining. شِيمَتُكَ (Sheematuka): A person's innate, genetically embedded disposition (السجية). It means tolerance must be your genuine, unforced nature, not an act."
  },
  7: {
    ml: "البَرَايَا (Al-Baraya): 'സൃഷ്ടികൾ' (മനുഷ്യർ). അനേകം മനുഷ്യർ അടങ്ങുന്ന വിശാലമായ സമൂഹത്തെയാണിത് സൂചിപ്പിക്കുന്നത്. നിങ്ങളുടെ തെറ്റുകൾ മറ്റുള്ളവർ കാണുമോ എന്ന ഉത്കണ്ഠയെ ഇത് ദ്യോതിപ്പിക്കുന്നു. (بَرَأ - സൃഷ്ടിച്ചു എന്ന ധാതുവിൽ നിന്നാണ് ഈ പദം വരുന്നത്).",
    en: "البَرَايَا (Al-Baraya): \"The creations\" (people). It highlights the vast society around you that constantly observes your flaws. It is derived from the root 'Bara\\'a' (to create)."
  },
  9: {
    ml: "كَمَا قِيلَ (Kama Qeela): \"പറയപ്പെട്ടതുപോലെ\". കാലാകാലങ്ങളായി സമൂഹത്തിൽ നിലനിൽക്കുന്ന ഒരു തത്വത്തെയോ പഴഞ്ചൊല്ലിനെയോ സ്വന്തം കവിതയിലേക്ക് വിദഗ്ദ്ധമായി വിളക്കിച്ചേർക്കുന്ന രീതിയാണിത്. അലങ്കാരശാസ്ത്രത്തിൽ ഇതിന് 'തദ്മീൻ' (التضمين - Tadmin) എന്ന് പറയുന്നു.",
    en: "كَمَا قِيلَ (Kama Qeela): \"As it was said.\" The poet is quoting an ancient, universally accepted proverb and weaving it into his poetry. In Arabic rhetoric, this technique of embedding existing wisdom is known as 'Tadmin'."
  },
  11: {
    ml: "قَطُّ (Qattu): 'ഒരിക്കലും'. ഭാഷാശാസ്ത്രത്തിൽ ഒരു പ്രവൃത്തിയെ ഭാവിയിലും പൂർണ്ണമായും നിഷേധിക്കാൻ ഉപയോഗിക്കുന്ന പദമാണിത്. ശത്രുവിന് മുന്നിലെ കീഴടങ്ങലിനെ ഇത് അസന്ദിഗ്ധമായി വിലക്കുന്നു. شَمَاتَةَ (Shamatah): നമ്മുടെ വീഴ്ചയിൽ ശത്രുക്കൾക്കുണ്ടാകുന്ന സന്തോഷം. ഇതൊരു മനുഷ്യന്റെ മാനസികാവസ്ഥയെ പൂർണ്ണമായും തകർക്കുന്ന ഏറ്റവും വലിയ വേദനയാണെന്ന് കവി ഓർമ്മിപ്പിക്കുന്നു.",
    en: "قَطُّ (Qattu): \"Never / Ever.\" A specialized linguistic particle used for absolute negation, strictly forbidding any display of weakness. شَمَاتَةَ (Shamatah): Schadenfreude, or the malicious joy enemies feel when they see you fall. The poet emphasizes that this psychological pain is far worse than the defeat itself."
  },
  13: {
    ml: "ഇവിടെ ഉപയോഗിച്ചിരിക്കുന്നത് 'തശ്ബീഹ് ളിമ്നി' (التشبيه الضمني) അഥവാ മറഞ്ഞിരിക്കുന്ന ഉപമയാണ്. പിശുക്കനിൽ നിന്ന് സഹായം ചോദിക്കുന്നത് ഫലം തരില്ല എന്ന് മാത്രമല്ല, അത് ദാഹിക്കുന്നവൻ തീയിലേക്ക് എടുത്തുചാടുന്നതിന് തുല്യമാണ്! തീ ഒരിക്കലും ദാഹം തീർക്കില്ല, പകരം അവനെ ചുട്ടെരിക്കും. അതുപോലെ പിശുക്കൻ നിങ്ങളെ സഹായിക്കില്ല, മറിച്ച് അപമാനിച്ച് നശിപ്പിക്കും.",
    en: "The poet uses 'Tashbeeh Dhimni' (التشبيه الضمني - Implicit Simile). He compares begging a miser for charity to a thirsty man seeking water inside a fire! Fire will never quench thirst; it will only burn him. Similarly, a miser will not help you, but will only burn your dignity."
  },
  15: {
    ml: "التَّأَنِّي (അത്തഅന്നി): സാവകാശത്തോടെയും കൃത്യമായ പ്ലാനിങ്ങോടെയുമുള്ള പ്രവർത്തനം. العَنَاءُ (അൽ-അനാഅ്): പരിഭ്രാന്തിയോടെയുള്ള അമിതാധ്വാനവും കഷ്ടപ്പാടും. ഈ രണ്ട് വിപരീതാശയങ്ങളെ ഒരുമിച്ചു കൊണ്ടുവന്ന് (المقابلة), ശാന്തമായി ജോലി ചെയ്യുന്നത് നിങ്ങളുടെ പ്രതിഫലം കുറയ്ക്കില്ലെന്നും, അമിതമായി കഷ്ടപ്പെടുന്നത് നിശ്ചയിക്കപ്പെട്ടതിനേക്കാൾ കൂടുതൽ നേടിത്തരില്ലെന്നും ഓർമ്മിപ്പിക്കുന്നു.",
    en: "التَّأَنِّي (At-Ta'anni): Calm, calculated deliberation. العَنَاءُ (Al-'Ana'): Frantic, exhausting overexertion. By contrasting these two opposites (المقابلة - Al-Muqabalah), the poet teaches that calm work won't decrease your destined provision, and toxic overexertion won't increase it."
  },
  17: {
    ml: "حُزْنٌ (ദുഃഖം) x سُرُورٌ (സന്തോഷം), بُؤْسٌ (ദാരിദ്ര്യം) x رَخَاءُ (സമൃദ്ധി) എന്നിങ്ങനെ പരസ്പരം വിപരീതാർത്ഥമുള്ള പദങ്ങൾ ഒരുമിച്ചു കൊണ്ടുവരുന്ന കാവ്യതന്ത്രമാണ് 'തിബാഖ്' (الطباق). ഈ ലോകത്ത് ഒരു അവസ്ഥയും ശാശ്വതമല്ലെന്ന യാഥാർത്ഥ്യത്തെ വരച്ചുകാട്ടാനാണ് ഈ രീതി ഉപയോഗിച്ചിരിക്കുന്നത്.",
    en: "حُزْنٌ (Sorrow) x سُرُورٌ (Joy), بُؤْسٌ (Misery) x رَخَاءُ (Prosperity). The poet brings opposite words together—a rhetorical device called 'Tibaq' (الطباق). This beautifully illustrates that nothing in this world is permanent, and life constantly swings between opposites."
  },
  19: {
    ml: "قَنُوعٍ (Qanu'): പൂർണ്ണ സംതൃപ്തി. സമ്പത്ത് എന്നത് പണം കൂട്ടിവെക്കലല്ല, മറിച്ച് 'ഇനി ഒന്നും ആവശ്യമില്ല' എന്ന മാനസികാവസ്ഥയാണെന്നാണ് കവി പറയുന്നത്. തനിക്കുള്ളതിൽ തൃപ്തിയടയുന്നവൻ, ഈ ലോകം മുഴുവൻ സ്വന്തമാക്കിയ ചക്രവർത്തിയെപ്പോലെ തന്നെ സമാധാനമുള്ളവനാണ്.",
    en: "قَنُوعٍ (Qanu'): Total contentment. The poet redefines wealth not as the accumulation of money, but as an internal state of mind. A person satisfied with what they have shares the exact same peace of mind as the emperor who owns the entire world."
  },
  21: {
    ml: "بِسَاحَتِهِ (Bisahatihi): 'അവന്റെ മുറ്റത്ത്' (In his courtyard). മരണം എന്നത് എപ്പോഴോ വരുന്ന ഒന്നല്ല, അത് ഓരോ മനുഷ്യന്റെയും പടിക്കൽ അനിവാര്യമായി വന്നെത്തുന്ന അതിഥിയാണെന്ന് ഓർമ്മിപ്പിക്കുന്ന ശക്തമായ രൂപകമാണിത് (الاستعارة).",
    en: "بِسَاحَتِهِ (Bisahatihi): \"In his courtyard.\" A powerful metaphor (الاستعارة) that personifies death not as a distant concept, but as an inevitable visitor that will physically step onto everyone's front porch."
  },
  23: {
    ml: "وَاسِعَةٌ (വിശാലമായത്) / ضَاقَ (ഇടുങ്ങിയത്). പ്രപഞ്ചം എത്ര വിശാലമാണെങ്കിലും, അല്ലാഹുവിന്റെ വിധി (മരണം) വന്നെത്തുമ്പോൾ മനുഷ്യന് ആ വിശാലത മുഴുവൻ ശ്വാസംമുട്ടുന്ന ഒരിടുങ്ങിയ മുറിപോലെ അനുഭവപ്പെടും. പരസ്പര വിരുദ്ധമായ പദങ്ങളിലൂടെ (الطباق) മരണസമയത്തെ മനുഷ്യന്റെ നിസ്സഹായതയാണ് കാണിക്കുന്നത്.",
    en: "وَاسِعَةٌ (Vast) / ضَاقَ (Narrows). Even though the universe is infinitely vast, when the final decree (death) arrives, the dying person feels as if the entire world has shrunk into a suffocating, tiny space. This contrast (الطباق) highlights human helplessness."
  },
  25: {
    ml: "കവിതയുടെ തുടക്കത്തിൽ \"കാലം അതിനിഷ്ടമുള്ളത് ചെയ്യട്ടെ (دع الأيام)\" എന്ന് പറഞ്ഞ കവി, അവസാന വരിയിലും \"കാലം ചതിക്കാൻ വിട്ടേക്കുക (دع الأيام)\" എന്ന് ആവർത്തിക്കുന്നു. ആദ്യവരിയെ അവസാനവരിയുമായി ബന്ധിപ്പിക്കുന്ന ഈ മനോഹരമായ കാവ്യതന്ത്രത്തിന് 'റദ്ദുൽ അജസ് അലസ്സ്വദ്ർ' (رد العجز على الصدر) എന്ന് പറയുന്നു. മനുഷ്യന്റെ സകല അഹങ്കാരങ്ങൾക്കും മീതെ മരണം വിജയിക്കും എന്നതാണ് ഇതിലൂടെ അടിവരയിടുന്നത്.",
    en: "The poet beautifully loops the very last line back to the opening line by repeating \"Let the days (دع الأيام)\". This masterclass technique of connecting the end to the beginning is called 'Radd al-A\\'jaz \\'ala al-Sadr' (رد العجز على الصدر). It finalizes the core message: let time do its thing, because no medicine can cure mortality."
  }
};


let linesMatch = content.match(/lines:\s*\[([\s\S]*?)\],\s*couplets:/);
if (linesMatch) {
  let linesStr = linesMatch[1];
  
  // We'll replace the notes in each line block using the notesDict mapping.
  // Note that lines are 1-based IDs, and notes are currently placed on the even lines (2, 4, 6...)
  // But wait, earlier in this turn I had the keys as 1, 3, 5... ? 
  // Let's check which lines actually have the notes. Let's just match any `noteMl: "..."` and `noteEn: "..."` within a block of `id: X,`.
  
  let newLinesStr = linesStr.replace(/{\s*id:\s*(\d+),([\s\S]*?)(noteMl:\s*"[^"]*",\s*noteEn:\s*"[^"]*")\s*}/g, (match, idStr, rest) => {
    let id = parseInt(idStr, 10);
    // The previous script injected notes on line id 2, 4, 6...
    // We can just look up the odd index by subtracting 1.
    let noteKey = id - 1; 
    let note = notesDict[noteKey];
    if (!note) {
      // Just in case, try the exact id
      note = notesDict[id];
    }
    
    if (note) {
      let replacement = `noteMl: ${JSON.stringify(note.ml)},\n      noteEn: ${JSON.stringify(note.en)}`;
      return `{\n      id: ${id},${rest}${replacement}\n    }`;
    }
    return match;
  });

  content = content.replace(linesMatch[0], `lines: [${newLinesStr}\n  ],\n  couplets:`);
  fs.writeFileSync(poemPath, content);
  console.log('Successfully refined notes!');
} else {
  console.log('Failed to match lines array.');
}

const fs = require('fs');

let content = fs.readFileSync('src/components/GlossaryView.tsx', 'utf8');

const target = `{filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-emerald-50/40 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="p-3 sm:p-4">
                    <div className="font-arabic amiri-bold text-lg sm:text-xl text-emerald-700 dark:text-emerald-400">
                      {item.wordAr}
                    </div>
                    {item.exampleLineNumber && (
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-sans block mt-0.5" dir="ltr">
                        {interfaceLang === 'ml' ? \`വരി \${item.exampleLineNumber}\` : \`Line \${item.exampleLineNumber}\`}
                      </span>
                    )}
                  </td>

                  <td className="p-3 sm:p-4">
                    <div className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] px-2 py-0.5 rounded-md font-arabic amiri-bold">
                      {item.rootAr}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-arabic">
                      {item.typeAr}
                    </div>
                  </td>

                  <td className="p-3 sm:p-4 font-semibold text-slate-800 dark:text-slate-100 text-left text-xs sm:text-sm" dir="ltr">
                    {item.meaningMl}
                  </td>

                  <td className="p-3 sm:p-4 text-slate-500 dark:text-slate-400 italic text-left text-xs sm:text-sm" dir="ltr">
                    {item.meaningEn}
                  </td>
                </tr>
              ))}`;

const replacement = `{filteredItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    className="hover:bg-emerald-50/40 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3 sm:p-4">
                      <div className="font-arabic amiri-bold text-lg sm:text-xl text-emerald-700 dark:text-emerald-400">
                        {item.wordAr}
                      </div>
                      {item.exampleLineNumber && (
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-sans block mt-0.5" dir="ltr">
                          {interfaceLang === 'ml' ? \`വരി \${item.exampleLineNumber}\` : \`Line \${item.exampleLineNumber}\`}
                        </span>
                      )}
                    </td>

                    <td className="p-3 sm:p-4">
                      <div className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] px-2 py-0.5 rounded-md font-arabic amiri-bold">
                        {item.rootAr}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-arabic">
                        {item.typeAr}
                      </div>
                    </td>

                    <td className="p-3 sm:p-4 font-semibold text-slate-800 dark:text-slate-100 text-left text-xs sm:text-sm" dir="ltr">
                      {item.meaningMl}
                    </td>

                    <td className="p-3 sm:p-4 text-slate-500 dark:text-slate-400 italic text-left text-xs sm:text-sm" dir="ltr">
                      {item.meaningEn}
                    </td>
                  </tr>
                  {(item.singular || item.plural || (item.synonyms && item.synonyms.length > 0) || (item.antonyms && item.antonyms.length > 0)) && (
                    <tr className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-200 dark:border-slate-800">
                      <td colSpan={4} className="p-3 sm:px-4 sm:pb-4 text-left" dir="ltr">
                        <div className="flex flex-wrap gap-4 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-xs text-slate-600 dark:text-slate-300">
                          {item.singular && (
                            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1.5 rounded-md">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">Singular (مفرد):</span>
                              <span className="font-arabic font-bold text-sm" dir="rtl">{item.singular}</span>
                            </div>
                          )}
                          {item.plural && (
                            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1.5 rounded-md">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">Plural (جمع):</span>
                              <span className="font-arabic font-bold text-sm" dir="rtl">{item.plural}</span>
                            </div>
                          )}
                          {item.synonyms && item.synonyms.length > 0 && (
                            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1.5 rounded-md">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">Synonyms (مرادفات):</span>
                              <div className="flex flex-wrap gap-1">
                                {item.synonyms.map((s, idx) => (
                                  <span key={idx} className="bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded text-[11px]">
                                    <span className="font-arabic font-bold text-sm ml-1" dir="rtl">{s.ar}</span>
                                    <span>({s.ml})</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {item.antonyms && item.antonyms.length > 0 && (
                            <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 px-2.5 py-1.5 rounded-md">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">Antonyms (أضداد):</span>
                              <div className="flex flex-wrap gap-1">
                                {item.antonyms.map((a, idx) => (
                                  <span key={idx} className="bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded text-[11px]">
                                    <span className="font-arabic font-bold text-sm ml-1" dir="rtl">{a.ar}</span>
                                    <span>({a.ml})</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}`;

content = content.replace(target, replacement);

fs.writeFileSync('src/components/GlossaryView.tsx', content);
console.log('GlossaryView updated');

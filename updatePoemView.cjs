const fs = require('fs');
let content = fs.readFileSync('src/components/PoemView.tsx', 'utf8');

// 1. Add state for quatrain
const stateTarget = `const [hoveredWordKey, setHoveredWordKey] = useState<string | null>(null);`;
const stateReplacement = `const [hoveredWordKey, setHoveredWordKey] = useState<string | null>(null);
  const [sharahQuatrainState, setSharahQuatrainState] = useState<Record<number, 'default' | 'ar'>>({});

  const toggleQuatrainSharah = (quatrainId: number) => {
    setSharahQuatrainState((prev) => ({
      ...prev,
      [quatrainId]: prev[quatrainId] === 'ar' ? 'default' : 'ar',
    }));
  };`;
content = content.replace(stateTarget, stateReplacement);

// 2. Add quatrain logic in the map loop
const loopStartTarget = `const modeState = sharahCoupletState[coupletId] || 'default';`;
const loopStartReplacement = `const modeState = sharahCoupletState[coupletId] || 'default';

          const quatrainData = poem.quatrains?.find((q) => q.lineIndices.includes(line.id - 1));
          const isQuatrainEnd = quatrainData && quatrainData.lineIndices[quatrainData.lineIndices.length - 1] === line.id - 1;
          const qModeState = quatrainData ? (sharahQuatrainState[quatrainData.id] || 'default') : 'default';`;
content = content.replace(loopStartTarget, loopStartReplacement);

// 3. Render quatrain at the end of the line (below couplet/section)
const endLineTarget = `{/* Section Summary Box (Every Section End) */}`;
const endLineReplacement = `{/* Quatrain Ultra Detailed Box (Every 4 Lines) */}
              {isQuatrainEnd && quatrainData && (
                <div className="mt-6 pt-4 border-t-2 border-indigo-200 dark:border-indigo-900/50">
                  <div className="bg-indigo-50/80 dark:bg-indigo-950/30 rounded-2xl p-4 sm:p-5 border border-indigo-200/80 dark:border-indigo-800/60 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-600"></div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-indigo-800 dark:text-indigo-300">
                        <BookOpen size={16} />
                        <span>
                          {isHideMeaning
                            ? \`الشرح التفصيلي العميق للأبيات (\${quatrainData.lineIndices.map(i => i + 1).join(', ')})\`
                            : interfaceLang === 'ml'
                            ? \`വരികളുടെ വിശദമായ പഠനം (\${quatrainData.lineIndices.map(i => i + 1).join(', ')})\`
                            : \`Deep Detailed Analysis (Lines \${quatrainData.lineIndices.map(i => i + 1).join(', ')})\`}
                        </span>
                      </div>

                      {!isHideMeaning && (
                        <button
                          onClick={() => toggleQuatrainSharah(quatrainData.id)}
                          className="px-3 py-1 bg-white dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 rounded-full text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-xs transition-all flex items-center gap-1"
                        >
                          {qModeState === 'ar' ? (
                            <>
                              <Globe size={12} className="text-indigo-600" />
                              <span>{interfaceLang === 'ml' ? 'മലയാളം' : 'English'}</span>
                            </>
                          ) : (
                            <>
                              <BookOpen size={12} className="text-indigo-600" />
                              <span className="font-arabic font-bold">الشرح العميق</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <div className="min-h-[60px]">
                      {isHideMeaning || qModeState === 'ar' ? (
                        <p className="text-base sm:text-lg font-arabic amiri-regular text-right leading-loose text-slate-800 dark:text-slate-100 animate-in fade-in duration-150" dir="rtl">
                          {quatrainData.arSharah}
                        </p>
                      ) : (
                        <div>
                          {interfaceLang === 'ml' ? (
                            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-justify" dir="ltr">
                              {quatrainData.mlMeaning}
                            </p>
                          ) : (
                            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-justify" dir="ltr">
                              {quatrainData.enMeaning}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Section Summary Box (Every Section End) */}`;
content = content.replace(endLineTarget, endLineReplacement);

fs.writeFileSync('src/components/PoemView.tsx', content);
console.log('PoemView updated');

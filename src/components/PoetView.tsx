import React, { useState } from 'react';
import { PoetData } from '../types';
import { User, Award, Calendar, MapPin, BookOpen, Feather, Sparkles } from 'lucide-react';

const renderBioText = (text: string, isArabic: boolean) => {
  if (!text) return null;
  const paragraphs = text.split('\n\n');
  return (
    <div className={`space-y-4 ${isArabic ? 'font-arabic amiri-regular text-lg sm:text-xl text-justify' : 'text-xs sm:text-sm font-medium text-justify'}`}>
      {paragraphs.map((para, idx) => {
        const lines = para.split('\n');
        if (lines.length > 1) {
          return (
            <div key={idx} className="mb-2">
              <strong className={`block text-blue-800 dark:text-blue-300 ${isArabic ? 'mb-2 font-bold text-xl sm:text-2xl amiri-bold' : 'mb-1 font-bold text-sm sm:text-base'}`}>{lines[0]}</strong>
              <span className="whitespace-pre-line leading-relaxed">{lines.slice(1).join('\n')}</span>
            </div>
          );
        }
        return (
          <div key={idx} className="mb-2 whitespace-pre-line leading-relaxed">
            {para}
          </div>
        );
      })}
    </div>
  );
};

interface PoetViewProps {
  data: PoetData;
  interfaceLang?: 'ml' | 'en';
  isHideMeaning?: boolean;
}

export const PoetView: React.FC<PoetViewProps> = ({ data, interfaceLang, isHideMeaning }) => {
  const [langTab, setLangTab] = useState<'ar' | 'translation'>('ar');

  return (
    <div className="space-y-4 sm:space-y-6 pb-20">
      {/* Hero Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800">
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 p-5 sm:p-8 text-white relative">
          <div className="flex flex-col md:flex-row items-center gap-5 relative z-10">
            {/* Poet Avatar / Icon */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 border-2 border-white/20 shadow-xl">
              <User size={60} className="text-blue-200/80" />
            </div>

            {/* Title & Info */}
            <div className="text-center md:text-right w-full" dir="rtl">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-semibold mb-2 border border-white/20 text-blue-200">
                <Award size={13} />
                <span className="font-arabic amiri-bold">
                  {data.badgeAr}
                  {!isHideMeaning && ` (${interfaceLang === 'ml' ? data.badgeMl : data.badgeEn})`}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-arabic amiri-bold mb-1">{data.nameAr}</h1>
              {!isHideMeaning && (
                <h2 className="text-base sm:text-lg text-blue-200 font-semibold mb-3" dir="ltr">
                  {interfaceLang === 'ml' ? data.nameMl : data.nameEn}
                </h2>
              )}

              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs font-medium">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                  <Calendar size={14} className="text-blue-300" />
                  <span className="font-arabic" dir="rtl">{data.dates}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                  <MapPin size={14} className="text-blue-300" />
                  <span className="font-arabic" dir="rtl">{data.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 mix-blend-screen pointer-events-none"></div>
        </div>

        {/* Tab Selection */}
        {!isHideMeaning && (
          <div className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 p-2">
            <div className="flex bg-slate-200/50 dark:bg-slate-950/50 p-1 rounded-xl w-full sm:max-w-xs mx-auto text-sm font-semibold">
              <button
                onClick={() => setLangTab('ar')}
                className={`flex-1 py-1.5 rounded-lg transition-all font-arabic ${
                  langTab === 'ar' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                عربي
              </button>
              <button
                onClick={() => setLangTab('translation')}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  langTab === 'translation' ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {interfaceLang === 'ml' ? 'മലയാളം' : 'English Summary'}
              </button>
            </div>
          </div>
        )}

        {/* Detailed Biography Text */}
        <div className="p-4 sm:p-6">
          {langTab === 'ar' || isHideMeaning ? (
            <div className="text-right space-y-3" dir="rtl">
              <h3 className="text-lg sm:text-xl font-bold font-arabic amiri-bold text-slate-800 dark:text-slate-100 flex items-center justify-start gap-2 mb-4">
                <BookOpen size={18} className="text-blue-600" />
                <span>السيرة الذاتية المفصلة للشاعر:</span>
              </h3>
              {renderBioText(data.bioAr, true)}
            </div>
          ) : (
            <div className="space-y-3 text-justify" dir="ltr">
              <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-blue-600" />
                <span>
                  {interfaceLang === 'ml' ? 'കവിയുടെ വിശദമായ ജീവചരിത്രം:' : 'Detailed Biography of the Poet:'}
                </span>
              </h3>
              {renderBioText(interfaceLang === 'ml' ? data.bioMl : data.bioEn, false)}
            </div>
          )}
        </div>
      </div>

      {/* Key Biographical Milestones Cards */}
      <div className="space-y-3">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <Sparkles size={18} className="text-amber-500" />
          <span>{interfaceLang === 'ml' ? 'പ്രധാന വസ്തുതകൾ:' : 'Key Facts & Milestones:'}</span>
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {data.facts.map((fact, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-sm transition-shadow">
              <div className="flex gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400">{index + 1}</span>
                </div>
                <div className="space-y-2 w-full">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base font-arabic amiri-bold text-right" dir="rtl">
                    {fact.titleAr}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-arabic amiri-regular text-right" dir="rtl">
                    {fact.descAr}
                  </p>
                  
                  {!isHideMeaning && (
                    <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800/80 text-left" dir="ltr">
                      <h4 className="font-bold text-slate-700 dark:text-slate-200 text-xs sm:text-sm">
                        {interfaceLang === 'ml' ? fact.titleMl : (fact.titleEn || fact.titleMl)}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium mt-1">
                        {interfaceLang === 'ml' ? fact.descMl : (fact.descEn || fact.descMl)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Famous Literary Works List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Feather size={16} className="text-blue-600" />
          <span>
            {interfaceLang === 'ml' ? 'പ്രധാന കൃതികൾ (Famous Literary Works)' : 'Famous Literary Works'}
          </span>
        </h3>

        <div className="grid md:grid-cols-2 gap-2.5">
          {data.worksAr.map((workAr, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs"
            >
              <span className="font-medium text-slate-700 dark:text-slate-300" dir="ltr">
                {interfaceLang === 'ml' ? data.worksMl[idx] : data.worksEn[idx]}
              </span>
              <span className="font-arabic amiri-bold text-base text-blue-700 dark:text-blue-400" dir="rtl">
                {workAr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { BookOpen, ChevronLeft } from 'lucide-react';
import { poemsRegistry } from '../data/registry';

interface HomeViewProps {
  onSeeChapters: () => void;
  onSelectPoem: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSeeChapters, onSelectPoem }) => {
  const whatsappMsg = "Hello! I have seen your application and really liked it. We would love to create something similar. Could we discuss this further?";
  const encodedMsg = encodeURIComponent(whatsappMsg);
  
  const availablePoems = Object.values(poemsRegistry).map(bundle => bundle.poem);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white px-4 relative overflow-hidden font-english animate-gradient-xy py-12">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-400/30 dark:bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000" />
      <div className="absolute top-[40%] left-[20%] w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000" />
      
      <div className="z-10 mt-12 text-center max-w-4xl flex flex-col items-center justify-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 w-full px-4">
        
        {/* Logo and App Title */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h1 className="font-jomhuria font-normal text-[100px] md:text-[130px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 leading-[0.8] pt-6 drop-shadow-sm" dir="rtl">
            ديوان الشافعي
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="space-y-2 px-6 py-3 md:px-8 md:py-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/50 dark:border-slate-800/50 shadow-xl shadow-blue-900/5">
          <p className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
            Arabic Study Aid For Students
          </p>
          <div className="h-px w-16 bg-blue-200 dark:bg-blue-800 mx-auto rounded-full" />
          <p className="text-base md:text-lg text-blue-700 dark:text-blue-400 font-black tracking-wide">
            Class : Aliya 2
          </p>
        </div>

        {/* Chapters Section on Index */}
        <div className="w-full max-w-3xl pt-8">
          <h2 className="text-2xl font-bold font-arabic mb-6 text-slate-800 dark:text-white flex items-center justify-center gap-2">
            <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
            الفصول الدراسية
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {availablePoems.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelectPoem(p.id);
                }}
                className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-right flex flex-col justify-between group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="font-arabic font-bold text-2xl text-slate-800 dark:text-white mb-4 leading-relaxed relative z-10" dir="rtl">
                  {p.titleAr}
                </h4>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-700/50 relative z-10 w-full">
                  <span className="font-arabic font-bold text-blue-600 dark:text-blue-400" dir="rtl">{p.poetAr}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-arabic" dir="rtl">{p.meter}</span>
                    <span className="font-arabic">{p.totalLines} أبيات</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <div className="pt-12 w-full text-center z-10 flex flex-col items-center justify-center space-y-1.5">
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold tracking-tight uppercase">
            Coordination Of Islamic Colleges
          </p>
          <a 
            href={`https://wa.me/917559865389?text=${encodedMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] transition-all hover:opacity-80 inline-flex items-center gap-1 bg-white/30 dark:bg-slate-900/30 px-3 py-1.5 rounded-full"
          >
            <span className="font-light text-slate-600 dark:text-slate-400">developed and designed by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Shameel Wafy Malayamma</span>
          </a>
        </div>
      </div>
    </div>
  );
};

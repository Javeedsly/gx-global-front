'use client';
import Image from 'next/image';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-emerald-700 dark:bg-emerald-800 border-t border-emerald-600 dark:border-emerald-700 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          
          <div className="flex items-center justify-center mb-4 relative group cursor-pointer">
            {/* Parıltı (glow) effekti - daha qabarıq edilib */}
            <div className="absolute inset-0 bg-emerald-300/30 dark:bg-emerald-400/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <Image 
              src="/gx_2.png" 
              alt="GX Global Logo" 
              width={160} 
              height={45} 
              className="object-contain relative z-10 transition-all duration-300 group-hover:scale-105 drop-shadow-lg group-hover:drop-shadow-2xl dark:drop-shadow-[0_0_20px_rgba(52,211,153,0.25)] dark:group-hover:drop-shadow-[0_0_35px_rgba(52,211,153,0.4)]"
            />
          </div>
          
          <p className="text-emerald-50 dark:text-emerald-100 max-w-lg font-medium transition-colors">
            {dict.footer.desc}
          </p>
        </div>

        <div className="border-t border-emerald-600/50 dark:border-emerald-700/50 pt-8 mt-8 text-center text-emerald-100/80 dark:text-emerald-200/70 font-medium transition-colors">
          <p>© 2018 GX-GLOBAL. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
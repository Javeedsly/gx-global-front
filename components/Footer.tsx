'use client';
import Image from 'next/image';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          
          {/* Loqonun arxa fonu tam şəffaf edildi və rəngi dəyişdirilmir */}
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/gx_2.png" 
              alt="GX Global Logo" 
              width={160} 
              height={45} 
              className="object-contain"
            />
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 max-w-lg font-medium transition-colors">
            {dict.footer.desc}
          </p>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 mt-8 text-center text-gray-400 dark:text-gray-500 font-medium transition-colors">
          <p>© 2018 GX-GLOBAL. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
'use client';
import Image from 'next/image';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/gx_2.png" 
              alt="GX Global Logo" 
              width={160} 
              height={45} 
              className="object-contain"
            />
          </div>
          <p className="text-gray-500 max-w-lg font-medium">{dict.desc}</p>
        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 text-center text-gray-400 font-medium">
          <p>© GX-GLOBAL. {dict.rights}</p>
        </div>
      </div>
    </footer>
  );
}
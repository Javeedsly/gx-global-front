'use client';
import { motion } from 'framer-motion';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-slate-900 border-t border-blue-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              GX-GLOBAL
            </h3>
          </div>
          <p className="text-gray-400 max-w-lg">{dict.desc}</p>
        </div>

        <div className="border-t border-blue-500/20 pt-8 mt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} GX-GLOBAL. {dict.rights}</p>
        </div>
      </div>
    </footer>
  );
}
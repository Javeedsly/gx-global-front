import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 text-center px-4 transition-colors duration-300">
      <div className="w-24 h-24 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-emerald-950 dark:text-emerald-50 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Səhifə Tapılmadı</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Axtardığınız səhifə mövcud deyil, adı dəyişdirilib və ya müvəqqəti olaraq əlçatan deyil.
      </p>
      <Link 
        href="/" 
        className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md shadow-emerald-900/20 inline-block"
      >
        Ana Səhifəyə Qayıt
      </Link>
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Səhifə tapılmadı | GX-GLOBAL",
  description: "Axtardığınız səhifə mövcud deyil.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6 text-white">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Səhifə tapılmadı
        </h1>

        <p className="mt-4 text-slate-300">
          Axtardığınız səhifə silinib, dəyişdirilib və ya müvəqqəti olaraq
          əlçatan deyil.
        </p>

        <Link
          href="/az"
          className="mt-8 inline-flex rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Ana səhifəyə qayıt
        </Link>
      </section>
    </main>
  );
}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, 
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // YENİLİK: Təhlükəsizlik Başlıqları (Security Headers)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // Saytın başqa yerdə iFrame kimi açılmasının qarşısını alır
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' } // Həmişə HTTPS istifadə etməyə məcbur edir
        ],
      },
    ];
  },
};

export default nextConfig;
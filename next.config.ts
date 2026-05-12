import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Səhifənin daha sürətli yüklənməsi üçün sıxılmanı aktiv edir
  compress: true, 
  
  // Şəkilləri ən yeni və yüngül formatlara (WebP və AVIF) çevirir
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
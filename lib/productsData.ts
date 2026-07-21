// lib/productsData.ts

export const descTranslations = {
  teroson: {
    az: "TEROSON® markalı premium məhsul.",
    en: "TEROSON® brand premium product.",
    ru: "Премиальный продукт марки TEROSON®.",
  },
  loctite: {
    az: "Sənaye üçün yapışdırıcı və sızdırmazlıq həlli.",
    en: "Adhesive and sealing solution for industry.",
    ru: "Клей и герметик для промышленности.",
  },
  molykote: {
    az: "Molykote yüksək performanslı sürtkü yağları.",
    en: "Molykote high-performance lubricants.",
    ru: "Высокоэффективные смазочные материалы Molykote.",
  },
  tessSan: {
    az: "TESS-SAN sənaye yağları və kəsmə mayeləri.",
    en: "TESS-SAN industrial oils and cutting fluids.",
    ru: "Промышленные масла и смазочно-охлаждающие жидкости TESS-SAN.",
  },
  speedol: {
    az: "Yüksək performanslı SPEEDOL mühərrik və sənaye yağları.",
    en: "High-performance SPEEDOL engine and industrial oils.",
    ru: "Высокопроизводительные моторные и промышленные масла SPEEDOL.",
  },
  yilmzaRedkutor: {
    az: "YILMAZ REDÜKTÖR - Sənaye reduktörlərinin lider üreticisi.",
    en: "YILMAZ REDÜKTÖR - Leading manufacturer of industrial reducers.",
    ru: "YILMAZ REDÜKTÖR - ведущий производитель промышленных редукторов.",
  },
  skf: {
    az: "SKF - Sənaye rulmanlarının və xidmətlərinin qlobal lider.",
    en: "SKF - Global leader in industrial bearings and services.",
    ru: "SKF - мировой лидер в области промышленных подшипников и услуг.",
  },
  yiwuYidaFilters: {
    az: "YIWU YIDA FILTERS - avtomobil və sənaye üçün keyfiyyətli filter məhsulları.",
    en: "YIWU YIDA FILTERS - quality filter products for automotive and industrial use.",
    ru: "YIWU YIDA FILTERS - качественные фильтры для автомобилей и промышленности.",
  },
  kluber: {
    az: "Klüber Lubrication - yüksək performanslı xüsusi sürtkü materialları üzrə qlobal lider.",
    en: "Klüber Lubrication - global leader in high-performance specialty lubricants.",
    ru: "Klüber Lubrication - мировой лидер в области высокоэффективных специальных смазочных материалов.",
  },
};

export const uiTranslations = {
  az: {
    heroTitle: "Məhsullarımız",
    heroDesc: "",
    filters: "Filtrlər",
    searchPlaceholder: "Məhsul axtar...",
    brands: "Brendlər",
    allProducts: "Bütün Məhsullar",
    productsFound: "məhsul tapıldı",
    sortNewest: "Sıralama: Ən yenilər",
    sortAZ: "A - Z",
    sortZA: "Z - A",
    noProducts: "Axtarışınıza uyğun məhsul tapılmadı.",
    tryAgain:
      "Fərqli açar sözlər yazaraq və ya filtrləri təmizləyərək yenidən yoxlayın.",
    kluberIndustriesTitle: "Klüber Lubrication həll etdiyi sənaye sahələri",
    kluberIndustriesDesc:
      "Klüber Lubrication dünya üzrə geniş sənaye spektrində xüsusi sürtkü həlləri təqdim edir.",
  },
  en: {
    heroTitle: "Our Products",
    heroDesc:
      "Discover advanced technology, innovative solutions, and premium products meeting industry standards.",
    filters: "Filters",
    searchPlaceholder: "Search products...",
    brands: "Brands",
    allProducts: "All Products",
    productsFound: "products found",
    sortNewest: "Sort: Newest",
    sortAZ: "A - Z",
    sortZA: "Z - A",
    noProducts: "No products found matching your search.",
    tryAgain: "Try again with different keywords or clear the filters.",
    kluberIndustriesTitle: "Industries Klüber Lubrication Serves",
    kluberIndustriesDesc:
      "Klüber Lubrication delivers specialty lubrication solutions across a broad range of industries worldwide.",
  },
  ru: {
    heroTitle: "Наши продукты",
    heroDesc:
      "Откройте для себя передовые технологии, инновационные решения и премиальные продукты, соответствующие отраслевым стандартам.",
    filters: "Фильтры",
    searchPlaceholder: "Поиск продуктов...",
    brands: "Бренды",
    allProducts: "Все продукты",
    productsFound: "продуктов найдено",
    sortNewest: "Сортировка: Новые",
    sortAZ: "А - Я",
    sortZA: "Я - А",
    noProducts: "По вашему запросу ничего не найдено.",
    tryAgain:
      "Попробуйте использовать другие ключевые слова или очистите фильтры.",
    kluberIndustriesTitle: "Отрасли, в которых работает Klüber Lubrication",
    kluberIndustriesDesc:
      "Klüber Lubrication предлагает специальные смазочные решения для широкого спектра отраслей по всему миру.",
  },
};

export const products = [
  // TEROSON
  {
    id: 1,
    name: "TEROSON® 150",
    category: "TEROSON",
    image: "/Teroson_150_150ml_Can_267078_Front.webp",
    descKey: "teroson",
  },
  {
    id: 2,
    name: "TEROSON® WX 350",
    category: "TEROSON",
    image: "/Teroson_WX_350_793958_cavity_sealing_1l_EMEA-1.webp",
    descKey: "teroson",
  },
  {
    id: 3,
    name: "TEROSON® MS 222",
    category: "TEROSON",
    image: "/Teroson_MS_222_1823595_310ml_EMEA.webp",
    descKey: "teroson",
  },
  {
    id: 4,
    name: "TEROSON® MS 9320",
    category: "TEROSON",
    image: "/Teroson_MS_9320_2024435_310ml_EMEA.webp",
    descKey: "teroson",
  },
  {
    id: 5,
    name: "TEROSON® VR 10",
    category: "TEROSON",
    image: "/p0210541-henkel-teroson-vr-10-solvent-cleaner-1lt-bottle.png",
    descKey: "teroson",
  },
  {
    id: 6,
    name: "TEROSON® SB 3120",
    category: "TEROSON",
    image: "/Teroson_SB_3120_803863_coating_spray_500ml_EMEA-1.webp",
    descKey: "teroson",
  },
  {
    id: 7,
    name: "TEROSON® PU 9100",
    category: "TEROSON",
    image: "/Teroson_PU_9100_1896977_adhesive_310ml_EMEA-1.webp",
    descKey: "teroson",
  },
  {
    id: 8,
    name: "TEROSON® EP 5055",
    category: "TEROSON",
    image: "/TEROSON-EP-5055_SbS_200ml.webp",
    descKey: "teroson",
  },
  {
    id: 9,
    name: "TEROSON® EP 5065",
    category: "TEROSON",
    image: "/TEROSON-EP-5065_SbS_200ml.webp",
    descKey: "teroson",
  },
  {
    id: 10,
    name: "TEROSON® PU 6700",
    category: "TEROSON",
    image: "/packshot-grp-teroson-pu-6700-11-2021.webp",
    descKey: "teroson",
  },
  {
    id: 11,
    name: "TEROSON® PU 8519 P",
    category: "TEROSON",
    image: "/Teroson_PU_8519_P_1178000_primer_25ml_EMEA-1.webp",
    descKey: "teroson",
  },
  {
    id: 12,
    name: "TEROSON® SB S3000",
    category: "TEROSON",
    image: "/Teroson_SB_S3000_767199_stonechip_protection_1l_EMEA-1.webp",
    descKey: "teroson",
  },
  {
    id: 13,
    name: "TEROSON® BT SP 100",
    category: "TEROSON",
    image: "/Teroson_Bt_Sp_100_150012_Selbstklebende.webp",
    descKey: "teroson",
  },
  {
    id: 14,
    name: "TEROSON® PU 9500 FOAM",
    category: "TEROSON",
    image: "/packshot_indv_Loctite_PU_9500_foam_2556870_400ml_09_2019-1.webp",
    descKey: "teroson",
  },
  {
    id: 15,
    name: "TEROSON® EP 5010 TR",
    category: "TEROSON",
    image: "/TEROSON_EP-5010-TR_SbS_200ml.webp",
    descKey: "teroson",
  },
  {
    id: 16,
    name: "TEROSON® PU 9225 SF",
    category: "TEROSON",
    image: "/Teroson_PU_9225SF_882088_sealant_50ml_EMEA-1.webp",
    descKey: "teroson",
  },

  // Loctite
  {
    id: 17,
    name: "Loctite SI 5331 Thread sealant for plastic/metal fittings 100ml tube",
    category: "Loctite",
    image: "/loctite-si-5331-thread-sealant-low-strength-100ml-tube-01.webp",
    descKey: "loctite",
  },
  {
    id: 18,
    name: "Loctite PC 5070 Pipe Repair Kit for plastic/metall fittings 50mm, 1.8m",
    category: "Loctite",
    image:
      "/loctite-pc-5070-pipe-repair-kit-50mmx180cm-inkl-ea-3463-metal-compound-50g-and-gloves-idh255861-ol.webp",
    descKey: "loctite",
  },
  {
    id: 19,
    name: "Loctite 55 Pipe Sealing Cord for plastic & metal pipe threads 160m",
    category: "Loctite",
    image: "/loctite-55-gewindedichtfaden-160ml.webp",
    descKey: "loctite",
  },
  {
    id: 20,
    name: "Loctite 55 Pipe Sealing Cord for plastic & metal pipe threads 50m",
    category: "Loctite",
    image: "/loctite-55-gewindedichtfaden-492004.webp",
    descKey: "loctite",
  },
  {
    id: 21,
    name: "Loctite 545 Thread sealant 50ml",
    category: "Loctite",
    image: "/loctite-545-thread-sealant-50ml-01.webp",
    descKey: "loctite",
  },
  {
    id: 22,
    name: "Loctite 572 Pipe Thread Sealant for M80 coarse threads 250ml tube",
    category: "Loctite",
    image:
      "/loctite-572-pipe-thread-sealant-medium-strength-white-250ml-tube-01.webp",
    descKey: "loctite",
  },
  {
    id: 23,
    name: "Loctite 576 Thread sealant medium viscosity brown 50ml bottle",
    category: "Loctite",
    image:
      "/loctite-576-medium-viscosity-thread-sealant-brown-bottle-50ml-idh-234548-front-ol.webp",
    descKey: "loctite",
  },
  {
    id: 24,
    name: "Loctite 5776 Thread sealant for gas and water pipes 250ml tube",
    category: "Loctite",
    image:
      "/loctite-5776-thread-sealant-gas-and-water-pipes-250ml-idh-1545064.webp",
    descKey: "loctite",
  },
  {
    id: 25,
    name: "Loctite 5772 PMUC approved Pipe Thread Sealant 50ml",
    category: "Loctite",
    image:
      "/loctite-5772-medium-strength-thread-sealant-for-fittings-50ml-bottle.webp",
    descKey: "loctite",
  },
  {
    id: 26,
    name: "Loctite 221 Threadlocker for small screws low strength purple 250ml",
    category: "Loctite",
    image:
      "/loctite-221-threadlocker-for-small-screws-low-strength-purple-250ml-01.webp",
    descKey: "loctite",
  },
  {
    id: 27,
    name: "Loctite 259 Threadlocker low strength purple 50ml",
    category: "Loctite",
    image:
      "/loctite-259-threadlocker-low-stregth-purple-50-ml-idh-231678-front-ol.webp",
    descKey: "loctite",
  },
  {
    id: 28,
    name: "Loctite 225 Threadlocker medium viscosity low strength brown 250ml",
    category: "Loctite",
    image:
      "/loctite-225-threadlocker-medium-viscosity-low-strength-250ml-01.jpg",
    descKey: "loctite",
  },
  {
    id: 29,
    name: "Loctite 222 Threadlocker low strength purple 250ml",
    category: "Loctite",
    image:
      "/loctite-222-low-strength-threadlocking-adhesive-for-metal-threads-250ml.webp",
    descKey: "loctite",
  },
  {
    id: 30,
    name: "Loctite 932 Threadlocker for electronics low strength brown 50ml",
    category: "Loctite",
    image: "/loctite-932-50ml-schraubensicherung.jpg",
    descKey: "loctite",
  },
  {
    id: 31,
    name: "Loctite 2701 Threadlocker for chromated screws high strength 1 l",
    category: "Loctite",
    image:
      "/loctite-2701-threadlocker-for-chromated-screws-high-strength-1l-01.webp",
    descKey: "loctite",
  },
  {
    id: 32,
    name: "Loctite 262 Threadlocker thixotropic medium-to-high strength red 250ml",
    category: "Loctite",
    image:
      "/loctite-262-threadlocker-thixotropic-high-strenght-adhesive-idh-88396-2722898-250ml-276g-bottle-front-ol.jpg",
    descKey: "loctite",
  },

  // Molykote
  {
    id: 33,
    name: "Molykote BG-20 Synthetic high performance bearing grease 50kg",
    category: "Molykote",
    image:
      "/molykote-bg-20-grease-synthetic-high-performance-lubricating-grease-for-bearings-bucket-25kg.jpg",
    descKey: "molykote",
  },
  {
    id: 34,
    name: "Molykote HP-870 Fully fluorinated grease NLGI-2 1kg",
    category: "Molykote",
    image:
      "/molykote-hp-870-grease-fuly-fluorinated-lubricating-grease-tin-1kg-4045303-ol.webp",
    descKey: "molykote",
  },
  {
    id: 35,
    name: "Molykote PG 54 Plastislip Silicone grease NLGI 2-3 white 25kg pail",
    category: "Molykote",
    image:
      "/molykote-pg-54-plastislip-silicone-grease-nlgi-2-3-white-25kg-pail-001.jpg",
    descKey: "molykote",
  },
  {
    id: 36,
    name: "Molykote PG 21 High performance silicone grease NLGI-2 25 kg pail",
    category: "Molykote",
    image:
      "/molykote-pg-21-high-performance-silicone-grease-nlgi-2-25-kg-pail-001.jpg",
    descKey: "molykote",
  },
  {
    id: 37,
    name: "Molykote Microsize Powder MoS2 Solid Lubricant 1 kg",
    category: "Molykote",
    image: "/molykote-microsize-powder-mos2-solid-lubricant-1-kg-can.webp",
    descKey: "molykote",
  },
  {
    id: 38,
    name: "Molykote DX Paste Grease for assembly and long-term lubrication 50kg",
    category: "Molykote",
    image:
      "/molykote-dx-paste-fettpaste-montagepaste-weiss-dauerschmierung-50kg-fass.jpg",
    descKey: "molykote",
  },
  {
    id: 39,
    name: "Molykote P-1500 White anti-fretting paste for metal components 25kg",
    category: "Molykote",
    image:
      "/molykote-p-1500-white-anti-fretting-paste-for-metal-components-25kg-001.jpg",
    descKey: "molykote",
  },
  {
    id: 40,
    name: "Molykote P-1500 White anti-fretting paste for metal components 5kg",
    category: "Molykote",
    image:
      "/molykote-p-1500-semi-synthetic-oil-based-assembly-paste-lithium-5kg.webp",
    descKey: "molykote",
  },
  {
    id: 41,
    name: "Molykote P-40 V1 Metal-free adhesive assembly paste on PAO-basis 5kg",
    category: "Molykote",
    image:
      "/molykote-p-40-paste-metal-free-adhesive-lubricating-paste-dow-corning-pail-5kg-ol.webp",
    descKey: "molykote",
  },
  {
    id: 42,
    name: "Molykote P-74 Super Anti-Seize / Assembly paste PAO 500g can",
    category: "Molykote",
    image:
      "/molykote-p-74-super-anti-seize-assembly-paste-pao-500g-can-001.jpg",
    descKey: "molykote",
  },
  {
    id: 43,
    name: "Molykote PG 21 High performance silicone grease NLGI-2 5 kg pail",
    category: "Molykote",
    image:
      "/molykote-pg-21-high-performance-silicone-grease-nlgi-2-25-kg-pail-001.jpg",
    descKey: "molykote",
  },
  {
    id: 44,
    name: "Molykote Longterm W2 High performance grease NLGI-2 400g cartridge",
    category: "Molykote",
    image:
      "/molykote-dx-paste-fettpaste-montagepaste-weiss-dauerschmierung-50kg-fass.jpg",
    descKey: "molykote",
  },
  {
    id: 45,
    name: "Molykote PG-75 Plastislip grease based on MO/PAO NLGI-2 1kg can",
    category: "Molykote",
    image:
      "/molykote-p-74-super-anti-seize-assembly-paste-pao-500g-can-001.jpg",
    descKey: "molykote",
  },
  {
    id: 46,
    name: "Molykote BG-20 Synthetic high performance bearing grease 1kg can",
    category: "Molykote",
    image:
      "/molykote-bg-20-grease-synthetic-high-performance-lubricating-grease-for-bearings-bucket-25kg.jpg",
    descKey: "molykote",
  },
  {
    id: 47,
    name: "Molykote BR-2 Plus High performance grease NLGI-2 black 1kg tin",
    category: "Molykote",
    image:
      "/molykote-p-1500-semi-synthetic-oil-based-assembly-paste-lithium-5kg.webp",
    descKey: "molykote",
  },

  // TESS-SAN
  {
    id: 48,
    name: "EUROLUB BR 40",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 49,
    name: "EUROLUB BR 60",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 50,
    name: "EUROLUB BR 80",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 51,
    name: "COLDEX 2002",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 52,
    name: "COLDEX 2077 AF",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 53,
    name: "COLDEX 2090",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 54,
    name: "EUROGRIND A",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 55,
    name: "EUROGRIND ACo",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 56,
    name: "EUROGRIND TE 305",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 57,
    name: "FORCE K 102 B",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },
  {
    id: 58,
    name: "FORCE K 102 DK",
    category: "TESS-SAN",
    image: "/1-varil.jpg",
    descKey: "tessSan",
  },

  // SPEEDOL
  // SPEEDOL
  {
    id: 59,
    name: "SPD Hydraulic N6 Super Clean",
    category: "SPEEDOL",
    image: "/20189109345443-2.png",
    descKey: "speedol",
  },

  {
    id: 60,
    name: "SPD Hydraulic HFD-R",
    category: "SPEEDOL",
    image: "/15122025_150149_79975.png",
    descKey: "speedol",
  },

  {
    id: 61,
    name: "SPD Circulation Oil R&0",
    category: "SPEEDOL",
    image: "/15122025_150212_31702.png",
    descKey: "speedol",
  },

  {
    id: 62,
    name: "SPD Morlube Oil / Hadde Yatak Yağı",
    category: "SPEEDOL",
    image: "/29082025_145445_23431.png",
    descKey: "speedol",
  },

  {
    id: 63,
    name: "Generator Powercold FS 15W40",
    category: "SPEEDOL",
    image: "/2023413165248218-2.png",
    descKey: "speedol",
  },

  {
    id: 64,
    name: "Generator Power LA SB K4 15W40",
    category: "SPEEDOL",
    image: "/202341494716533-2.png",
    descKey: "speedol",
  },

  {
    id: 65,
    name: "Generator Power SB 15W40",
    category: "SPEEDOL",
    image: "/2023413165348875-2.png",
    descKey: "speedol",
  },

  {
    id: 66,
    name: "Generator Power HD Super 15W40",
    category: "SPEEDOL",
    image: "/2023413165412891-2.png",
    descKey: "speedol",
  },

  {
    id: 67,
    name: "Generator Power HD 15W40",
    category: "SPEEDOL",
    image: "/2023413165437766-2.png",
    descKey: "speedol",
  },

  // YILMAZ REDÜKTÖR
  {
    id: 69,
    name: "YILMAZ MR Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/dad0b544-6dcc-4324-a407-3c64b5125525.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 70,
    name: "YILMAZ MN Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/a751b348-cc93-4140-afe7-2dc195f0a1b5.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 71,
    name: "YILMAZ MV Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/a696b40c-c271-43ef-9ba8-21aadfdce95c.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 72,
    name: "YILMAZ MT Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/b3f26ea1-0efe-4d7b-b1ce-0753ed00ddd1.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 73,
    name: "YILMAZ MRF Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/4e20fcc0-27aa-4598-9db2-5b41d0650097.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 74,
    name: "YILMAZ NR Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/2ae0e3c3-d312-4441-af59-445fe42315d7.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 75,
    name: "YILMAZ NN Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/ccc89b1f-53bb-4634-b650-bd3a088e2007.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 76,
    name: "YILMAZ NV Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/34067cd5-87d1-455e-81a4-ed4fd5873ba1.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 77,
    name: "YILMAZ NT Serisi",
    category: "YILMAZ REDÜKTÖR",
    image: "/8e5fbf21-5fa6-41ba-845b-f4a83cf598f3.png",
    descKey: "yilmzaRedkutor",
  },
  {
    id: 78,
    name: "YILMAZ NR Flanş Opsiyonları",
    category: "YILMAZ REDÜKTÖR",
    image: "/aabc4a3c-3a8c-4591-923a-10a4879592e4.png",
    descKey: "yilmzaRedkutor",
  },

  // SKF
  {
    id: 79,
    name: "SKF Cam rollers",
    category: "SKF",
    image: "/0901d19680618376_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 80,
    name: "SKF Support rollers",
    category: "SKF",
    image: "/0901d19680618406_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 81,
    name: "SKF Cam followers",
    category: "SKF",
    image: "/0901d19680c37dca_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 82,
    name: "SKF Backing bearings",
    category: "SKF",
    image: "/0901d196806a1bcf_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 83,
    name: "SKF Split plummer block housings – SNL 2, 3, 5 and 6 series",
    category: "SKF",
    image: "/0901d196803e4d48_Flexible_1.avif",
    descKey: "skf",
  },
  {
    id: 84,
    name: "SKF Deep groove ball bearings",
    category: "SKF",
    image: "/0901d1968032b548_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 85,
    name: "SKF Pillow block ball bearing units",
    category: "SKF",
    image: "/0901d196808551bb_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 86,
    name: "SKF Angular contact ball bearings",
    category: "SKF",
    image: "/0901d196801a369a_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 87,
    name: "SKF Double direction angular contact thrust ball bearings",
    category: "SKF",
    image: "/0901d1968053a12b_png_highpreview_800.avif",
    descKey: "skf",
  },
  {
    id: 88,
    name: "SKF Precision lock nuts",
    category: "SKF",
    image: "/0901d196808e3a1b_png_highpreview_800.avif",
    descKey: "skf",
  },

  // YIWU YIDA FILTERS
  {
    id: 89,
    name: "OIL FILTER 80400255 / HTJ 7002",
    category: "YIWU YIDA FILTERS",
    image:
      "/Oil-Filter-15274-90225-P7107-P550077-Lf3386-O-1809-Ml1097A-1527490225-15274ep129-1527499128-15274ep128-Lp5899-05127-Hdr2376p.jpg",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 90,
    name: "OIL FILTER 1012010A26L#P1",
    category: "YIWU YIDA FILTERS",
    image: "/1090661.jpg",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 91,
    name: "AIR FILTER 80400399",
    category: "YIWU YIDA FILTERS",
    image:
      "/vulSIdyyw56IU6ygle6K4hlKil6NngVVoRGzlW5QLIHP5wF1BhgWPGQoWMZOzGZ8__01036.jpg",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 92,
    name: "AIR FILTER 20008334",
    category: "YIWU YIDA FILTERS",
    image: "/614V1VvJyTL.jpg",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 93,
    name: "FUEL FILTER 20009413",
    category: "YIWU YIDA FILTERS",
    image: "/s-l400.png",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 94,
    name: "A/C FILTER 1EA061P11",
    category: "YIWU YIDA FILTERS",
    image: "/Hefc08760f2ae4bdf90654a2f52bb11940.avif",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 95,
    name: "AIR FILTER 1109160BA01",
    category: "YIWU YIDA FILTERS",
    image: "/H2be40559785f4a2c82f19dadca7e2808b.avif",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 96,
    name: "OIL FILTER 1012015-14L",
    category: "YIWU YIDA FILTERS",
    image:
      "/Environmentally-Friendly-Oil-Filter-1012015-6bk-0000f-with-Rod-Dedicated.avif",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 97,
    name: "AIR FILTER 1109160DD01",
    category: "YIWU YIDA FILTERS",
    image: "/123776.jpg",
    descKey: "yiwuYidaFilters",
  },
  {
    id: 98,
    name: "FUEL FILTER 1105100U8050",
    category: "YIWU YIDA FILTERS",
    image: "/fuel-filter-original-for-jac-s2-n-auto-express.webp",
    descKey: "yiwuYidaFilters",
  },

  // Klüber Lubrication
  // TODO: Məhsul siyahısı hazır olanda bura əlavə et, məsələn:
  // {
  //   id: 99,
  //   name: "Klüber ...",
  //   category: "Klüber Lubrication",
  //   image: "/kluber-....webp",
  //   descKey: "kluber",
  // },
];

export const brandCategories = [
  "TEROSON",
  "Loctite",
  "Molykote",
  "TESS-SAN",
  "SPEEDOL",
  "YILMAZ REDÜKTÖR",
  "SKF",
  "YIWU YIDA FILTERS",
  "Klüber Lubrication",
];

// Klüber Lubrication - sənaye sahələri (məhsul kataloqu hazır olana qədər
// brend kliklənəndə göstərilən sənaye şəbəkəsi bölməsi)
export const kluberIndustries = [
  {
    key: "agriculture",
    icon: "Tractor",
    names: {
      az: "Kənd təsərrüfatı və Meşəçilik sənayesi",
      en: "Agriculture and Forestry industry",
      ru: "Сельское и лесное хозяйство",
    },
  },
  {
    key: "automotive",
    icon: "Car",
    names: {
      az: "Avtomobil sənayesi",
      en: "Automotive industry",
      ru: "Автомобильная промышленность",
    },
  },
  {
    key: "cement",
    icon: "Factory",
    names: {
      az: "Sement sənayesi",
      en: "Cement industry",
      ru: "Цементная промышленность",
    },
  },
  {
    key: "chemical",
    icon: "FlaskConical",
    names: {
      az: "Kimya sənayesi",
      en: "Chemical industry",
      ru: "Химическая промышленность",
    },
  },
  {
    key: "food",
    icon: "UtensilsCrossed",
    names: {
      az: "Qida sənayesi",
      en: "Food industry",
      ru: "Пищевая промышленность",
    },
  },
  {
    key: "glass",
    icon: "GlassWater",
    names: {
      az: "Şüşə sənayesi",
      en: "Glass industry",
      ru: "Стекольная промышленность",
    },
  },
  {
    key: "hydrogen",
    icon: "Atom",
    names: {
      az: "Hidrogen",
      en: "Hydrogen",
      ru: "Водород",
    },
  },
  {
    key: "hydropower",
    icon: "Waves",
    names: {
      az: "Hidroenergetika sənayesi",
      en: "Hydropower industry",
      ru: "Гидроэнергетика",
    },
  },
  {
    key: "intralogistics",
    icon: "Warehouse",
    names: {
      az: "Anbar avtomatlaşdırılması və Intralogistika",
      en: "Intralogistic & Warehouse Automation",
      ru: "Интралогистика и автоматизация складов",
    },
  },
  {
    key: "marine",
    icon: "Anchor",
    names: {
      az: "Dəniz sənayesi",
      en: "Marine industry",
      ru: "Морская отрасль",
    },
  },
  {
    key: "metal",
    icon: "Hammer",
    names: {
      az: "Metal sənayesi",
      en: "Metal industry",
      ru: "Металлургическая промышленность",
    },
  },
  {
    key: "mining",
    icon: "Mountain",
    names: {
      az: "Mədən sənayesi",
      en: "Mining industry",
      ru: "Горнодобывающая промышленность",
    },
  },
  {
    key: "oilgas",
    icon: "Fuel",
    names: {
      az: "Neft və qaz sənayesi",
      en: "Oil & gas industry",
      ru: "Нефтегазовая промышленность",
    },
  },
  {
    key: "cranes",
    icon: "Construction",
    names: {
      az: "Yükqaldıran kranlar",
      en: "Overhead cranes",
      ru: "Мостовые краны",
    },
  },
  {
    key: "paper",
    icon: "FileStack",
    names: {
      az: "Kağız sənayesi",
      en: "Paper industry",
      ru: "Бумажная промышленность",
    },
  },
  {
    key: "pharma",
    icon: "Pill",
    names: {
      az: "Farmasevtika sənayesi",
      en: "Pharmaceutical industry",
      ru: "Фармацевтическая промышленность",
    },
  },
  {
    key: "railway",
    icon: "TrainFront",
    names: {
      az: "Dəmir yolu sənayesi",
      en: "Railway industry",
      ru: "Железнодорожная отрасль",
    },
  },
  {
    key: "ropeway",
    icon: "CableCar",
    names: {
      az: "Kanat yolu sənayesi",
      en: "Ropeway industry",
      ru: "Канатные дороги",
    },
  },
  {
    key: "rubber",
    icon: "Recycle",
    names: {
      az: "Kauçuk və plastik sənayesi",
      en: "Rubber and plastics industry",
      ru: "Резиновая и пластиковая промышленность",
    },
  },
  {
    key: "steel",
    icon: "Flame",
    names: {
      az: "Polad sənayesi",
      en: "Steel industry",
      ru: "Сталелитейная промышленность",
    },
  },
  {
    key: "textile",
    icon: "Shirt",
    names: {
      az: "Toxuculuq sənayesi",
      en: "Textile industry",
      ru: "Текстильная промышленность",
    },
  },
  {
    key: "windpower",
    icon: "Wind",
    names: {
      az: "Külək enerjisi sənayesi",
      en: "Wind power industry",
      ru: "Ветроэнергетика",
    },
  },
  {
    key: "wiredrawing",
    icon: "Cable",
    names: {
      az: "Məftil çəkmə sənayesi",
      en: "Wire Drawing Industry",
      ru: "Волочение проволоки",
    },
  },
  {
    key: "wood",
    icon: "TreePine",
    names: {
      az: "Odun sənayesi",
      en: "Wood industry",
      ru: "Деревообрабатывающая промышленность",
    },
  },
];
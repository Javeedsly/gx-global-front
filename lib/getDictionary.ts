import 'server-only';

export type Locale = 'az' | 'en' | 'ru';

export interface Dictionary {
  nav: { home: string; services: string; features: string; contact: string; };
  hero: { 
    title: string; 
    subtitle: string; 
    desc: string; 
    btn_products: string; 
    btn_contact: string; 
    stats: { products: string; countries: string; support: string; }; 
  };
  features: { title: string; subtitle: string; items: { icon: string; title: string; description: string; }[]; };
  services: { title: string; subtitle: string; items: { title: string; desc?: string; }[]; };
  contactPage: { title: string; subtitle: string; addressTitle: string; address: string; phoneTitle: string; emailTitle: string; hoursTitle: string; hours: string; formTitle: string; formSubtitle: string; name: string; email: string; message: string; submit: string; };
  productsPage: {
    title: string;
    subtitle: string;
    categories: {
      oks: { name: string; desc: string };
      loctite: { name: string; desc: string };
      molykote: { name: string; desc: string };
      arcanol: { name: string; desc: string };
    };
  };
}

const dictionaries = {
  az: () => import('@/dictionaries/az.json').then((module) => module.default as unknown as Dictionary),
  en: () => import('@/dictionaries/en.json').then((module) => module.default as unknown as Dictionary),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default as unknown as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return await (dictionaries[locale]?.() ?? dictionaries.en());
};
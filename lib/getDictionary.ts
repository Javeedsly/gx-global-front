import "server-only";

import type { Locale } from "@/lib/seo";

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    features: string;
    products: string;
    contact: string;
  };

  hero: {
    title: string;
    subtitle: string;
    desc: string;
    btn_products: string;
    btn_contact: string;
    stats: {
      products: string;
      countries: string;
      support: string;
    };
  };

  features: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc?: string;
    }>;
  };

  testimonials?: {
    title: string;
    subtitle: string;
    items: Array<{
      content: string;
      author: string;
      role: string;
      company: string;
    }>;
  };

  cta: {
    title: string;
    subtitle: string;
    btn_start: string;
    btn_contact: string;
  };

  footer: {
    desc: string;
    rights: string;
  };

  seo: {
    title: string;
    description: string;
  };

  contactPage: {
    title: string;
    subtitle: string;
    addressTitle: string;
    address: string;
    phoneTitle: string;
    emailTitle: string;
    hoursTitle: string;
    hours: string;
    formTitle: string;
    formSubtitle: string;
    name: string;
    email: string;
    phoneOption: string;
    subject: string;
    message: string;
    submit: string;
  };

  productsPage: {
    title: string;
    subtitle: string;
    categories: {
      teroson: {
        name: string;
        desc: string;
      };
      loctite: {
        name: string;
        desc: string;
      };
      molykote: {
        name: string;
        desc: string;
      };
      arcanol: {
        name: string;
        desc: string;
      };
      yilmzaRedkutor: {
        name: string;
        desc: string;
      };
      skf: {
        name: string;
        desc: string;
      };
    };
  };
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  az: () =>
    import("@/dictionaries/az.json").then(
      (module) => module.default as Dictionary
    ),
  en: () =>
    import("@/dictionaries/en.json").then(
      (module) => module.default as Dictionary
    ),
  ru: () =>
    import("@/dictionaries/ru.json").then(
      (module) => module.default as Dictionary
    ),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]?.() ?? dictionaries.az();
}
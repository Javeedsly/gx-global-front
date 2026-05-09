import 'server-only';

const dictionaries = {
  az: () => import('../dictionaries/az.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ru: () => import('../dictionaries/ru.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.az();
};
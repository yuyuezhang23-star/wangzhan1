import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'portfolio_lang';

const I18nContext = createContext({
  lang: 'zh',
  setLang: () => {},
  t: (key) => key,
});

function normalizeLang(value) {
  if (value === 'zh' || value === 'en' || value === 'ja') return value;
  return 'zh';
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return normalizeLang(saved);
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    const title = translations[lang]?.['site.title'];
    if (title) document.title = title;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang] ?? translations.zh;
    return {
      lang,
      setLang,
      t: (key) => dict[key] ?? translations.zh?.[key] ?? key,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}


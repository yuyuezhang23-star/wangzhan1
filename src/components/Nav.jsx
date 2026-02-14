import { languages } from '../i18n/translations';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { useEffect, useMemo, useState } from 'react';

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const [activeId, setActiveId] = useState('banner');

  const links = useMemo(
    () => [
      { id: 'banner', label: t('nav.home') },
      { id: 'resume', label: t('nav.resume') },
      { id: 'advantages', label: t('nav.advantages') },
      { id: 'testimonials', label: t('nav.testimonials') },
      { id: 'contact', label: t('nav.contact') },
    ],
    [t],
  );

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0.05, 0.15, 0.25, 0.35],
      },
    );

    for (const n of nodes) observer.observe(n);
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#banner" className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors">
          <span className="font-display font-bold text-lg tracking-tight">{t('brand.name')}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={[
                'text-sm font-medium transition-colors',
                activeId === id ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900',
              ].join(' ')}
              aria-current={activeId === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-lg bg-gray-100 p-1">
            {languages.map((l) => {
              const active = l.id === lang;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLang(l.id)}
                  className={[
                    'px-3 py-1 text-xs font-medium rounded-md transition-colors',
                    active ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900',
                  ].join(' ')}
                  aria-pressed={active}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 移动端导航 */}
      <div className="md:hidden flex flex-col gap-2 pb-3 px-6">
        <div className="flex justify-center gap-4">
          {links.slice(0, 4).map(({ id, label }) => (
            <a 
              key={id} 
              href={`#${id}`} 
              className={[
                'text-xs transition-colors',
                activeId === id ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
              ].join(' ')}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="sm:hidden flex justify-center">
          <div className="flex items-center rounded-lg bg-gray-100 p-1">
            {languages.map((l) => {
              const active = l.id === lang;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLang(l.id)}
                  className={[
                    'px-3 py-1 text-xs font-medium rounded-md transition-colors',
                    active ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900',
                  ].join(' ')}
                  aria-pressed={active}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

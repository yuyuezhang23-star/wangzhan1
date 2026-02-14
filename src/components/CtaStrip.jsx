import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';
import ScrollReveal from './ScrollReveal.jsx';

const Strip = styled.section`
  padding: 6rem 1.5rem;
  background: #ffffff;
  text-align: left;
`;

const Inner = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
`;

const Sub = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 500;
  color: #0f172a;
  text-decoration: underline;
  text-decoration-color: #cbd5e1;
  text-underline-offset: 4px;
  transition: text-decoration-color 0.2s;
  &:hover {
    text-decoration-color: #0f172a;
  }
`;

export default function CtaStrip() {
  const { t } = useI18n();
  return (
    <Strip>
      <Inner>
        <ScrollReveal direction="up">
          <Title>{t('ctaStrip.title')}</Title>
          <Sub>{t('ctaStrip.sub')}</Sub>
          <Link href="#contact">{t('ctaStrip.cta')}</Link>
        </ScrollReveal>
      </Inner>
    </Strip>
  );
}

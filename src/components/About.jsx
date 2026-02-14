import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';
import ScrollReveal from './ScrollReveal.jsx';

const Section = styled.section`
  padding: 6rem 1.5rem;
  background: #f8fafc;
`;

const Inner = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h2`
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.5rem;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 0;
`;

export default function About() {
  const { t } = useI18n();
  return (
    <Section id="about">
      <Inner>
        <ScrollReveal direction="up">
          <Title>{t('about.title')}</Title>
          <Bio>{t('about.bio')}</Bio>
        </ScrollReveal>
      </Inner>
    </Section>
  );
}

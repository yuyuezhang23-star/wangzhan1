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
`;

const SectionTitle = styled.h2`
  font-family: 'Noto Serif SC', Georgia, serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 3rem;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  padding: 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: #e2e8f0;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
  font-family: 'Noto Serif SC', serif;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
`;

export default function Advantages() {
  const { t } = useI18n();
  const advantages = [
    {
      icon: '01',
      title: t('advantages.items.0.title'),
      desc: t('advantages.items.0.desc'),
    },
    {
      icon: '02',
      title: t('advantages.items.1.title'),
      desc: t('advantages.items.1.desc'),
    },
    {
      icon: '03',
      title: t('advantages.items.2.title'),
      desc: t('advantages.items.2.desc'),
    },
    {
      icon: '04',
      title: t('advantages.items.3.title'),
      desc: t('advantages.items.3.desc'),
    },
  ];

  return (
    <Section id="advantages">
      <Inner>
        <ScrollReveal direction="up">
          <SectionTitle>{t('advantages.title')}</SectionTitle>
        </ScrollReveal>
        <Grid>
          {advantages.map((a, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <Card>
                <Icon>{a.icon}</Icon>
                <CardTitle>{a.title}</CardTitle>
                <CardDesc>{a.desc}</CardDesc>
              </Card>
            </ScrollReveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

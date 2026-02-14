import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';
import ScrollReveal from './ScrollReveal.jsx';

const Section = styled.section`
  padding: 6rem 1.5rem;
  background: #ffffff;
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
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const Card = styled.div`
  padding: 0;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 2rem;
  transition: transform 0.2s ease;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  &:hover {
    transform: translateX(4px);
  }
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-style: normal;
`;

const Author = styled.p`
  font-weight: 600;
  color: #0f172a;
  font-size: 0.95rem;
`;

const Role = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 0.15rem;
`;

export default function Testimonials() {
  const { t } = useI18n();
  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
    },
    {
      quote: t('testimonials.items.1.quote'),
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
    },
    {
      quote: t('testimonials.items.2.quote'),
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
    },
  ];

  return (
    <Section id="testimonials">
      <Inner>
        <ScrollReveal direction="up">
          <SectionTitle>{t('testimonials.title')}</SectionTitle>
        </ScrollReveal>
        <Grid>
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <Card>
                <Quote>{testimonial.quote}</Quote>
                <Author>{testimonial.name}</Author>
                <Role>{testimonial.role}</Role>
              </Card>
            </ScrollReveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

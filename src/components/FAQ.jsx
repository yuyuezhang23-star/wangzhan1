import { useState } from 'react';
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

const Item = styled.div`
  border-bottom: 1px solid #e2e8f0;
  &:first-of-type {
    border-top: 1px solid #e2e8f0;
  }
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #0f172a;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #475569;
  }
`;

const Icon = styled.span`
  flex-shrink: 0;
  margin-left: 1rem;
  transform: ${(p) => (p.$open ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.25s;
  color: #64748b;
  font-size: 0.75rem;
`;

const Answer = styled.div`
  overflow: hidden;
  max-height: ${(p) => (p.$open ? '300px' : '0')};
  transition: max-height 0.35s ease-out;
`;

const AnswerInner = styled.p`
  padding: 0 0 1.25rem 0;
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.7;
`;

function FAQItem({ question, answer, open, onToggle }) {
  return (
    <Item>
      <Question type="button" onClick={onToggle} aria-expanded={open}>
        {question}
        <Icon $open={open}>▼</Icon>
      </Question>
      <Answer $open={open}>
        <AnswerInner>{answer}</AnswerInner>
      </Answer>
    </Item>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useI18n();

  const faqs = [
    { q: t('faq.items.0.q'), a: t('faq.items.0.a') },
    { q: t('faq.items.1.q'), a: t('faq.items.1.a') },
    { q: t('faq.items.2.q'), a: t('faq.items.2.a') },
  ];

  return (
    <Section id="faq">
      <Inner>
        <ScrollReveal direction="up">
          <SectionTitle>{t('faq.title')}</SectionTitle>
        </ScrollReveal>
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <FAQItem
              question={faq.q}
              answer={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </ScrollReveal>
        ))}
      </Inner>
    </Section>
  );
}

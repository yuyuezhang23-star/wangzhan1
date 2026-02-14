import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Section = styled.section`
  padding: 6rem 0;
  background: #0a192f;
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '04.';
    font-family: 'Courier New', monospace;
    font-size: 1.25rem;
    color: #64ffda;
    font-weight: 400;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #8892b0;
  margin-bottom: 2rem;
  max-width: 32rem;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.15);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(100, 255, 218, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  &[type="button"] {
    font-family: inherit;
    text-align: left;
    width: 100%;
  }
`;

const ContactIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactLabel = styled.span`
  font-size: 0.8rem;
  color: #8892b0;
  display: block;
  margin-bottom: 0.2rem;
`;

const ContactValue = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #ccd6f6;
`;

const ContactCopyHint = styled.span`
  font-size: 0.7rem;
  color: #64ffda;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s;
  ${ContactCard}:hover & { opacity: 1; }
`;

const CtaWrap = styled.div`
  margin-top: 0.5rem;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #0a192f;
  background: #64ffda;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #7effe0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.35);
  }
`;

// 简单图标
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16v12H4z" />
    <path d="m4 6 8 6 8-6" />
  </svg>
);
const IconWechat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.16-3.35-1.16-.45-1.13-1.1-1.43-1.1-1.43-.9-.6.07-.59.07-.59 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.65-4.55 4.9.36.31.68.92.68 1.86v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2z" />
  </svg>
);
const GITHUB_URL = 'https://github.com/yuyuezhang23-star';

export default function Contact() {
  const { t } = useI18n();
  const email = t('contact.items.email.value');
  const wechatId = t('contact.items.wechat.value');

  const copyWechat = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(wechatId).then(() => {
      const el = e.currentTarget;
      const hint = el.querySelector('[data-hint]');
      if (hint) {
        hint.textContent = t('contact.copied') || '已复制';
        setTimeout(() => { hint.textContent = t('contact.copyHint') || '点击复制'; }, 1500);
      }
    });
  };

  const items = [
    { key: 'email', label: t('contact.items.email.label'), value: email, href: `mailto:${email}`, icon: IconMail, isCopy: false },
    { key: 'wechat', label: t('contact.items.wechat.label'), value: wechatId, href: null, icon: IconWechat, isCopy: true },
    { key: 'github', label: t('contact.items.github.label'), value: t('contact.items.github.value'), href: GITHUB_URL, icon: IconGitHub, isCopy: false },
  ];

  return (
    <Section id="contact">
      <Container>
        <SectionTitle>{t('contact.title')}</SectionTitle>
        <Subtitle>{t('contact.sub')}</Subtitle>
        <ContactGrid>
          {items.map(({ key, label, value, href, icon: Icon, isCopy }) =>
            isCopy ? (
              <ContactCard key={key} as="button" type="button" onClick={copyWechat}>
                <ContactIcon><Icon /></ContactIcon>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <ContactLabel>{label}</ContactLabel>
                  <ContactValue>{value}</ContactValue>
                </div>
                <ContactCopyHint data-hint>{t('contact.copyHint') || '点击复制'}</ContactCopyHint>
              </ContactCard>
            ) : (
              <ContactCard key={key} href={href} target={key === 'github' ? '_blank' : undefined} rel={key === 'github' ? 'noopener noreferrer' : undefined}>
                <ContactIcon><Icon /></ContactIcon>
                <div>
                  <ContactLabel>{label}</ContactLabel>
                  <ContactValue>{value}</ContactValue>
                </div>
              </ContactCard>
            )
          )}
        </ContactGrid>
        <CtaWrap>
          <CtaButton href={`mailto:${email}`}>{t('contact.cta')}</CtaButton>
        </CtaWrap>
      </Container>
    </Section>
  );
}

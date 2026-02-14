import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Section = styled.section`
  padding: 6rem 0;
  background: #0a192f;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 60%;
    height: 120%;
    background: radial-gradient(ellipse, rgba(100, 255, 218, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
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
    content: '03.';
    font-family: 'Courier New', monospace;
    font-size: 1.25rem;
    color: #64ffda;
    font-weight: 400;
  }
`;

const SectionSub = styled.p`
  font-size: 0.95rem;
  color: #8892b0;
  margin-bottom: 2.5rem;
  max-width: 36rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.15);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: rgba(100, 255, 218, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  }
`;

const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(100, 255, 218, 0.12);
  color: #64ffda;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: background 0.25s ease, transform 0.25s ease;

  ${Card}:hover & {
    background: rgba(100, 255, 218, 0.2);
    transform: scale(1.05);
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  line-height: 1.65;
  margin-bottom: 1rem;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechTag = styled.li`
  font-size: 0.7rem;
  font-family: 'Courier New', monospace;
  color: #64ffda;
  background: rgba(100, 255, 218, 0.08);
  border: 1px solid rgba(100, 255, 218, 0.25);
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  transition: background 0.2s, border-color 0.2s;

  ${Card}:hover & {
    background: rgba(100, 255, 218, 0.14);
    border-color: rgba(100, 255, 218, 0.4);
  }
`;

const CtaWrap = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #64ffda;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(100, 255, 218, 0.3);
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    color: #ccd6f6;
  }
`;

// 四个能力对应的 SVG 图标
const IconEngineering = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconProduct = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);
const IconLearning = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 7 9.97 5.7a2 2 0 0 0 2.06 0L24 7" />
    <path d="M2 17 9.97 11.3a2 2 0 0 1 2.06 0L22 17" />
  </svg>
);
const IconCollaboration = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ICONS = [IconEngineering, IconProduct, IconLearning, IconCollaboration];

export default function Projects() {
  const { t, lang } = useI18n();

  const projects = [
    { title: t('advantages.items.0.title'), desc: t('advantages.items.0.desc'), tech: ['Vite', 'Webpack', 'ESLint', 'TypeScript'] },
    { title: t('advantages.items.1.title'), desc: t('advantages.items.1.desc'), tech: ['Product Thinking', 'UX Design', 'User Research'] },
    { title: t('advantages.items.2.title'), desc: t('advantages.items.2.desc'), tech: ['React', 'Vue', 'Next.js', 'Modern JS'] },
    { title: t('advantages.items.3.title'), desc: t('advantages.items.3.desc'), tech: ['Communication', 'Documentation', 'Agile'] },
  ];

  return (
    <Section id="projects">
      <Container>
        <SectionTitle>{t('nav.projects') || '项目'}</SectionTitle>
        <SectionSub>{t('projects.sub')}</SectionSub>
        <Grid>
          {projects.map((project, i) => {
            const Icon = ICONS[i];
            return (
              <Card key={i}>
                <CardIcon>{Icon ? <Icon /> : null}</CardIcon>
                <CardTitle>{project.title}</CardTitle>
                <CardDesc>{project.desc}</CardDesc>
                <TechList>
                  {project.tech.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </TechList>
              </Card>
            );
          })}
        </Grid>
        <CtaWrap>
          <CtaLink href="#contact">{t('projects.cta')}</CtaLink>
        </CtaWrap>
      </Container>
    </Section>
  );
}

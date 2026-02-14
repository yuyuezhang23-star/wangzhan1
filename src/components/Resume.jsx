import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Section = styled.section`
  padding: 6rem 0;
  background: #0a192f;
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
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60px;
    height: 2px;
    background: #64ffda;
  }
`;

const BioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BioItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Year = styled.span`
  font-weight: 700;
  color: #ccd6f6;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const Description = styled.span`
  font-size: 0.95rem;
  color: #8892b0;
  line-height: 1.6;
`;

const DescriptionLine = styled.div`
  font-size: 0.95rem;
  color: #8892b0;
  line-height: 1.6;
`;

export default function Resume() {
  const { t, lang } = useI18n();
  
  const bioItems = [
    {
      year: '2003',
      desc: t('resume.bio.0'),
    },
    {
      year: '2022',
      desc: t('resume.bio.1'),
    },
    {
      year: '2023',
      desc: t('resume.bio.2'),
    },
    {
      year: '2025',
      desc: t('resume.bio.3'),
    },
  ];

  return (
    <Section id="experience">
      <Container>
        <SectionTitle>
          Bio {lang === 'zh' ? '生平' : lang === 'ja' ? '生い立ち' : 'Bio'}
        </SectionTitle>
        <BioList>
          {bioItems.map((item, i) => (
            <BioItem key={i}>
              <DescriptionLine>
                <Year>{item.year}</Year>
                <Description>{item.desc}</Description>
              </DescriptionLine>
            </BioItem>
          ))}
        </BioList>
      </Container>
    </Section>
  );
}

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

const InterestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InterestLine = styled.div`
  font-size: 0.95rem;
  color: #8892b0;
  line-height: 1.6;
  
  .highlight {
    color: #c792ea;
    font-weight: 500;
  }
`;

const GalleryLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: #64ffda;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #ccd6f6;
    text-decoration: underline;
  }
`;

const DouyinLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  font-size: 0.95rem;
  color: #fe2c55;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    vertical-align: middle;
  }
  
  &:hover {
    color: #ff6b8a;
    transform: scale(1.02);
    text-decoration: underline;
  }
`;

export default function Interests() {
  const { t, lang } = useI18n();
  
  const interests = {
    en: 'Art, Music, Drawing, Playing Drums, Photography, Cat',
    zh: '艺术、音乐、绘画、打鼓、摄影、猫咪',
    ja: 'アート、音楽、絵画、ドラム演奏、写真、猫',
  };

  // 高亮某些词
  const highlightWords = {
    en: ['Drawing', 'Photography'],
    zh: ['绘画', '摄影'],
    ja: ['絵画', '写真'],
  };

  const formatInterests = (text, lang) => {
    const words = text.split(/[,、，]/).map(w => w.trim());
    const highlights = highlightWords[lang] || [];
    
    return words.map((word, i) => {
      const shouldHighlight = highlights.some(h => word.includes(h));
      return (
        <span key={i}>
          {shouldHighlight ? (
            <span className="highlight">{word}</span>
          ) : (
            <span>{word}</span>
          )}
          {i < words.length - 1 && (lang === 'zh' || lang === 'ja' ? '、' : ', ')}
        </span>
      );
    });
  };

  return (
    <Section id="interests">
      <Container>
        <SectionTitle>
          I ❤️ {lang === 'zh' ? '我 ❤️' : lang === 'ja' ? '私 ❤️' : 'I ❤️'}
        </SectionTitle>
        <InterestsList>
          <InterestLine>
            {formatInterests(interests.en, 'en')}
          </InterestLine>
          <InterestLine>
            {formatInterests(interests.zh, 'zh')}
          </InterestLine>
        </InterestsList>
        <GalleryLink href="#gallery">
          {lang === 'zh' ? '查看我的照片 →' : lang === 'ja' ? '私の写真を見る →' : 'View My Photos →'}
        </GalleryLink>
        <br />
        <DouyinLink
          href="https://www.douyin.com/user/MS4wLjABAAAAs2wEsgeATe0j-0ijm5fVsy_FqANrSeiMiZgobitBNujRGA9SKQr7UutqhRe5gLQx?from_tab_name=main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/douyin.png" alt="抖音" />
          {lang === 'zh' ? '记录生活' : lang === 'ja' ? '生活を記録' : 'Record Life'}
        </DouyinLink>
      </Container>
    </Section>
  );
}

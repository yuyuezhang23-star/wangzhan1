import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';

const BannerWrap = styled.section`
  padding: 4rem 0;
  background: #0a192f;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const IntroBox = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const IntroText = styled.div`
  font-size: 0.875rem;
  color: #8892b0;
  line-height: 1.6;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: start;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  font-family: 'Noto Serif SC', Georgia, serif;
`;

const NameSub = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #ccd6f6;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: 'Noto Serif SC', Georgia, serif;
`;

const Title = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: #8892b0;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const TitleSub = styled.p`
  font-size: clamp(0.875rem, 1.2vw, 1rem);
  color: #8892b0;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid rgba(100, 255, 218, 0.3);
  position: relative;
  overflow: hidden;
  background: #0a192f;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 0;
    filter: none;
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #ccd6f6;
  margin-bottom: 1rem;
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

const BioText = styled.div`
  font-size: clamp(0.95rem, 1.3vw, 1.05rem);
  color: #8892b0;
  line-height: 1.8;
  max-width: 700px;
  
  strong {
    color: #c792ea;
    font-weight: 600;
    background: transparent;
  }
`;

const CtaLink = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.875rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64ffda;
  background: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Courier New', monospace;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

export default function Banner() {
  const { t, lang } = useI18n();

  // 根据语言显示不同的介绍文字
  const getIntroText = () => {
    if (lang === 'zh') {
      return '你好，我是一名来自中国的独立应用开发者！';
    } else if (lang === 'ja') {
      return 'こんにちは、私は中国出身の独立したアプリ開発者です！';
    }
    return "Hello, I'm an indie app developer based in China!";
  };

  // 解析 bio 文本，高亮关键词（紫色/洋红色）
  const parseBio = (text) => {
    const keywords = ['React', 'Vue', 'TypeScript', 'UI', '设计', '架构', '性能', '体验', 'Web', '应用'];
    let result = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, '<strong>$1</strong>');
    });
    return result;
  };

  return (
    <BannerWrap id="about">
      <Container>
        <IntroBox>
          <IntroText>
            <div>Hello, I'm an indie app developer based in China!</div>
            <div>你好，我是一名来自中国的独立应用开发者！</div>
          </IntroText>
        </IntroBox>

        <MainContent>
          <LeftContent>
            <Name>yuyuezhang</Name>
            {lang === 'zh' && <NameSub>张宇越</NameSub>}
            {lang === 'ja' && <NameSub>張宇越</NameSub>}
            {lang === 'en' && <NameSub>Zhang Yuyue</NameSub>}
            <Title>Digital Craftsman ( Artist / Developer / Designer )</Title>
            <TitleSub>数字工匠（艺术家/开发者/设计师）</TitleSub>
          </LeftContent>
          
          <ProfileImage>
            <img src="/profile-cat.png" alt="Profile" />
          </ProfileImage>
        </MainContent>

        <SectionTitle>Work {lang === 'zh' ? '作品' : lang === 'ja' ? '作品' : 'Work'}</SectionTitle>
        
        <BioText dangerouslySetInnerHTML={{ __html: parseBio(t('banner.bio')) }} />
      </Container>
    </BannerWrap>
  );
}

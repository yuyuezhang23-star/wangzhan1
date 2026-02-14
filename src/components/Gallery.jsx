import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { galleryImages } from '../data/galleryImages.js';

const GalleryWrap = styled.section`
  padding: 6rem 0;
  background: #0a192f;
  min-height: 100vh;
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

const Content = styled.div`
  color: #8892b0;
  line-height: 1.8;
  font-size: 0.95rem;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ImageItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.05);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default function Gallery() {
  const { t, lang } = useI18n();

  return (
    <GalleryWrap id="gallery">
      <Container>
        <SectionTitle>
          {lang === 'zh' ? '我的照片' : lang === 'ja' ? '私の写真' : 'My Photos'}
        </SectionTitle>
        <Content>
          <p>
            {lang === 'zh' 
              ? '这是我的一些生活的记录。' 
              : lang === 'ja'
              ? 'ここに私の写真と言葉の記録があります。'
              : 'Here are some of my photos and text records.'}
          </p>
        </Content>
        <ImageGrid>
          {galleryImages.map((item, i) => (
            <ImageItem key={i}>
              <img src={item.src} alt={item.alt} onError={(e) => console.error('Failed to load', item.src, e)} />
            </ImageItem>
          ))}
        </ImageGrid>
      </Container>
    </GalleryWrap>
  );
}

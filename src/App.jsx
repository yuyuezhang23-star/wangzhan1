import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Resume from './components/Resume';
import Interests from './components/Interests';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition.jsx';
import styled from 'styled-components';

const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

function App() {
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'contact'];
    const nodes = sections.map((id) => document.getElementById(id)).filter(Boolean);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    for (const n of nodes) observer.observe(n);
    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition>
      <AppWrap>
        <Sidebar activeId={activeId} />
        <MainContent>
          <Banner />
          <Resume />
          <Interests />
          <Gallery />
          <Projects />
          <Contact />
        </MainContent>
      </AppWrap>
    </PageTransition>
  );
}

export default App;

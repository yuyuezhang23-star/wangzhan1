import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`;

export default function ParallaxSection({ children, speed = 0.5, className = '' }) {
  const layerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(layer, {
          y: progress * 100 * speed,
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [speed]);

  return (
    <ParallaxWrapper ref={wrapperRef} className={className}>
      <ParallaxLayer ref={layerRef} />
      <ContentLayer>{children}</ContentLayer>
    </ParallaxWrapper>
  );
}

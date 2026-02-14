import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function PageTransition({ children }) {
  useEffect(() => {
    // 页面加载时的淡入动画
    gsap.fromTo(
      'main',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  }, []);

  return <>{children}</>;
}

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

export default function ParticleBackground({ type = 'stars' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (type === 'stars') {
      // 星空粒子效果
      class Star {
        constructor() {
          this.reset();
          this.y = Math.random() * canvas.height;
        }

        reset() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speed = Math.random() * 0.5 + 0.2;
          this.opacity = Math.random() * 0.5 + 0.3;
          this.twinkle = Math.random() * 0.02 + 0.01;
          this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
          this.y += this.speed;
          this.opacity += this.twinkle * this.twinkleDirection;
          
          if (this.opacity > 0.8 || this.opacity < 0.2) {
            this.twinkleDirection *= -1;
          }

          if (this.y > canvas.height) {
            this.reset();
            this.y = 0;
          }
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.fill();
          
          // 添加光晕效果
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 3
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(200, 220, 255, ${this.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(200, 220, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      // 创建粒子
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Star());
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(star => {
          star.update();
          star.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    } else if (type === 'matrix') {
      // 代码雨效果
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(1);

      const draw = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(45, 212, 191, 0.4)';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = String.fromCharCode(0x30a0 + Math.random() * 96);
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillText(text, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const animate = () => {
        draw();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    } else if (type === 'particles') {
      // 高级粒子系统
      class Particle {
        constructor() {
          this.reset();
        }

        reset() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 3 + 1;
          this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(45, 212, 191, ${this.opacity})`;
          ctx.fill();
        }
      }

      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      const drawConnections = () => {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(45, 212, 191, ${0.2 * (1 - distance / 150)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        drawConnections();

        animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [type]);

  return <Canvas ref={canvasRef} />;
}

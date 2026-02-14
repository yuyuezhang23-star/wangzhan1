import { useRef, forwardRef } from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }
`;

const RippleButton = forwardRef(({ children, onClick, as, className, ...props }, ref) => {
  const buttonRef = useRef(null);
  const actualRef = ref || buttonRef;

  const handleClick = (e) => {
    const button = actualRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) onClick(e);
  };

  const Component = as || ButtonBase;

  return (
    <Component
      ref={actualRef}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

RippleButton.displayName = 'RippleButton';

export default RippleButton;

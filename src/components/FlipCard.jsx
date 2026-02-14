import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(p) => (p.$flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

const CardFront = styled(CardFace)`
  background: #fff;
  padding: 1.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
  padding: 1.75rem;
  transform: rotateY(180deg);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
`;

export default function FlipCard({ front, back, className }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer
      className={className}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <CardInner $flipped={flipped}>
        <CardFront>{front}</CardFront>
        <CardBack>{back}</CardBack>
      </CardInner>
    </CardContainer>
  );
}

import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.8rem;
  color: #3d6666;
  padding: 3.125rem 0rem;

  @media (min-width: 768px) {
    padding-top: 10.1875rem;
    padding-bottom: 5.5rem;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      SPLI
      <br />
      TTER
    </StyledLogo>
  );
}

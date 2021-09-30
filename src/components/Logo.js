import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.8rem;
  color: #3d6666;
  padding: 50px 0px;
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

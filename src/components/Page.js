import styled from 'styled-components';
import Calculator from './Calculator';
import Logo from './Logo';

const StyledPage = styled.div`
  font-family: 'Space Mono', monospace;
  background-color: #c5e4e7;
  min-height: 100vh;
`;

const StyledPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page() {
  return (
    <StyledPage>
      <StyledPageContainer>
        <Logo />
        <Calculator />
      </StyledPageContainer>
    </StyledPage>
  );
}

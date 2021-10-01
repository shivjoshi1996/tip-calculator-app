import styled from 'styled-components';

const StyledTipButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 48px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.main};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.darkCyan};
  }
`;

export default function TipButton({ amount, handleTipInput }) {
  return (
    <StyledTipButton onClick={() => handleTipInput(amount)} type="button">
      {amount}%
    </StyledTipButton>
  );
}

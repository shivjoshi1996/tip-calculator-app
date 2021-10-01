import styled from 'styled-components';

const StyledTipButton = styled.button`
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  font-family: ${({ theme }) => theme.font.main};
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

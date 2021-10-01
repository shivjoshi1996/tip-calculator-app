import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #00474b;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 48px;
  font-weight: bold;
  font-family: 'Space Mono', monospace;

  &:hover {
    background-color: #9fe8df;
    color: #00474b;
  }
`;

export default function Button({ amount, handleTipInput }) {
  return (
    <StyledButton onClick={() => handleTipInput(amount)} type="button">
      {amount}%
    </StyledButton>
  );
}

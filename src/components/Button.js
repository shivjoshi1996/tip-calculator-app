import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? '#26C2AE' : '#00474B')};
  color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;

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

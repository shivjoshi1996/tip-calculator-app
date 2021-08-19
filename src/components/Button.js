import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #00474b;
  color: white;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  padding: 1rem;
`;

export default function Button({ amount }) {
  return <StyledButton type="button">{amount}%</StyledButton>;
}

import styled from 'styled-components';
import TipButton from './TipButton';

const StyledTipGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  input {
    font-family: 'Space Mono', monospace;
    font-weight: bold;
  }
`;

export default function TipSelection({ handleTipInput }) {
  function handleCustomFieldChange({ target }) {
    const { value } = target;
    handleTipInput(value);
  }

  return (
    <StyledTipGrid>
      <TipButton handleTipInput={handleTipInput} amount={5} />
      <TipButton handleTipInput={handleTipInput} amount={10} />
      <TipButton handleTipInput={handleTipInput} amount={15} />
      <TipButton handleTipInput={handleTipInput} amount={25} />
      <TipButton handleTipInput={handleTipInput} amount={50} />
      <input
        onChange={handleCustomFieldChange}
        type="number"
        placeholder="Custom"
      />
    </StyledTipGrid>
  );
}

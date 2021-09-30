import styled from 'styled-components';
import Button from './Button';

export default function TipSelection({ handleTipInput }) {
  function handleCustomFieldChange({ target }) {
    const { value } = target;
    handleTipInput(value);
  }

  const StyledTipGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    input {
      font-family: 'Space Mono', monospace;
      font-weight: bold;
    }
  `;

  return (
    <StyledTipGrid>
      <Button handleTipInput={handleTipInput} amount={5} />
      <Button handleTipInput={handleTipInput} amount={10} />
      <Button handleTipInput={handleTipInput} amount={15} />
      <Button handleTipInput={handleTipInput} amount={25} />
      <Button handleTipInput={handleTipInput} amount={50} />
      <input
        onChange={handleCustomFieldChange}
        type="number"
        placeholder="Custom"
      />
    </StyledTipGrid>
  );
}

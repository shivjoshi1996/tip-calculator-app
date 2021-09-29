import Button from './Button';

export default function TipSelection({ handleTipInput }) {
  function handleCustomFieldChange({ target }) {
    const { value } = target;
    handleTipInput(value);
  }

  return (
    <div>
      <Button handleTipInput={handleTipInput} amount={5} />
      <Button handleTipInput={handleTipInput} amount={10} />
      <Button handleTipInput={handleTipInput} amount={15} />
      <Button handleTipInput={handleTipInput} amount={25} />
      <Button handleTipInput={handleTipInput} amount={50} />
      <input
        onChange={handleCustomFieldChange}
        type="number"
        placeholder="custom"
      />
    </div>
  );
}

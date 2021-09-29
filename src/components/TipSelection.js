import Button from './Button';

export default function TipSelection({ handleTipInput }) {
  return (
    <div>
      <Button handleTipInput={handleTipInput} amount={5} />
      <Button handleTipInput={handleTipInput} amount={10} />
      <Button handleTipInput={handleTipInput} amount={15} />
      <Button handleTipInput={handleTipInput} amount={25} />
      <Button handleTipInput={handleTipInput} amount={50} />
      <input type="number" placeholder="custom" />
    </div>
  );
}

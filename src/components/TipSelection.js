import Button from './Button';

export default function TipSelection({ setTipAmount }) {
  return (
    <div>
      <Button setTipAmount={setTipAmount} amount={5} />
      <Button setTipAmount={setTipAmount} amount={10} />
      <Button setTipAmount={setTipAmount} amount={15} />
      <Button setTipAmount={setTipAmount} amount={25} />
      <Button setTipAmount={setTipAmount} amount={50} />
      <input type="number" placeholder="custom" />
    </div>
  );
}

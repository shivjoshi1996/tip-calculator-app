import Button from './Button';

export default function TipSelection() {
  return (
    <div>
      <Button amount={5} />
      <Button amount={10} />
      <Button amount={15} />
      <Button amount={25} />
      <Button amount={50} />
    </div>
  );
}

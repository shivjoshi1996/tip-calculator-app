function checkIfNumber(input) {
  const inputConvertedToNumber = Number(input);
  if (Number.isNaN(inputConvertedToNumber)) {
    return false;
  }
  return true;
}

export { checkIfNumber };

function roundToTwoDecimalPlace(num) {
  return Math.round(num * 100) / 100;
}

// DID NOT USE BUT SHOULD REFACTOR TO USE THE METHOD BELOW INSTEAD

// const formatter = new Intl.NumberFormat('en-US', {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2,
// });

export { roundToTwoDecimalPlace };

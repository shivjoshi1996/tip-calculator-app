import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TipSelection from './TipSelection';

const StyledCalculatorContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function Calculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  function calculateTipAmountPerPerson() {
    const tipPerPerson = billAmount * (tipAmount / numberOfPeople);
    setTipAmountPerPerson(tipPerPerson);
    console.log(tipPerPerson);
  }

  function calculateTotalPerPerson() {
    const total = billAmount / numberOfPeople + tipAmountPerPerson;
    setTotalPerPerson(total);
  }

  useEffect(() => {
    calculateTipAmountPerPerson();
  }, [billAmount, numberOfPeople, tipAmount]);

  useEffect(() => {
    calculateTotalPerPerson();
  }, [billAmount, numberOfPeople, tipAmount, tipAmountPerPerson]);

  function handleBillInput(e) {
    const { value } = e.currentTarget;
    setBillAmount(value);
  }

  function handlePeopleInput(e) {
    const { value } = e.currentTarget;
    setNumberOfPeople(value);
  }

  function handleTipInput(tip) {
    const calculatedTip = tip / 100;
    setTipAmount(calculatedTip);
  }

  return (
    <StyledCalculatorContainer>
      <label htmlFor="bill">
        Bill
        <input
          type="text"
          placeholder="Add Total Price of bill"
          value={billAmount}
          onChange={handleBillInput}
        />
      </label>
      {
        // eslint-disable-next-line
      }<TipSelection handleTipInput={handleTipInput} />
      <label htmlFor="people">
        Number Of People
        <input
          type="number"
          placeholder="Type in Group Size"
          value={numberOfPeople}
          onChange={handlePeopleInput}
        />
      </label>
      <p>Tip Amount / Per Person {tipAmountPerPerson}</p>
      <p>Total / Per Person {totalPerPerson}</p>
    </StyledCalculatorContainer>
  );
}

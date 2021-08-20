import React, { useState } from 'react';
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

  console.log(tipAmount);

  function handleBillInput(e) {
    const { value } = e.currentTarget;
    console.log(parseFloat(value));
    setBillAmount(value);
  }

  function handlePeopleInput(e) {
    const { value } = e.currentTarget;
    setNumberOfPeople(value);
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
      <TipSelection setTipAmount={setTipAmount} />
      <label htmlFor="people">
        Number Of People
        <input
          type="number"
          placeholder="Type in Group Size"
          value={numberOfPeople}
          onChange={handlePeopleInput}
        />
      </label>
      <p>Tip Amount / Per Person {tipAmount / billAmount / numberOfPeople}</p>
      <p>Total / Per Person {billAmount / numberOfPeople}</p>
    </StyledCalculatorContainer>
  );
}

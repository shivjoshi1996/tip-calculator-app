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
  const [billAmount, setBillAmount] = useState('');

  function handleBillInput(e) {
    const { value } = e.currentTarget;
    console.log(parseFloat(value));
    setBillAmount(value);
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
      <TipSelection />
    </StyledCalculatorContainer>
  );
}

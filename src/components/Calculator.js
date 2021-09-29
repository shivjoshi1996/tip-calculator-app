import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TipSelection from './TipSelection';

const StyledCalculatorContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 2rem;

  label {
    color: #5e7a7d;
    font-weight: bold;
  }

  input {
    border: none;
    background-color: #f3f9fa;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #00474b;
    text-align: right;
  }
`;

const StyledTotalsSection = styled.div`
  background-color: #00474b;
  width: 90%;
  margin: 0 auto;
  border-radius: 15px;
  padding-top: 2.3125rem;
  padding-bottom: 1.5rem;

  p {
    color: white;
    font-weight: bold;
  }
  span {
    color: #7f9d9f;
    font-size: 0.8125rem;
  }
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
          min="1"
          step="1"
        />
      </label>
      <StyledTotalsSection>
        <p>
          Tip Amount
          <br />
          <span> / Person {tipAmountPerPerson}</span>
        </p>
        <p>
          Total <br />
          <span> / Person {totalPerPerson}</span>
        </p>
      </StyledTotalsSection>
    </StyledCalculatorContainer>
  );
}

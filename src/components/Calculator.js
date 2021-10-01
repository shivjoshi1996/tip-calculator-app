import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TipSelection from './TipSelection';
import roundToTwoDecimalPlace from '../utils/currency';

const StyledCalculatorContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0px 0px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: 920px;

  @media (min-width: 768px) {
    border-radius: 25px;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  }

  label {
    color: ${({ theme }) => theme.colors.darkGrayCyan};
    font-weight: bold;
    padding-bottom: 10px;
  }

  input {
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrayCyan2};
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.darkCyan};
    text-align: right;
    width: 100%;
    background-image: url('/public/dollaricon.png') no-repeat scroll 7px 7px;
    margin-bottom: 32px;
    font-weight: bold;
    border-radius: 5px;
  }
`;

const StyledContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const StyledInputsSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const StyledTipContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    color: #26c2ae;
    font-size: 2rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const StyledTotalsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.darkCyan};
  border-radius: 15px;
  padding-top: 2.3125rem;
  padding-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: left;
  }
  span {
    color: ${({ theme }) => theme.colors.darkGrayCyan2};
    font-size: 0.8125rem;
  }
`;

const StyledResetButton = styled.button`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkCyan};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  height: 48px;
  width: 90%;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrayCyan};
    color: ${({ theme }) => theme.colors.darkCyan};
  }

  @media (min-width: 768px) {
    margin-top: auto;
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
    const tipPerPersonRounded = roundToTwoDecimalPlace(tipPerPerson);
    setTipAmountPerPerson(tipPerPersonRounded);
  }

  function calculateTotalPerPerson() {
    const total = billAmount / numberOfPeople + tipAmountPerPerson;
    const totalRounded = roundToTwoDecimalPlace(total);
    setTotalPerPerson(totalRounded);
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

  function resetForm() {
    setBillAmount(0);
    setNumberOfPeople(1);
    setTipAmount(0);
    setTipAmountPerPerson(0);
    setTotalPerPerson(0);
  }

  return (
    <StyledCalculatorContainer>
      <StyledContentContainer>
        <StyledInputsSection>
          {
            // eslint-disable-next-line
           }<label htmlFor="bill">Bill</label>
          <input
            type="text"
            placeholder="Add Total Price of bill"
            value={billAmount}
            onChange={handleBillInput}
            id="bill"
          />
          {
            // eslint-disable-next-line
      }<label htmlFor="tip"> Select Tip %</label>
          {
            // eslint-disable-next-line
      }<TipSelection handleTipInput={handleTipInput} />
          {
            // eslint-disable-next-line
          }<label htmlFor="people">Number Of People</label>
          <input
            type="number"
            placeholder="Type in Group Size"
            value={numberOfPeople}
            onChange={handlePeopleInput}
            min="1"
            step="1"
            id="people"
          />
        </StyledInputsSection>
        <StyledTotalsSection>
          <StyledTipContent>
            <p>
              Tip Amount
              <br />
              <span> / Person </span>
            </p>
            <h2>{`$${tipAmountPerPerson}`}</h2>
          </StyledTipContent>
          <StyledTipContent>
            <p>
              Total <br />
              <span> / Person</span>
            </p>
            <h2>{`$${totalPerPerson}`}</h2>
          </StyledTipContent>
          {
            // eslint-disable-next-line
          }<StyledResetButton type="button" onClick={resetForm}>
            Reset
          </StyledResetButton>
        </StyledTotalsSection>
      </StyledContentContainer>
    </StyledCalculatorContainer>
  );
}

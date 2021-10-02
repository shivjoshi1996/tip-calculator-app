import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TipSelection from './TipSelection';
import { roundToTwoDecimalPlace } from '../utils/currency';
import { checkIfNumber } from '../utils/validation';

const StyledCalculatorContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 920px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0px 0px;
  font-weight: bold;

  @media (min-width: 768px) {
    border-radius: 25px;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  }

  label {
    padding-bottom: 0.625rem;
    color: ${({ theme }) => theme.colors.darkGrayCyan};
  }

  input {
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkCyan};
    background-color: ${({ theme }) => theme.colors.lightGrayCyan2};
    border: none;
    border-radius: 5px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    &::placeholder {
      color: ${({ theme }) => theme.colors.darkCyan};
      opacity: 0.35;
    }
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
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: #26c2ae;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const StyledTotalsSection = styled.div`
  padding-top: 2.3125rem;
  padding-bottom: 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  border-radius: 15px;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
  }
  span {
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.darkGrayCyan2};
  }
`;

const StyledResetButton = styled.button`
  width: 90%;
  height: 3rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkCyan};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
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
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    function calculateTipAmountPerPerson() {
      const tipPerPerson = billAmount * (tipAmount / numberOfPeople);
      const tipPerPersonRounded = roundToTwoDecimalPlace(tipPerPerson);

      if (
        checkIfNumber(tipPerPersonRounded) &&
        Number.isFinite(tipPerPersonRounded)
      ) {
        setTipAmountPerPerson(tipPerPersonRounded);
      } else {
        setTipAmountPerPerson('N/A');
      }
    }
    calculateTipAmountPerPerson();
  }, [billAmount, numberOfPeople, tipAmount]);

  useEffect(() => {
    function calculateTotalPerPerson() {
      const total = billAmount / numberOfPeople + tipAmountPerPerson;
      const totalRounded = roundToTwoDecimalPlace(total);
      if (checkIfNumber(totalRounded) && Number.isFinite(totalRounded)) {
        setTotalPerPerson(totalRounded);
      } else {
        setTotalPerPerson('N/A');
      }
    }
    calculateTotalPerPerson();
  }, [billAmount, numberOfPeople, tipAmount, tipAmountPerPerson]);

  function handleBillInput(e) {
    const { value } = e.currentTarget;
    if (checkIfNumber(value)) {
      setBillAmount(value);
    }
  }

  function handlePeopleInput(e) {
    const { value } = e.currentTarget;
    if (checkIfNumber(value)) {
      setNumberOfPeople(value);
    }
  }

  function handleTipInput(tip) {
    const calculatedTip = tip / 100;
    setTipAmount(calculatedTip);
  }

  function resetForm() {
    setBillAmount('');
    setNumberOfPeople('');
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
            placeholder="0"
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
            type="text"
            placeholder="0"
            value={numberOfPeople}
            onChange={handlePeopleInput}
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

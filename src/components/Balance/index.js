import React from 'react';
import propTypes from 'prop-types';
import { StyledSection, StyledSpan } from './Balance.styled';

const Balance = ({ balance, income, expenses }) => (
  <StyledSection>
    <StyledSpan>&#8593;</StyledSpan>
    <StyledSpan>{income}$</StyledSpan>
    <StyledSpan>&#8595;</StyledSpan>
    <StyledSpan>{expenses}$</StyledSpan>
    <StyledSpan>Balance: {balance}$</StyledSpan>
  </StyledSection>
);

Balance.propTypes = {
  balance: propTypes.number.isRequired,
  income: propTypes.number.isRequired,
  expenses: propTypes.number.isRequired,
};

export default Balance;

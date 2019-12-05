import React from 'react';
import propTypes from 'prop-types';
import {
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledTd,
} from './TransactionsHistory.styled';

const Transactions = ({ items }) => {
  return (
    <>
      {items.length > 0 && (
        <StyledTable>
          <StyledThead>
            <tr>
              <StyledTh>Transaction</StyledTh>
              <StyledTh>Amount</StyledTh>
              <StyledTh>Date</StyledTh>
            </tr>
          </StyledThead>
          <StyledTbody>
            {items.map(item => (
              <tr key={item.id}>
                <StyledTd>{item.type}</StyledTd>
                <StyledTd>{item.amount}$</StyledTd>
                <StyledTd>{item.date}</StyledTd>
              </tr>
            ))}
          </StyledTbody>
        </StyledTable>
      )}
    </>
  );
};

Transactions.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      type: propTypes.string,
      amount: propTypes.number,
      date: propTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Transactions;

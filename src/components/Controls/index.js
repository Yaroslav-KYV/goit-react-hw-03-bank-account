import React, { Component } from 'react';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { StyledSection, StyledInput, StyledButton } from './Controls.styled';

toast.configure();

export default class Controls extends Component {
  static propTypes = {
    onDeposit: propTypes.func.isRequired,
    onWithdraw: propTypes.func.isRequired,
  };

  state = {
    amountMoney: 0,
  };

  handleDeposit = () => {
    this.props.onDeposit(this.state.amountMoney);
    this.setState({ amountMoney: 0 });
  };

  handleWithdraw = () => {
    this.props.onWithdraw(this.state.amountMoney);
    this.setState({ amountMoney: 0 });
  };

  handleChange = e => {
    this.setState({
      amountMoney: e.currentTarget.value,
    });
  };

  render() {
    const { amountMoney } = this.state;
    return (
      <StyledSection>
        <StyledInput
          type="number"
          name="amount"
          min="0"
          value={amountMoney}
          onChange={this.handleChange}
        />
        <StyledButton type="button" onClick={this.handleDeposit}>
          Deposit
        </StyledButton>
        <StyledButton type="button" onClick={this.handleWithdraw}>
          Withdraw
        </StyledButton>
      </StyledSection>
    );
  }
}

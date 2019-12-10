import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from '../Controls';
import Balance from '../Balance';
import Transactions from '../TransactionHistory';
import Storage from '../LocalStorage';

toast.configure();

const Transaction = {
  Deposit: 'Deposit',
  Withdraw: 'Withdraw',
};

const Message = {
  InsufficientFunds: 'Insufficient funds to carry out the operation',
  EnterAmount: 'Please enter the amount to perform the transaction!',
};

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  componentDidMount() {
    const dataAccount = Storage.get('dataAccount');
    if (dataAccount) {
      this.setState({ ...dataAccount });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { transactions } = this.state;
    if (prevState.transactions !== transactions) {
      Storage.set('dataAccount', this.state);
    }
  }

  createTransaction = (amount, transactionType) => {
    const amountConvertToFloat = parseFloat(amount);
    const transaction = {
      id: uuidv1(),
      type: transactionType,
      amount: amountConvertToFloat,
      date: new Date().toLocaleString(),
    };

    return transaction;
  };

  onDeposit = amount => {
    if (amount === '' || amount <= 0) {
      toast(Message.EnterAmount);
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.Deposit);
    this.setState(state => ({
      transactions: [...state.transactions, transaction],
      balance: state.balance + transaction.amount,
    }));
  };

  onWithdraw = amount => {
    if (amount === '' || amount <= 0) {
      toast(Message.EnterAmount);
      return;
    }
    if (amount > this.state.balance) {
      toast.error(Message.InsufficientFunds);
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.Withdraw);

    this.setState(state => ({
      transactions: [...state.transactions, transaction],
      balance: state.balance - transaction.amount,
    }));
  };

  countMoney = () => {
    const { transactions } = this.state;

    return transactions.reduce(
      (acc, transaction) => {
        acc[transaction.type] += transaction.amount;
        return acc;
      },
      {
        Deposit: 0,
        Withdraw: 0,
      },
    );
  };

  render() {
    const { balance, transactions } = this.state;
    const income = this.countMoney().Deposit;
    const expenses = this.countMoney().Withdraw;
    return (
      <div>
        <Controls onDeposit={this.onDeposit} onWithdraw={this.onWithdraw} />
        <Balance balance={balance} income={income} expenses={expenses} />
        <Transactions items={transactions} />
      </div>
    );
  }
}
